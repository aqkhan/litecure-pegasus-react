import React, { Component } from "react";
import Link from 'next/link';
class Footer extends Component{
    state={
        check:false,
    };
    componentWillMount() {
        if (typeof document !== 'undefined') {
            this.callFbScript(document, 'script', 'facebook-jssdk');
        }
    }
    // componentWillUpdate() {
    //         this.callFbScript(document, 'script', 'facebook-jssdk');
    // }
    // componentDidMount() {
    //     this.callFbScript(document, 'script', 'facebook-jssdk');
    // }
    // componentWillReceiveProps(nextProps, nextContext) {
    //     let {test}=nextProps;
    //     this.setState({test})
    //     this.callFbScript(document, 'script', 'facebook-jssdk');
    // }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     this.callFbScript(document, 'script', 'facebook-jssdk');
    // }
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return true;
    // }

    callFbScript(d, s, id){
            setTimeout(()=>{
                let js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2';
                fjs.parentNode.insertBefore(js, fjs,);
                this.setState({check:true})
                },100)
    }

    // callFbScript2(d, s, id){
    //     setTimeout(()=>{
    //         let js, fjs = d.getElementsByTagName(s)[0];
    //         if (d.getElementById(id)) return;
    //         js = d.createElement(s); js.id = id;
    //         js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2';
    //         fjs.parentNode.insertBefore(js, fjs,);
    //     },500)
    // }

    render(){
        return(
            <footer className="footer">
                <div className="container give-bottom">
                    <div className="container responsive-container">
                        <div className="container responsive-container">
                            <div className=" responsive-flex row mt-5">
                                <div className="col-sm-2 responsive-no-off all-width col-2 mt-5 responsiv-foot">
                                    <div className="redcolor"><p className="make-bold"><strong>Websites</strong></p></div>
                                    <div className="footer-menu">
                                        <div><a href="#">companion</a></div>
                                        <div><a href="#">Equine</a></div>
                                        <div><a href="#">Medical</a></div>
                                        <div><a href="#">Corporate</a></div>
                                    </div>
                                </div>
                                <div className="col-sm-2 col-2 all-width mt-5 responsiv-foot">
                                    <div className="redcolor"><p className="make-bold"><strong>LiteCure</strong></p></div>
                                    <div className="footer-menu">
                                        <div><Link href="/about-us"><a>About US</a></Link></div>
                                        <div><Link href="#"><a>Contact LiteCure</a></Link></div>
                                        <div><Link href="/support"><a>Contact Sales</a></Link></div>
                                        <div><Link href=""><a>Core Values</a></Link></div>
                                        <div><Link href="/products"><a>Products</a></Link></div>
                                        <div><Link href="/employees"><a>Careers</a></Link></div>
                                    </div>
                                </div>
                                <div className="col-md-3 all-width mt-5 responsiv-foot">
                                    <div className="redcolor"><p className="make-bold"><strong>Facebook</strong></p></div>

                                    <div className="footer-menu">
                                        {this.state.check?
                                            <div className="fb-page" data-href="https://www.facebook.com/PegasusLaser/"
                                                 data-tabs="timeline" data-width="500" data-height="300"
                                                 data-small-header="false" data-adapt-container-width="true"
                                                 data-hide-cover="false" data-show-facepile="true">
                                                <blockquote cite="https://www.facebook.com/PegasusLaser/"
                                                            className="fb-xfbml-parse-ignore"><a
                                                    href="https://www.facebook.com/PegasusLaser/">Pegasus Therapy
                                                    Laser</a></blockquote>
                                            </div>:<div><p>
                                                <span><a
                                                    href="https://www.facebook.com/PegasusLaser/">Pegasus Therapy
                                                    Laser</a></span></p>
                                            </div>}
                                    </div>
                                </div>
                                <div className="col-sm-2 col-2 social-icons mt-5 responsiv-foot">
                                    <Link href="https://www.linkedin.com/company/litecure-llc"><a><i className="fa fa-linkedin-square redcolor socialicons socialicons1" /></a></Link>
                                    <Link href="https://twitter.com/PegasusLaser"><a><i className="fa fa-twitter redcolor socialicons socialicons1"/></a></Link>
                                    <Link href="mailto:customer.service@litecure.com"><a><i className="fa fa-envelope redcolor  socialicons socialicons1" /></a></Link>
                                    <Link href="https://www.instagram.com/pegasustherapy/"><a><i className="fa fa-instagram socialicons redcolor  socialicons1" /></a></Link>
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
