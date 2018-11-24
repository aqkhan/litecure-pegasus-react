import React, { Component } from 'react';
import RequestDemo from '../requestDemo'
class TextDetail extends Component{
    render() {
        return(
            <div>
                <section className="first-section section-one">
                    <div className="container custom-container">
                        <div className="row flex">
                            <div className="header-text">
                                <p>LASER CLASSIFICATIONS</p>
                            </div>
                        </div>
                    </div>
                    <div className="fourth-row text-area">
                        <div className=" container">
                            <div className="row ">

                                <div className="col-sm-12 ">
                                    <div className=" learnmore-header ex-class">

                                        <p>
                                            Lasers are divided into safety classifications in the US by the American
                                            National Standard Identification (ANSI) and globally by the International
                                            Electrotechnical Commission (IEC). The classifications below from the
                                            revised system (2002) apply to non-magnified laser devices.<br/><br/>

                                            <span>Class I </span><br/>
                                            Safe under all conditions of normal use.<br/><br/>

                                            <span>Class II</span><br/>
                                            Applies to only visible light lasers (400-700nm). These devices are
                                            considered eye-safe because the blink reflex will limit exposure to less
                                            than 0.25 seconds. Intentional suppression of the blink reflex could lead to
                                            eye injury. Most laser pointers are Class II devices.<br/><br/>

                                            <span>CLASS III</span><br/>
                                            Class III lasers in the visible spectrum have continuous wave (cw) emission
                                            of 5mw or less. These devices are considered safe if handled carefully with
                                            restricted beam viewing<br/><br/>

                                            <span>CLASS IIIB</span><br/>
                                            IIIB lasers are hazardous to the eye when viewed directly. For visible and
                                            infrared devices emission power is limited to 0.5W. Protective eyewear, key
                                            switch and safety interlock are required safety features.<br/><br/>

                                            <span>CLASS IV</span><br/>
                                            Class IV lasers include all lasers that emit power in excess of IIIB
                                            limitations. Eye protection is needed to limit both direct and diffuse
                                            reflected exposure. Key switch and safety interlocks are also required
                                            safety features. Most scientific, industrial, military and medical lasers
                                            fall into this category.
                                        </p>
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

                <RequestDemo/>
            </div>
        )
    }
}

export default TextDetail;
