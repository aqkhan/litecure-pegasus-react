/**
 * Created by FaZi on 12/11/2018.
 */
import React from 'react';
const photomodulationHeader = (props) => {
    let {sendData} = props;
    return(
       <section  className="modulation-header" style={{
           background: `linear-gradient(rgba(0, 0, 0, 0.66), rgba(6, 6, 6, 0.72)),url('/static/images/buffalo.jpg')`,
           backgroundRepeat: "no-repeat",
           backgroundSize: "cover",}}>
           <div className="photobiomodulation-header">
               <div className="container custom-container">
                   <div className="product-image">
                       <img src="/static/images/computern.png" alt=""/></div>
                   <div className="photo-header"><p>Photobiomodulation</p></div>
                   <div className="photo-header-second">
                       <p>{sendData}<br/> <span>Evidence</span>
                       </p>
                   </div>
               </div>
           </div>
           <div className="empty-div">
               <div className="container custom-container">
                   <div className="course-text1">
                       <div>
                           <i className="fa fa-chevron-left"> </i>
                       </div>
                       <p>BACK TO PREVIOUS </p>
                   </div>
               </div>
           </div>
       </section>
    );
};
export default photomodulationHeader;