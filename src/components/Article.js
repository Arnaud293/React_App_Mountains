import React, { useState } from 'react';
import { articlesData } from '../data/articlesData';


const Article = () => {

    const [fullStory, setFullStory] = useState(false);
    const [fullStorySub1, setFullStorySub1] = useState(false);
    const [fullStorySub2, setFullStorySub2] = useState(false);
    console.log(articlesData)

    const displayFullStory = () => {
    
        let fullStoryContainer = document.querySelector('.main-article-img span');

        if(fullStory === true){
        fullStoryContainer.style.visibility = 'visible';
        fullStoryContainer.style.display = 'flex';
        fullStoryContainer.style.justifyContent = 'center';
        fullStoryContainer.style.transform ='translateY(0px)';
        }
        if(fullStory === false) {
            fullStoryContainer.style.visibility = 'hidden';
            fullStoryContainer.style.display = 'none';
        }
    }
    const displayFullStorySub1 = () => {
    
        let fullStorySub1Container = document.querySelector('.sub-article1 .article-img span');

        if(fullStorySub1 === true){
        fullStorySub1Container.style.visibility = 'visible';
        fullStorySub1Container.style.display = 'flex';
        fullStorySub1Container.style.justifyContent = 'center';
        fullStorySub1Container.style.transform ='translateY(0px)';
        }
        if(fullStorySub1 === false) {
            fullStorySub1Container.style.visibility = 'hidden';
            fullStorySub1Container.style.display = 'none';
        }
    }
    const displayFullStorySub2 = () => {
    
        let fullStorySub2Container = document.querySelector('.sub-article2 .article-img span');

        if(fullStorySub2 === true){
        fullStorySub2Container.style.visibility = 'visible';
        fullStorySub2Container.style.display = 'flex';
        fullStorySub2Container.style.justifyContent = 'center';
        fullStorySub2Container.style.transform ='translateY(0px)';
        }
        if(fullStorySub2 === false) {
            fullStorySub2Container.style.visibility = 'hidden';
            fullStorySub2Container.style.display = 'none';
        }
    }

    return (
        <main>
        <section className="main-content">

            <article className="main-article">
                <div className="main-article-top-content">
                    <div className="date-container">
                        <div className="border"></div>
                        <h4 className="date">{articlesData[0].date}</h4>
                        <div className="border"></div>
                    </div>
                    <h1>And this is a <br/> Massive headline</h1>
                    <p>
                        {articlesData[0].text.slice(0,200) + '...'}
                    </p>
                </div>
                <div className="main-article-img">
                    <span>
                        <p>{articlesData[0].text}</p>
                    </span>
                    <img src={articlesData[0].img} alt="man-jump-into-rocks"/>
                </div>
                <button className="btn" onClick={() => displayFullStory() + setFullStory(!fullStory)}>full story</button>
            </article>

            <article className="sub-article-container">
                
                <div className="sub-article1">
                    <h4 className="date">{articlesData[1].date}</h4>
                    <h1>And this is a <br/> Massive headline</h1>
                    <div className="article-img">
                        <span>
                            <p>{articlesData[1].text}</p>
                        </span>
                        <img src={articlesData[1].img} alt="man-jump-into-rocks"/>
                    </div>
                    <p>{articlesData[1].text.slice(0,200) + '...'}</p>
                    <button className="btn" onClick={() => displayFullStorySub1() + setFullStorySub1(!fullStorySub1)}>full story</button>
                </div>

                <div className="sub-article2">
                    <h4 className="date">{articlesData[2].date}</h4>
                    <h1>And this is a <br/> Massive headline</h1>
                    <div className="article-img">
                        <span>
                            <p>{articlesData[2].text}</p>
                        </span>
                        <img src={articlesData[2].img} alt="man-jump-into-rocks"/>
                    </div>
                    <p>{articlesData[2].text.slice(0,200) + '...'}</p>
                    <button className="btn" onClick={() => displayFullStorySub2() + setFullStorySub2(!fullStorySub2)}>full story</button>
                </div>

            </article>

        </section>
    </main>
    );
};

export default Article;