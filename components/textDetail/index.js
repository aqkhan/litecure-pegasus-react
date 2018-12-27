import React, { Component } from 'react';
import RequestDemo from '../requestDemo'
class TextDetail extends Component{
    render() {
        return(
            <div>
                <section className="classification">
                    <section className="first-section">
                        <div className="container custom-container">
                            <div className="row flex">
                                <div className="header-text">
                                    <p> Support </p>
                                </div>
                            </div>
                        </div>
                        <div className="fourth-row text-area">
                            <div className=" container">
                                <div className="row ">
                                    <div className="col-sm-12 ">
                                        <div className="learnmore-header ex-class">
                                            <div className="data">
                                                <h1 className="whtie-color">We care:</h1>

                                                <p>Companion customer, we know it&rsquo;s frustrating when things go wrong &ndash; we are here for you! &nbsp;Our dedicated team of clinical and customer care representatives are available to answer your questions.</p>
                                                <h1 className="whtie-color">Contact Clinical Support:</h1>
                                                <p>For clinical questions about using Companion products on specific cases, please contact Companion&rsquo;s experienced clinical support team.</p>
                                                <p><strong>Hours</strong>: Monday &ndash; Friday 8 am &ndash; 6 pm</p>
                                                <div class="button-div two-button"><a href="http://tel:(001) 302-709-0408">Phone:&nbsp;(001) 302-709-0408</a>&nbsp;<a href="mailto:medicalassistance@companiontherapy.com">Email:&nbsp;medicalassistance@companiontherapy.com</a></div>

                                                <h1 className="whtie-color">Contact Sales Support:</h1>

                                                <p>For sales questions or to request a demonstration please contact our sales team.</p>

                                                <div class="button-div two-button"><a href="http://tel:(001) 302-709-0408">Phone (001) 302-709-0408</a> &nbsp;<a href="mailto:info@companiontherapy.com">Email:&nbsp;info@companiontherapy.com</a></div>

                                                <h1 className="whtie-color">UK Office:</h1>

                                                <div class="button-div two-button" ><a href="http://tel:01646.603878">Phone 01646.603878</a></div>

                                            </div>

                                            <div className="button">
                                                <a href="#">TERMS IN LASER THERAPY</a>
                                                <a href="#" className="benefits">BENEFITS OF LASER THERAPY</a>
                                                <a href="#">RESOURCES &amp; LINKS </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </section>
                <RequestDemo/>
            </div>
        )
    }
}

export default TextDetail;
