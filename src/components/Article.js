import React, { useState } from 'react';
import { articlesData } from '../data/articlesData';
import MainPicure from '../assets/images/pic01.jpg';
import SubPicture1 from '../assets/images/pic02.jpg';
import SubPicture2 from '../assets/images/pic03.jpg';

const Article = () => {

    const [fullStory, setFullStory] = useState(false);
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
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/>
                    Et voluptatem quibusdam dicta necessitatibus ipsa ipsam cupiditate temporibus nulla error eveniet.<br/>
                    Eaque, eius perferendis iste rem numquam perspiciatis expedita inventore tenetur!
                    </p>
                </div>
                <div className="main-article-img">
                    <span>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Et voluptatem quibusdam dicta necessitatibus ipsa ipsam cupiditate temporibus nulla error eveniet.
                        Eaque, eius perferendis iste rem numquam perspiciatis expedita inventore tenetur!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Et voluptatem quibusdam dicta necessitatibus ipsa ipsam cupiditate temporibus nulla error eveniet.
                        Eaque, eius perferendis iste rem numquam perspiciatis expedita inventore tenetur!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Et voluptatem quibusdam dicta necessitatibus ipsa ipsam cupiditate temporibus nulla error eveniet.
                        Eaque, eius perferendis iste rem numquam perspiciatis expedita inventore tenetur!</p>
                    </span>
                    <img src={MainPicure} alt="man-jump-into-rocks"/>
                </div>
                <button className="btn" onClick={() => displayFullStory() + setFullStory(!fullStory)}>full story</button>
            </article>
            <article className="sub-article-container">
                <div className="sub-article1">
                    <h4 className="date">{articlesData[1].date}</h4>
                    <h1>And this is a <br/> Massive headline</h1>
                    <div className="article-img">
                        <img src={SubPicture1} alt="man-jump-into-rocks"/>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Et voluptatem quibusdam dicta necessitatibus ipsa ipsam cupiditate temporibus nulla error eveniet.
                    </p>
                    <button className="btn" onClick={() => displayFullStory() + setFullStory(!fullStory)}>full story</button>
                </div>
                <div className="sub-article2">
                    <h4 className="date">{articlesData[2].date}</h4>
                    <h1>And this is a <br/> Massive headline</h1>
                    <div className="article-img">
                        <img src={SubPicture2} alt="man-jump-into-rocks"/>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Et voluptatem quibusdam dicta necessitatibus ipsa ipsam cupiditate temporibus nulla error eveniet.
                    </p>
                    <button className="btn">full story</button>
                </div>
            </article>
        </section>
    </main>
    );
};

export default Article;