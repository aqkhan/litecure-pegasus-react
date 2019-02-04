import React, {Component} from 'react';
import RequestDemo from '../requestDemo';
import DefaultComponent from '../defaultComponent/defaultComponent'
import axios from "axios";
import Link from "next/link";
import {API_PATH} from "../apiconfig";

class AboutUs extends Component {
    state = {
        products: null,
        pages: null,
        error: null
    };

    componentDidMount() {
        axios.get(API_PATH + 'pages')
            .then((res) => {
                let temp = [];
                res.data.pages.forEach((val) => {
                    if (val.type === "aboutUs") {
                        temp.push(val);
                    }
                });
                this.setState({pages: temp})
            })
            .catch(err => {
                console.log("error ", err);
                this.setState({error: "404 About Us Page Not Found"})
            });
        axios(API_PATH + 'products')
            .then((res) => {
                this.setState({products: res.data.products})
            })
            .catch(err => {
                console.log("error ", err);
                this.setState({error: "404 Products Not Found"})
            })
    }

    render() {
        let {products, pages, error} = this.state;
        let renderProducts = null;
        let one =[];
        let two =[];
        let three =[];
        let defaults = [];
        if (products) {
            renderProducts = products.map(value => {
                return (
                    <div className="col-sm-4 ex-image" key={value._id}>
                        <div className="image-margin " style={value.featuredImage && {
                            backgroundImage: `url(${value.featuredImage && value.featuredImage.url})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "contain",
                        }}>
                        </div>
                        <div className="view-text">
                            <h1>{value.title}</h1>
                            <p><Link href={'/product/' + value.slug}><a>VIEW PRODUCT</a></Link>
                            </p>
                        </div>
                    </div>
                )
            })
        }
        if (pages !== null && pages.length > 0) {
            pages.forEach((data, index) => {
                if (data.templateOrder === 'one') {
                    one = [...one,<section className="company-profile">
                        <section className="first-section"
                                 style={{
                                     background: `linear-gradient(rgba(14, 13, 13, 0.77), rgba(10, 9, 9, 0.72)),
                    url(${data.featuredImage && data.featuredImage.url})`,
                                     backgroundRepeat: "no-repeat",
                                     backgroundSize: "cover",
                                     width: "100%",
                                     backgroundPosition: "center"
                                 }}>
                            <div className="fourth-row text-area new">
                                <div className=" container">
                                    <div className="row ">
                                        <div className="col-sm-4 p-0">
                                            <div className="PROFILE">
                                                <h1>{data.headerImageLabel && data.headerImageLabel}</h1>
                                                <p>{data.leadText}</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-8 ">
                                            <div className=" learnmore-header"
                                                 dangerouslySetInnerHTML={{__html: data.content}}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="container custom-container">
                                    <div className="row flex">
                                        <div className="about">
                                            <h1>{data.title}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>]
                }
                else if (data.templateOrder === 'two') {
                    two = [...two,<section className="new-media-detail-containers" key={index}>
                        <section className="second-section hours-img" style={data.featuredImage && {
                            background: `linear-gradient(rgba(8, 7, 7, 0.90), rgba(10, 9, 9, 0.8)), url(${data.featuredImage && data.featuredImage.url})`,
                            "backgroundRepeat": "no-repeat",
                            "backgroundSize": "cover",
                            "backgroundPosition": "center"
                        }}>
                            <div className="fourth-row text-area">
                                <div className=" container">
                                    <div className="row ">
                                        <div className="col-sm-4 p-0">
                                        <div className="LASER-THREAT">
                                            <h1>{data.headerImageLabel}</h1>
                                            <p>{data.leadText}</p></div>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className=" learnmore-header"
                                                 dangerouslySetInnerHTML={{__html: data.content}}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="container custom-container">
                                    <div className="row flex">
                                        <div className="BENEFITS">
                                            <h1>{data.metaTitle}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>]
                }
                else if (data.templateOrder === 'three') {
                    three = [...three,<section className="new-media-detail" key={index}>
                        <section className="first-section hourse-div" data-toggle="modal" data-target="#myModal" style={{
                                background: `linear-gradient(rgba(8, 7, 7, 0.72), rgba(10, 9, 9, 0.8)), url(${data.featuredImage && data.featuredImage.url})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}>
                            <div className="container custom-container image-section image-container">
                                <div className="container width-container">
                                    <div className="row flex year">
                                        <div className="col-sm-1"></div>
                                        <div className="col-sm-8">
                                            <div className="quarter">
                                                <span>{data.headerImageLabel}</span>
                                                <p>{data.leadText}</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <a><img src="/static/images/images-(3).png"
                                                    className="video-icon"/></a>
                                            <div className="container">
                                                {/*<!-- The Modal -->*/}
                                                <div className="modal fade" id="myModal">
                                                    <div className="modal-dialog modal-lg">
                                                        <div className="modal-content modal-content-product">
                                                            {/*<!-- Modal Header -->*/}
                                                            <div className="modal-header">
                                                                <button type="button" className="close"
                                                                        data-dismiss="modal">&times;</button>
                                                            </div>
                                                            {/*<!-- Modal body -->*/}
                                                            <div className="modal-body"
                                                                 dangerouslySetInnerHTML={{__html: data.content}}>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>]
                }  else {
                    defaults = [...defaults,<DefaultComponent featuredImage={data.featuredImage}
                                                 headerImageLabel={data.headerImageLabel && data.headerImageLabel}
                                                 metaTitle={data.metaTitle && data.metaTitle}
                                                 leadText={data.leadText && data.leadText}
                                                 content={data.content && data.content}/>]
                }
            })
        }
        return (pages!==null&& pages.length>0 ? (
            <div>
                {one.length >0 && one }
                {
                    <section className="company-profile">
                    <section className="first-section">
                    <div className="yellow-section">
                    <div className="container custom-container">
                        <div className="row view-area">
                            {renderProducts && renderProducts}
                        </div>
                    </div>
                    <div className="container custom-container">
                        <div className="row flex">
                            <h1 className="prodct">PRODUCTS</h1>
                        </div>
                    </div>
                    </div>
                    </section>
                    </section>}
                {two.length >0 && two}
                {three.length >0  && three}
                {defaults.length >0 && defaults}
                <RequestDemo/>
            </div>
        ) : error ? (<div className="splash">
            <div className="lds-ellipsis">
                <h1><strong>{error}</strong></h1>
            </div>
        </div>) : (<div className="splash">
            <div className="lds-ellipsis">
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </div>))
    }
}

export default AboutUs;
