import React from 'react';
import MainPicure from '../assets/images/pic01.jpg';
import SubPicture1 from '../assets/images/pic02.jpg';
import SubPicture2 from '../assets/images/pic03.jpg';

const Article = () => {
    return (
        <main>
        <section class="main-content">
            <article class="main-article">
                <div class="main-article-top-content">
                    <div class="date-container">
                        <div class="border"></div>
                        <h4 class="date">October 23, 2022</h4>
                        <div class="border"></div>
                    </div>
                    <h1>And this is a <br/> Massive headline</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/>
                    Et voluptatem quibusdam dicta necessitatibus ipsa ipsam cupiditate temporibus nulla error eveniet.<br/>
                    Eaque, eius perferendis iste rem numquam perspiciatis expedita inventore tenetur!
                    </p>
                </div>
                <div class="main-article-img">
                    <img src={MainPicure} alt="man-jump-into-rocks"/>
                </div>
                <button class="btn">full story</button>
            </article>
            <article class="sub-article-container">
                <div class="sub-article1">
                    <h4 class="date">October 23, 2022</h4>
                    <h1>And this is a <br/> Massive headline</h1>
                    <div class="article-img">
                        <img src={SubPicture1} alt="man-jump-into-rocks"/>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Et voluptatem quibusdam dicta necessitatibus ipsa ipsam cupiditate temporibus nulla error eveniet.
                    </p>
                    <button class="btn">full story</button>
                </div>
                <div class="sub-article2">
                    <h4 class="date">October 23, 2022</h4>
                    <h1>And this is a <br/> Massive headline</h1>
                    <div class="article-img">
                        <img src={SubPicture2} alt="man-jump-into-rocks"/>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Et voluptatem quibusdam dicta necessitatibus ipsa ipsam cupiditate temporibus nulla error eveniet.
                    </p>
                    <button class="btn">full story</button>
                </div>
            </article>
        </section>
    </main>
    );
};

export default Article;