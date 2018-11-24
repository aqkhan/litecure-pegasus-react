import React, { Component } from 'react';
import axios from 'axios';
import RequestDemo from "../../requestDemo";

class ProductDetail extends Component{
    state ={
        product: null,
        err: null
    }
    componentWillMount(){
        axios('http://54.234.86.247:3000/api/products/'+this.props.slug)
            .then((res)=>{
                this.setState({product:res.data.product})
            })
            .catch(err=>{
                this.setState({err:err})
            })
    }
    render() {
        let {product,err} = this.state;
        return(
            product ? <div>
                <section className="first-section product-det">
                    <div className="third-row">
                        <div className="container custom-container">
                            <div className="row flex">
                                <div className="header-text">
                                    <p><span>{product.leadText}</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="container custom-container">
                            <div className="row flex">
                                <div className="header-image">
                                    <img src={product.featuredImage && product.featuredImage.url} height="280" width="280" className="head-img1"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fourth-row text-area">
                        <div className="overlay-section">
                            <div className=" container">
                                <div className="row ">
                                    <div className="col-sm-4 p-0">
                                        <div className="SPECIFICATIONS">
                                            <h1>SPECIFICATIONS</h1>
                                            <ul>
                                                {Object.keys(product.spec.Name).map((data)=>{
                                                    return <li><span><b>{product.spec.Name[data]}:</b></span><span> </span><span>{product.spec.Detail[data]}</span></li>
                                                })}
                                            </ul>

                                        </div>
                                    </div>
                                    <div className="col-sm-8 ">
                                        <div className=" learnmore-header">
                                            <p><div dangerouslySetInnerHTML={{__html: product.shortDescription}}></div></p>
                                                <br/>
                                                <br/>
                                            <div className="button">
                                                <a href="#">REQUEST A DEMO</a>
                                                <a href="#">TALK TO A REP </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="yellow-section">
                        <div className="container custom-container">
                            <div className="row view-area">
                                <div className="col-sm-2"></div>
                                <div className="col-sm-4">
                                    <div className="image-margin">
                                        <img src="/static/images/ptc-400px.png"/>
                                            <div className="view-text">
                                                <h1>Pegasus Therapy Compact (PTC)</h1>
                                                <p>VIEW PRODUCT</p>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="image-margin">
                                        <img src="/static/images/34.png"/>
                                            <div className="view-text">
                                                <h1>Pegasus Therapy LASER (PTL)</h1>
                                                <p>VIEW PRODUCT</p>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-sm-2"></div>
                            </div>
                        </div>
                        <div className="container custom-container">
                            <div className="row flex">
                                <h1 className="prodct">PRODUCTS</h1>
                            </div>
                        </div>
                    </div>

                </section>
                <section className="Second-section">
                    <div className="container custom-container">
                        <div className="row images-flex">
                            <div className="col-sm-6 col-lg-3 p-0 ">
                                <div className="image-container">
                                    <div className="image-overlay"></div>
                                    <img src="/static/images/doctorwithhourse.jpg" className="image"/>
                                        <div className="overlay">
                                            <div className="text">
                                                <p>08.12.19</p>
                                                <h5>FEATURED <br/>CONTENT <br/>TITLE HERE</h5>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 p-0">
                                <div className="image-container">
                                    <img src="/static/images/straight-egyptian-arabians-horse.jpg" className="image"/>
                                        <div className="overlay">
                                            <div className="text">
                                                <p>08.12.19</p>
                                                <h5>FEATURED <br/>CONTENT <br/>TITLE HERE</h5>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 p-0">

                                <div className="image-container">
                                    <img src="/static/images/whitehourse.jpg" className="image"/>
                                        <div className="overlay">
                                            <div className="text">
                                                <p>08.12.19</p>
                                                <h5>FEATURED <br/>CONTENT <br/>TITLE HERE</h5>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 p-0">

                                <div className="image-container">
                                    <img src="/static/images/695128.jpg" className="image" />
                                        <div className="overlay">
                                            <div className="text">
                                                <p>08.12.19</p>
                                                <h5>FEATURED <br/>CONTENT <br/>TITLE HERE</h5>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 p-0">

                                <div className="image-container">
                                    <img src="/static/images/straight-egyptian-arabians-horse.jpg" className="image"/>
                                        <div className="overlay">
                                            <div className="text">
                                                <p>08.12.19</p>
                                                <h5>FEATURED <br/>CONTENT <br/>TITLE HERE</h5>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 p-0">

                                <div className="image-container">
                                    <img src="/static/images/345446.jpg" className="image"/>
                                        <div className="overlay">
                                            <div className="text">
                                                <p>08.12.19</p>
                                                <h5>FEATURED <br/>CONTENT <br/>TITLE HERE</h5>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 p-0">

                                <div className="image-container">
                                    <img src="/static/images/British-Horse-Racing-Frankel-Jockey-Wallpaper.jpg"
                                         className="image"/>
                                        <div className="overlay">
                                            <div className="text">
                                                <p>08.12.19</p>
                                                <h5>FEATURED <br/>CONTENT <br/>TITLE HERE</h5>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 p-0">

                                <div className="image-container">
                                    <div className="image-overlay"></div>
                                    <img src="/static/images/hourse.jpg" className="image"/>
                                        <div className="overlay">
                                            <div className="text">
                                                <p>08.12.19</p>
                                                <h5>FEATURED <br/>CONTENT <br/>TITLE HERE</h5>
                                            </div>
                                        </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </section>

                <RequestDemo/>
            </div>:<div>
                <h3>Page not found</h3>
            </div>
        )
    }
}

export default ProductDetail;
