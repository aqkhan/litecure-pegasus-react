import React, { Component } from "react";
import Link from 'next/link';
class Footer extends Component{
    state={
        check:false,
    };
    // componentWillMount() {
    //     if (typeof document !== 'undefined') {
    //         this.callFbScript(document, 'script', 'facebook-jssdk');
    //     }
    //     if (typeof window !== 'undefined'){
    //         this.callFbScript(document, 'script', 'facebook-jssdk');
    //     }
    // }

    componentDidMount() {
        if (typeof document !== 'undefined') {
            this.callFbScript(document, 'script', 'facebook-jssdk');
        }
        if (typeof window !== 'undefined'){
            this.callFbScript(document, 'script', 'facebook-jssdk');
        }
    }
    // componentWillReceiveProps(nextProps, nextContext) {
    //     if (typeof document !== 'undefined') {
    //         this.callFbScript(document, 'script', 'facebook-jssdk');
    //     }
    //     if (typeof window !== 'undefined'){
    //         this.callFbScript(document, 'script', 'facebook-jssdk');
    //     }
    //      }

    callFbScript=(d, s, id)=>{
            setTimeout(()=>{
                let js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2';
                fjs.parentNode.insertBefore(js, fjs,);
                this.setState({check:true})
                },100)
    };


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
                                        <div><a href="https://www.companionanimalhealth.com/" target="_blank">Companion</a></div>
                                        <div><a href="http://www.pegasustherapy.com/">Equine</a></div>
                                        <div><a href="http://www.litecure.com/medical/" target="_blank">Medical</a></div>
                                        <div><a href="https://www.litecure.com/corporate/" target="_blank">Corporate</a></div>
                                    </div>
                                </div>
                                <div className="col-sm-2 col-2 all-width mt-5 responsiv-foot">
                                    <div className="redcolor"><p className="make-bold"><strong>Pegasus</strong></p></div>
                                    <div className="footer-menu">
                                        <div><Link href="/about-us"><a>About US</a></Link></div>
                                        {/*<div><Link href="http://www.litecureinfo.com/l/39022/2017-01-27/66hykx"><a target="_blank">Contact LiteCure</a></Link></div>*/}
                                        <div><Link href="/support"><a>Contact Sales</a></Link></div>
                                        {/*<div><Link href=""><a>Core Values</a></Link></div>*/}
                                        <div><Link href="/products"><a>Products</a></Link></div>
                                        <div><Link href="/user-manuals"><a>User Manuals</a></Link></div>
                                        <div><Link href="/employees"><a>Careers</a></Link></div>
                                    </div>
                                </div>
                                <div className="col-md-3 all-width mt-5 responsiv-foot">
                                    <div className="redcolor"><p className="make-bold"><a href="https://www.facebook.com/PegasusLaser/" target="_blank"><strong>Facebook</strong></a></p></div>

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
                                <div className="col-sm-3 col-3 social-icons mt-5 responsiv-foot">
                                    <div className="redcolor social-block"><p className="make-bold"><strong>Social Channels</strong></p></div>
                                    <div>
                                    {/*<a href="https://www.facebook.com/PegasusLaser/" target="_blank"><i className="fa fa-facebook redcolor socialicons socialicons1" /></a>*/}
                                    <a href="https://www.linkedin.com/company/pegasus-therapy/about/" target="_blank"><i className="fa fa-linkedin-square redcolor socialicons socialicons1" /></a>
                                    <a href="https://twitter.com/PegasusLaser" target="_blank"><i className="fa fa-twitter redcolor socialicons socialicons1"/></a>
                                    <a href="mailto:info@pegasustherapy.com" target="_blank"><i className="fa fa-envelope redcolor  socialicons socialicons1" /></a>
                                    <a href="https://www.instagram.com/pegasustherapy/" target="_blank"><i className="fa fa-instagram socialicons redcolor  socialicons1" /></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container give-bottom custom-container">
                    <div className="row mt-6 pb-5  footer-menu-last">
                        <div className="col-12 custom-flex-footer">
                            <div className="give-amazing-margin"><p>Copyright  © 2019 LiteCure, LLC. All rights reserved.</p> </div>
                            <div className="flex another-left">
                                {/*<Link href=""><a>Legal</a></Link>*/}
                                <Link href="/terms-of-use"><a>Terms of  Use</a></Link>
                                <Link href="/privacy-policy"><a>Privacy Policy</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }

}

export default Footer;
