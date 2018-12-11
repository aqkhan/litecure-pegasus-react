/**
 * Created by FaZi on 12/11/2018.
 */
import React from 'react';
const photomodulationHeader = () => {
    return(
       <section  class="modulation-header" style={{
           background: `linear-gradient(rgba(0, 0, 0, 0.66), rgba(6, 6, 6, 0.72)),url('/static/images/buffalo.jpg')`,
           backgroundRepeat: "no-repeat",
           backgroundSize: "cover",}}>
           <div class="photobiomodulation-header">
               <div class="container custom-container">
                   <div class="product-image">
                       <img src="/static/images/computern.png" alt=""/></div>
                   <div class="photo-header"><p>Photobiomodulation</p></div>
                   <div class="photo-header-second">
                       <p>What is Photobiomodulation?<br/> <span>Evidence</span>
                       </p>
                   </div>
               </div>
           </div>
           <div class="empty-div">
               <div class="container custom-container">
                   <div class="course-text1">
                       <div>
                           <i class="fa fa-chevron-left"> </i>
                       </div>
                       <p>BACK TO PREVIOUS </p>
                   </div>
               </div>
           </div>
       </section>
    );
};
export default photomodulationHeader;