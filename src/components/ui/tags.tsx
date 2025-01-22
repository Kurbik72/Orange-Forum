import modal from '../ui/modalToCreate/modal.module.css';
import { TagsInput } from "react-tag-input-component";
import '../../styles/tags.css';
interface TittleInputProps {
    tag?: string[];
    setTag?: (value: string[]) => void
}

const tags: React.FC<TittleInputProps> = ({setTag, tag}) => {
return (
    <div className={modal.modal__tags}><TagsInput
                value={tag}
                onChange={setTag}
                placeHolder="Add your tags"
                /></div>
)
}

export default tags
