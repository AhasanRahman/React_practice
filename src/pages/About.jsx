import React from 'react';
import Header from './header';

const About = () => {
    return (
        <div>
            <Header/>
            <div style={{width:'500px', height:"500px", border:'1px solid ',textAlign:'center', margin:"0 auto"}} >
            <h1 style={{textAlign:'center'}}>This is about page</h1>
            <p>all rights Reserved by..</p>
            </div>
           
        </div>
    );
};

export default About;