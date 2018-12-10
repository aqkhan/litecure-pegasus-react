/**
 * Created by FaZi on 12/10/2018.
 */
import React from 'react';

const publicImgSection = () => {
    return(
        <section className="public-img">
           <div className="container">
               <div className="primary-container">
                   <div>
                       <ul>
                           <li><a href="#" className="active">Evidence</a></li>
                       </ul>
                   </div>
                   <div style={{
                       background: `linear-gradient(rgba(0, 0, 0, 0.66), rgba(6, 6, 6, 0.72)),url('/static/images/buffalo.jpg')`,
                       backgroundRepeat: "no-repeat",
                       backgroundSize: "cover",}}>
                       <ul>
                           <li><a href="#" className="active">Publications</a></li>
                           <li><a href="#" className="active">Case Studies</a></li>
                           <li><a href="#">Scientific Studies</a></li>
                           <li><a href="#">Articles</a></li>
                       </ul>
                   </div>
               </div>
           </div>

        </section>
    )
};

export default publicImgSection;