import React, { Component } from "react";
class Footer extends Component{

    render(){
        return(
            <footer className="footer   ">
                <div className="container give-bottom">
                    <div className="container">
                        <div className="container">
                            <div className=" responsive-flex row mt-5">
                                <div className="col-sm-2 responsive-no-off all-width col-2 mt-5">
                                    <div className="redcolor"><p className="make-bold"><strong>Websites</strong></p></div>
                                    <div className="footer-menu">
                                        <div><p>companion</p></div>
                                        <div><p>Equine</p></div>
                                        <div><p>Medical</p></div>
                                        <div><p>Corporate</p></div>
                                    </div>
                                </div>
                                <div className="col-sm-2 col-2 all-width mt-5">
                                    <div className="redcolor"><p className="make-bold"><strong>LiteCure</strong></p></div>
                                    <div className="footer-menu">
                                        <div><p>About US</p></div>
                                        <div><p>Contact LiteCure</p></div>
                                        <div><p>Contact Sales</p></div>
                                        <div><p>Core Values</p></div>
                                        <div><p>Products</p></div>
                                        <div><p>Careers</p></div>
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
                                    <i className="fa fa-linkedin-square redcolor socialicons socialicons1" ></i>
                                    <i className="fa fa-twitter redcolor socialicons socialicons1"></i>
                                    <i className="fa fa-envelope redcolor  socialicons socialicons1" ></i>

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
