import React, { Component } from 'react';
import RequestDemo from '../requestDemo'
import axios from "axios";
class MediaDetail extends Component{
    state = {
        products:null
    }
    componentWillMount() {
        axios.get('http://54.234.86.247:3000/api/products')
            .then((res)=>{
                this.setState({products:res.data.products})
            })
            .catch(err=>{throw err})
    }

    render() {
        let product;
        if (this.state.products)
        {
            product =  this.state.products.map((value,index)=>{
                if(index===0){
                    return <section className="odd-product" key={value._id}>
                        <section className="second-section">
                            <div className="container custom-container">
                                <div className="row flex">
                                    <div className="PTL-PEGASUS">
                                        <span>{value.title}</span><p>{value.leadText}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container custom-container">
                                <div className="row image-container">
                                    <div className="col-sm-4 ms">
                                        <div className="second">
                                            <div className="product-1-para" dangerouslySetInnerHTML={{__html: value.shortDescription}}></div>
                                            <br/>
                                            <br/>
                                            <h3><b>Specifications</b></h3>
                                            <ul>
                                                {Object.keys(value.spec.name).map((data,indexx)=>{
                                                    return <li key={indexx}><span><b>{value.spec.name[data]}:</b></span><span> </span><span>{value.spec.detail[data]}</span></li>
                                                })}
                                            </ul>

                                        </div>
                                    </div>
                                    <div className="col-sm-8 mn">
                                        <img src={value.featuredImage && value.featuredImage.url} className="image34"/>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </section>
                }})}
        return(
            <div>
                <section className="new-media-detail">
                    <section className="first-section">
                        <div className="container custom-container image-section image-container">
                            <div className="container width-container">
                            <div className="row flex year">
                                <div className="col-sm-1"></div>

                                <div className="col-sm-8">
                                    <div className="quarter">
                                        <span>26-YEAR OLD</span>
                                        <p>QUARTER HORSE GELDING</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <img src="/static/images/images-(3).png" className="video-icon"/>
                                </div>
                            </div></div>

                        </div>
                    </section>
                </section>
                <section className="new-media-detail-containers">
                    <section className="second-section hours-img" >
                        <div className="fourth-row text-area">
                            <div className=" container">
                                <div className="row ">
                                    <div className="col-sm-4 p-0">
                                        <div className="LASER-THREAT">
                                            <h1>We provide <br/>solutions.</h1>
                                            <p>
                                                When you have a full case load and are constantly on the move from barn to
                                                barn, you need a reliable partner who is focused on delivering innovations
                                                that
                                                provide you with both clinical and practice benefits. At Pegasus our mission
                                                is
                                                simple - to make animals better. Pegasus products are developed by equine
                                                practitioners, technicians, and industry-leading engineers to provide you
                                                with the
                                                most appropriate evidence-based technologies. Get back in action faster with
                                                Pegasus on your side.<br/>
                                                Laser physicist Brian Pryor, PhD, founded Pegasus in 2006. Pegasus products
                                                are distributed worldwide and are manufactured in the United States.
                                                Pegasus’s
                                                corporate headquarters are located in New Castle, Delaware. Carlsbad,
                                                California is home to Pegasus’s Engineering, Research, and Development team
                                                headed by CTO, Luis De Taboada, MSEE. Internationally, Pegasus has two
                                                satellite offices located in the United Kingdom and in Shanghai.
                                            </p></div>
                                    </div>
                                    <div className="col-sm-8 ">
                                        <div className=" learnmore-header">

                                            <p>
                                                Our core values are woven into the fabric of everything we do at Pegasus.
                                                From
                                                manufacturing and education to service and sales you will be treated as a
                                                member of the Pegasus Family.<br/><br/><br/>

                                                <span>&gt;&gt; </span> &nbsp;We Tirelessly Solve Problems<br/>
                                                <span>&gt;&gt; </span> &nbsp;We are Fair and Honest<br/>
                                                <span>&gt;&gt; </span> &nbsp;We Provide Solutions<br/>
                                                <span>&gt;&gt; </span> &nbsp;We Innovate<br/>
                                                <span>&gt;&gt; </span> &nbsp;We are Nice<br/>
                                                <span>&gt;&gt; </span> &nbsp;We Care<br/>
                                                <span>&gt;&gt; </span> &nbsp;We Lead<br/>
                                                <br/><br/>

                                                Pegasus-manufactured products are produced under stringent quality
                                                control
                                                systems and are certified to meet ISO-13485 standards for medical
                                                devices.
                                                Built on the foundation of quality Pegasus proudly provides you with
                                                products
                                                based on evidence, supported by education, and sustained through
                                                partnership.</p>
                                            <div className="button">
                                                <a href="#">HOW TREATMENTS ARE GIVEN</a>
                                                <a href="#" className="cost-btn">WHAT DOES IT COST? </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container custom-container">
                                <div className="row flex">
                                    <div className="BENEFITS">
                                        <h1>BENEFITS</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                    <section className="second-section hours-img">
                        <div className="fourth-row text-area">
                            <div className=" container">
                                <div className="row ">
                                    <div className="col-sm-12 ">
                                        <div className=" learnmore-header">
                                            <p className="extra-p">
                                                Pegasus products are based in evidence and provide superior outcomes.
                                                Protocols, techniques, and treatment recommendations are all developed based
                                                on a large body of scientific research to ensure you get the best clinical
                                                results -
                                                every time.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container custom-container">
                                <div className="row flex">
                                    <div className="BENEFITS">
                                        <h1>PROVEN</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                    <section className="second-section hours-img">
                        <div className="fourth-row text-area">
                            <div className=" container">
                                <div className="row ">
                                    <div className="col-sm-12 ">
                                        <div className=" learnmore-header">
                                            <p className="extra-p">
                                                Pegasus provides clinical solutions for every equine patient. From dressage
                                                horses, jumpers, hunters, cutters, to family pets, Pegasus has a therapeutic
                                                solution for you.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container custom-container">
                                <div className="row flex">
                                    <div className="BENEFITS performance">
                                        <h1>Performance</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                    <section className="second-section hours-img">
                        <div className="fourth-row text-area">
                            <div className=" container">
                                <div className="row ">
                                    <div className="col-sm-12 ">
                                        <div className=" learnmore-header">
                                            <p className="extra-p">
                                                Our team of sales, clinical, and customer support resources are here to
                                                support
                                                you long-term. With Pegasus on your team, you can rest assured that you have
                                                the best products that will give you superior outcomes
                                                <br/>
                                                Pegasus actively collaborates with teaching institutions, clinicians,
                                                and scientists
                                                around the world to validate current technology applications and to
                                                discover new
                                                opportunities.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container custom-container">
                                <div className="row flex">
                                    <div className="BENEFITS performance">
                                        <h1>Partnership</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </section>
                {product}
                <RequestDemo/>
            </div>
        )
    }
}

export default MediaDetail;
