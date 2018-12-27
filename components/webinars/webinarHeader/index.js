import React from 'react';
import Router from 'next/router';

const webinarsHeader = (props) => {
    let {webinarCategory} = props;
    return(
        <section className="new-home-cards">
            <section className="section-one publication-header" style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.66), rgba(6, 6, 6, 0.72)),url('/static/images/buffalo.jpg')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",}} >
                <div className="third-row">
                    <div className="container custom-container">
                        <div className="row flex">
                            <div className="header-text publication-text">
                                <p><br/><span>Webinars</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="small-upper-line flex">
                    <div className="line"> </div>
                </div>
                <div className="pagename">
                    <h4>{webinarCategory}</h4>
                </div>
            </section>
            <div className="empty-div">
                <div className="container">
                    <div className="course-text1"><div onClick={() => Router.back()}><i className="fa fa-chevron-left"> </i></div><p>BACK TO PREVIOUS </p></div>
                </div>
            </div>
        </section>    )
};
export default webinarsHeader;