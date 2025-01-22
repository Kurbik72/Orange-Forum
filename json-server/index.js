const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');
const multer = require('multer');
const express = require('express');
const jwt = require('jsonwebtoken');

const dbPath = path.resolve(__dirname, 'db.json');
if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify({ users: [], posts: [] }, null, 2));
}

const server = jsonServer.create();
const router = jsonServer.router(dbPath);

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Настройка multer для загрузки файлов
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, 'uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    allowedMimeTypes.includes(file.mimetype) ? cb(null, true) : cb(new Error('Invalid file type'), false);
};

const upload = multer({ storage, fileFilter });


// Middleware для проверки авторизации
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header missing' });
    }

    const [bearer, token] = authHeader.split(' ');
    
    if (bearer !== 'Bearer' || !token) {
        return res.status(401).json({ message: 'Invalid token format' });
    }

    try {
        const decoded = jwt.verify(token, 'kkk');
        req.user = decoded;

        next();
    } catch (e) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};



// Эндпоинт для логина
server.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        const users = router.db.get('users').value();
        const user = users.find(u => u.username === username && u.password === password);
        
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.id, username: user.username }, 'kkk', { expiresIn: '1h' });
        res.json({ token });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
});


server.get('/getProfileInfo', authMiddleware, (req, res) => {
    const {username, avatar, id} = router.db
        .get('users')
        .value()
        .find(u => u.id === req.user.id)
        res.json({username, avatar, id});
})

// Защищаем все не-GET методы и upload
server.use((req, res, next) => {
    if (req.method === 'GET' && req.path !== '/upload') {
        return next();
    }
    authMiddleware(req, res, next);
});

// Эндпоинт для загрузки аватара
server.post('/upload', upload.single('file'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const userId = req.user.id;
        const user = router.db.get('users').find({ id: userId }).value();

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const fileUrl = `http://localhost:8000/uploads/${req.file.filename}`;
        router.db.get('users')
            .find({ id: userId })
            .assign({ avatar: fileUrl })
            .write();

        res.json({ url: fileUrl });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
});

// Хук для сохранения данных после стандартных операций
router.render = (req, res) => {
    const methods = ['POST', 'PUT', 'PATCH', 'DELETE'];
    if (methods.includes(req.method)) {
        router.db.write();
    }
    res.jsonp(res.locals.data);
};

// Статические файлы
server.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));
server.use(router);

// Запуск сервера
server.listen(8000, () => {
    console.log('Server is running on port 8000');
});
