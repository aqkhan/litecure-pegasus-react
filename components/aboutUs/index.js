import React, {Component} from 'react';
import RequestDemo from '../requestDemo';
import DefaultComponent from '../defaultComponent/defaultComponent'
import axios from "axios";
import {Carousel} from 'react-bootstrap';
import Link from "next/link";
import {API_PATH} from "../apiconfig";

class AboutUs extends Component {
    state = {
        error: null
    };

    componentDidMount() {
        let {dispatch, pages, products} = this.props;
        if(!pages){
            axios.get(API_PATH + 'pages')
            .then((res) => {
                dispatch({
                    type: 'pages',
                    payLoad: {
                        pages:res.data.pages
                    }
                })
            })
            .catch(err => {
                console.log("error ", err);
                this.setState({error: "404 About Us Page Not Found"})
            });
        }
        if(!products){
            axios(API_PATH + 'products')
            .then((res) => {
                dispatch({
                    type: 'products',
                    payLoad: {
                        products:res.data.products
                    }
                })
            })
            .catch(err => {
                console.log("error ", err);
                this.setState({error: "404 Products Not Found"})
            })
        }
    }

    render() {
        let {products, pages} = this.props;
        let {error} = this.state;
        let renderProducts = null;
        let one =[];
        let two =[];
        let three =[];
        let defaults = [];
        if (products) {
            renderProducts = products.map((value, index) => {
                return <Carousel.Item key={index}>
                    <section className="new-home-cards">
                        <section className="section-one publication-header" style={{
                            background: `linear-gradient(rgba(0, 0, 0, 0.66), rgba(6, 6, 6, 0.72)),url(${value.featuredImage && value.featuredImage.url})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            backgroundColor: "rgba(247, 187, 12, 0.6)",
                        }}>
                            <div className="third-row">
                                <div className="container custom-container">
                                    <div className="row flex">
                                        <div className="header-text publication-text home-page">
                                            <p><br/><span>PRODUCTS</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="small-upper-line flex">
                                <div className="line"/>
                            </div>
                            <div className="fourth-row">
                                <div className="custom-container container">
                                    <div className="row flex">
                                        <div className="flex-column learnmore-header">
                                            <p>{value.leadText}</p>
                                            <Link href={'/product/' + value.slug}>
                                                <a>
                                                    VIEW
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
                </Carousel.Item>
            })
        }
        if (pages && pages.length > 0) {
            pages.forEach((data, index) => {
                if (data.templateOrder === 'one' && data.type === "aboutUs") {
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
                else if (data.templateOrder === 'two' && data.type === "aboutUs") {
                    two = [...two,<section className="new-media-detail-containers" key={index}>
                        <section className="second-section hours-img" style={data.featuredImage && {
                            background: `linear-gradient(rgba(8, 7, 7, 0.90), rgba(10, 9, 9, 0.8)), url(${data.featuredImage && data.featuredImage.url})`,
                            "backgroundRepeat": "no-repeat",
                            "backgroundSize": "cover",
                            "backgroundPosition": "center",
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
                else if (data.templateOrder === 'three' && data.type === "aboutUs") {
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
                }  else if(data.type === "aboutUs") {
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
                <div className="golden-bar"></div>
                {two.length >0 && two}
                {three.length >0  && three}
                {defaults.length >0 && defaults}
                {
                    renderProducts && <Carousel interval={3000} indicators={false} controls={true} pauseOnHover={false}>
                        {renderProducts}
                    </Carousel>}
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
