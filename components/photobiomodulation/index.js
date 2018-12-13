/**
 * Created by FaZi on 12/11/2018.
 */
import React, {Component} from 'react';
import PhotobiomodulationHeader from './photobiomodulationHeader';
import TempleteOne from './templetes/one.js';
import TempleteTwo from "./templetes/two";
import TempleteFive from "./templetes/five";
import TempleteSix from "./templetes/six";
import TempleteThree from "./templetes/three";
import TempleteFour from "./templetes/four";
import TempleteSeven from "./templetes/seven";
class PhotobiomodulationDetail extends Component {
    state = {
        sendtoHeader: "What is Photobiomodulation?",
        temp1:true,
        temp2:false,
        temp3:false,
        temp4:false,
        temp5:false,
        temp6:false,
        temp7:false,
        one: "active",
        two: "",
        three: "",
        four: "",
        five: "",
        six: "",
        seven: ""
    };

    changeContent(val) {
        switch (val) {
            case 1:
                this.setState({
                    one: 'active',
                    temp1:true,
                    temp2:false,
                    temp3:false,
                    temp4:false,
                    temp5:false,
                    temp6:false,
                    temp7:false,
                    two: "",
                    three: "",
                    four: "",
                    five: "",
                    six: "",
                    seven: "",
                    sendtoHeader: "What is Photobiomodulation?"
                });
                break;
            case 2:
                this.setState({
                    one: '',
                    two: "active",
                    three: "",
                    four: "",
                    five: "",
                    six: "",
                    seven: "",
                    temp1:false,
                    temp2:true,
                    temp3:false,
                    temp4:false,
                    temp5:false,
                    temp6:false,
                    temp7:false,
                    sendtoHeader: "Reaching Target Tissue"
                });
                break;
            case 3:
                this.setState({
                    one: '',
                    two: "",
                    three: "active",
                    four: "",
                    five: "",
                    six: "",
                    seven: "",
                    temp1:false,
                    temp2:false,
                    temp3:true,
                    temp4:false,
                    temp5:false,
                    temp6:false,
                    temp7:false,
                    sendtoHeader: "Wavelength Selection"
                });
                break;
            case 4:
                this.setState({
                    one: '',
                    two: "",
                    three: "",
                    four: "active",
                    five: "",
                    six: "",
                    seven: "",
                    temp1:false,
                    temp2:false,
                    temp3:false,
                    temp4:true,
                    temp5:false,
                    temp6:false,
                    temp7:false,
                    sendtoHeader: "The Role of Power"
                });
                break;
            case 5:
                this.setState({
                    one: '',
                    two: "",
                    three: "",
                    four: "",
                    five: "active",
                    six: "",
                    seven: "",
                    temp1:false,
                    temp2:false,
                    temp3:false,
                    temp4:false,
                    temp5:true,
                    temp6:false,
                    temp7:false,
                    sendtoHeader: "Understanding Dosing"
                });
                break;
            case 6:
                this.setState({
                    one: '',
                    two: "",
                    three: "",
                    four: "",
                    five: "",
                    six: "active",
                    seven: "",
                    temp1:false,
                    temp2:false,
                    temp3:false,
                    temp4:false,
                    temp5:false,
                    temp6:true,
                    temp7:false,
                    sendtoHeader: "Pulsing & Frequencies"
                });

                break;
            case 7:
                this.setState({
                    one: '',
                    two: "",
                    three: "",
                    four: "",
                    five: "",
                    six: "",
                    seven: "active",
                    temp1:false,
                    temp2:false,
                    temp3:false,
                    temp4:false,
                    temp5:false,
                    temp6:false,
                    temp7:true,
                    sendtoHeader: "Glossary of Terms"
                });
                break;
        }
    }

    render() {
        let {sendtoHeader, one, two, three, four, five, six, seven, temp1,temp2,temp3,temp4, temp5,temp6,temp7} = this.state;
        return (
            <div>
                <PhotobiomodulationHeader sendData={sendtoHeader}/>
                <section className="photobiomodulation">
                    <section className="blog-content-blogpage-only blog-content article-area">
                        <div className="article-container">
                            <div className="container custom-container ">
                                <div className="main_section">
                                    <div className="paragraph-area">
                                        <ul>
                                            <li className={one} onClick={() => this.changeContent(1)}>What is
                                                Photobiomodulation?
                                            </li>
                                            <li className={two} onClick={() => this.changeContent(2)}>Reaching Target
                                                Tissue
                                            </li>
                                            <li className={three} onClick={() => this.changeContent(3)}>Wavelength
                                                Selection
                                            </li>
                                            <li className={four} onClick={() => this.changeContent(4)}>The Role of Power
                                            </li>
                                            <li className={five} onClick={() => this.changeContent(5)}>Understanding
                                                Dosing
                                            </li>
                                            <li className={six} onClick={() => this.changeContent(6)}>Pulsing &amp;
                                                Frequencies
                                            </li>
                                            <li className={seven} onClick={() => this.changeContent(7)}>Glossary of
                                                Terms
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="right_btn_container">
                                        <a href="/page/products">
                                            <button className="btn button_product dark_gray">
                                                <div className="button_icon">
                                                    <p> VIEW OUR PRODUCTS
                                                        <i className="fa fa-angle-right dark_color"> </i>
                                                    </p></div>
                                            </button>
                                        </a>
                                        <a href="/page/education">
                                            <button className="btn button_product lite_gray">
                                                <div className="button_icon ">
                                                    <p className="COMPANIONACADEMY"> COMPANION ACADEMY
                                                        <i className="fa fa-angle-right lite_color"> </i>
                                                    </p>
                                                </div>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                {temp1&&<TempleteOne/>}
                                {temp2&&<TempleteTwo/>}
                                {temp3&&<TempleteThree/>}
                                {temp4&&<TempleteFour/>}
                                {temp5&&<TempleteFive/>}
                                {temp6&&<TempleteSix/>}
                                {temp7&&<TempleteSeven/>}
                            </div>
                            <div className="container custom-container">
                                <div className="btn_container right_btn_container">
                                    <button className="btn button_product btn_red">
                                        <div className="button_icon ">
                                            <p> NEXT PAGE OF THIS SECTION
                                                <i className="	fa fa-angle-right"> </i>
                                            </p>
                                        </div>
                                    </button>
                                    <button className="btn button_product btn_sky">
                                        <div className="button_icon ">
                                            <p> SKIP TO GLOSSARY SECTION
                                                <i className="	fa fa-angle-right"> </i>
                                            </p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </section>
                </section>
            </div>
        );
    }

}
;
export default PhotobiomodulationDetail;