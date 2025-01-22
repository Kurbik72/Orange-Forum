import React from 'react';
import Header from '../../components/simpe_components/header/header';
import PostSection from '../../components/simpe_components/postsMarkUp/postSection';
import homeStyle from '../../styles//homePage.module.css';

const Homepage = () => {
return (
    <div className={homeStyle.homepage}>
<Header/>
<PostSection/>

</div>
)
}

export default Homepage;