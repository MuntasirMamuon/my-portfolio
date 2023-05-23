import React from 'react';
import './Portfolio.css'
import project1 from '../../assets/6559672.jpg'
const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                <article className='portfolio__item'>
                   <div className="portfolio__item-image">
                        <img src={project1} alt="" />
                   </div>
                   <h3>This is a Portfolio item Title</h3>
                   <div className="portfolio__item-cta">
                   <a href="#" className='btn' target='_blank'>Github</a>
                   <a href="#" target='_blank' className='btn btn-primary'>Live Demo</a>
                   </div>
                </article>
                <article className='portfolio__item'>
                   <div className="portfolio__item-image">
                   <img src={project1} alt="" />
                   </div>
                   <h3>This is a Portfolio item Title</h3>
                   <div className="portfolio__item-cta">
                   <a href="#" className='btn' target='_blank'>Github</a>
                   <a href="#" target='_blank' className='btn btn-primary'>Live Demo</a>
                   </div>
                </article>
                <article className='portfolio__item'>
                   <div className="portfolio__item-image">
                   <img src={project1} alt="" />
                   </div>
                   <h3>This is a Portfolio item Title</h3>
                   <div className="portfolio__item-cta">
                   <a href="#" className='btn' target='_blank'>Github</a>
                   <a href="#" target='_blank' className='btn btn-primary'>Live Demo</a>
                   </div>
                </article>
                <article className='portfolio__item'>
                   <div className="portfolio__item-image">
                   <img src={project1} alt="" />
                   </div>
                   <h3>This is a Portfolio item Title</h3>
                   <div className="portfolio__item-cta">
                   <a href="#" className='btn' target='_blank'>Github</a>
                   <a href="#" target='_blank' className='btn btn-primary'>Live Demo</a>
                   </div>
                </article>
                <article className='portfolio__item'>
                   <div className="portfolio__item-image">
                   <img src={project1} alt="" />
                   </div>
                   <h3>This is a Portfolio item Title</h3>
                   <div className="portfolio__item-cta">
                   <a href="#" className='btn' target='_blank'>Github</a>
                   <a href="#" target='_blank' className='btn btn-primary'>Live Demo</a>
                   </div>
                </article>
                <article className='portfolio__item'>
                   <div className="portfolio__item-image">
                   <img src={project1} alt="" />
                   </div>
                   <h3>This is a Portfolio item Title</h3>
                   <div className="portfolio__item-cta">
                   <a href="#" className='btn' target='_blank'>Github</a>
                   <a href="#" target='_blank' className='btn btn-primary'>Live Demo</a>
                   </div>
                  
                </article>
            </div>
        </section>
    );
};

export default Portfolio;