import  React , { Component } from 'react';
import RequestDemo from '../requestDemo'
class  Product extends Component{

    render() {
        return (
            <div>
                <section className="section-one bg-color" >
                    <div className="third-row">
                        <div className="container custom-container">
                            <div className="row flex">
                                <div className="header-text text-extra">
                                    <p className="Product-text">EMPOWER <b>DS</b><br/> <span>DELIVERY SYSTEM</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="container custom-container">
                            <div className="row flex">
                                <div className="header-image">
                                    <img src="/static/images/2018-09-12.png" className="head-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="small-upper-line flex">
                        <div className="line line-ex"></div>
                    </div>
                    <div className="fourth-row">
                        <div className="custom-container container">
                            <div className="row flex">
                                <div className="flex-column learnmore-header learn-ex">

                                    <p>Empower DS provides the versatility you need to treat your toughest cases. Four
                                        application-<br/>specific treatment heads, the patented laser-contact ball and the
                                        toughest fiber available make <br/>Pegasus therapy lasers clinically practical and
                                        ruggedly durable.</p>
                                    <a href="#">
                                        LEARN MORE
                                    </a>
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
export default Product;
