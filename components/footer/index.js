import React, { Component } from "react";
class Footer extends Component{

    render(){
        return(
            <footer className="footer">
                <div className="container give-bottom">
                    <div className="container">
                        <div className="container">
                            <div className=" responsive-flex row mt-5">
                                <div className="col-sm-2 responsive-no-off all-width col-2 mt-5">
                                    <div className="redcolor"><p className="make-bold"><strong>Websites</strong></p></div>
                                    <div className="footer-menu">
                                        <div><a href="#">companion</a></div>
                                        <div><a href="#">Equine</a></div>
                                        <div><a href="#">Medical</a></div>
                                        <div><a href="#">Corporate</a></div>
                                    </div>
                                </div>
                                <div className="col-sm-2 col-2 all-width mt-5">
                                    <div className="redcolor"><p className="make-bold"><strong>LiteCure</strong></p></div>
                                    <div className="footer-menu">
                                        <div><a href="#">About US</a></div>
                                        <div><a href="#">Contact LiteCure</a></div>
                                        <div><a href="#">Contact Sales</a></div>
                                        <div><a href="#">Core Values</a></div>
                                        <div><a href="#">Products</a></div>
                                        <div><a href="#">Careers</a></div>
                                    </div>
                                </div>
                                <div className="col-md-3 all-width mt-5">
                                    <div className="redcolor"><p className="make-bold"><strong>Facebook</strong></p></div>

                                    <div className="footer-menu">


                                        <div><p><span>JULY 7, 2018</span><br/>
                                            Rowdy Can Walk!<br/>
                                            <span>WATCH VIDEO</span></p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-sm-2 col-2 social-icons mt-5">
                                    <a href="#"><i className="fa fa-linkedin-square redcolor socialicons socialicons1" ></i></a>
                                    <a href="#"><i className="fa fa-twitter redcolor socialicons socialicons1"></i></a>
                                    <a href="#"><i className="fa fa-envelope redcolor  socialicons socialicons1" ></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container give-bottom custom-container">
                    <div className="row mt-6 pb-5  footer-menu-last">
                        <div className="col-12 custom-flex-footer">
                            <div className="give-amazing-margin"><p>Copyright  © 2018 LiteCure, LLC. All rights reserved.</p> </div>
                            <div className="flex another-left">
                                <p>Legal</p>
                                <p>Terms of  Use</p>
                                <p>Privacy Policy</p>

                            </div>
                        </div>


                    </div>
                </div>

            </footer>
        )
    }

}

export default Footer;
