/**
 * Created by FaZi on 12/10/2018.
 */
import React from 'react';
const caseStudysection = () => {
    return (
        <section className="casestudy">
            <div className="container">
                <div className="casestudy-primary">
                    <div>
                        <div className="casestudy-text">
                            <span>Case Studies</span>
                            <span>Filter by topic categories</span>
                            <div className="list-dev">
                                <ul>
                                    <li><input type="checkbox" name="vehicle1"/> <span>Regenerative Medicine</span></li>
                                    <li><input type="checkbox" name="vehicle1"/> <span>Rehabilitation</span></li>
                                    <li><input type="checkbox" name="vehicle1"/> <span>Photobiomodulation</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="post-casestudy">
                            <div className="img-dev">
                                <a href="#"><img src="../../static/images/buffalo.jpg"/></a>
                            </div>
                            <div>
                                <a>Severe Bursitis and Osteoarthritis, American Quarter Horse Gelding</a>
                                <a>Read More</a>
                            </div>
                        </div>
                        <div className="post-casestudy">
                            <div className="img-dev">
                                <a href="#"><img src="../../static/images/buffalo.jpg"/></a>
                            </div>
                            <div>
                                <a>Severe Bursitis and Osteoarthritis, American Quarter</a>
                                <a>Read More</a>
                            </div>
                        </div>
                        <div className="post-casestudy">
                            <div className="img-dev">
                                <a href="#"><img src="../../static/images/buffalo.jpg"/></a>
                            </div>
                            <div>
                                <a>Severe Bursitis and Osteoarthritis</a>
                                <a>Read More</a>
                            </div>
                        </div>

                        <div>
                            <ul className="digit-icons main">
                                <li className="previous disabled"><a tabindex="0" role="button"><i
                                    className="fa fa-chevron-left "> </i></a></li>
                                <li className="p-one"><a role="button" tabindex="0"
                                                         aria-label="Page 1 is your current page"
                                                         aria-current="page">1</a></li>
                                <li><a role="button" tabindex="0" aria-label="Page 2">2</a></li>
                                <li><a role="button" tabindex="0" aria-label="Page 3">3</a></li>
                                <li><a role="button" tabindex="0" aria-label="Page 4">4</a></li>
                                <li className="next"><a tabindex="0" role="button"><i
                                    className="fa fa-chevron-right "> </i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default caseStudysection;