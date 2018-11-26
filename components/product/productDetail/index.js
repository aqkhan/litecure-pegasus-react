import React, { Component } from 'react';
import axios from 'axios';
import ScrollableAnchor from 'react-scrollable-anchor';
import RequestDemo from "../../requestDemo";

class ProductDetail extends Component{
    state ={
        product: null,
        err: null,
        slug:null,
        products: null
    }

    componentWillMount(){
        let slug =this.props.slug;
        axios('http://54.234.86.247:3000/api/products/'+slug)
            .then((res)=>{
                this.setState({product:res.data.product, slug:slug})
            })
            .catch(err=>{
                this.setState({err:err})
            })
        axios('http://54.234.86.247:3000/api/products')
            .then((res)=>{
                this.setState({products:res.data.products})
            })
            .catch(err=>{
                this.setState({err:err})
            })
    }
    render() {
        let {product,err,slug,products} = this.state;
        let detailProduct=null;
        let allProducts=null;
        if (product){
            {
                    if (product.slug===slug){
                       detailProduct = (
                          <div key={product.id}>
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
                                                      <p>
                                                          <ul>
                                                              {Object.keys(product.spec.Name).map((data,index)=>{
                                                                  return <li key={index}><span><b>{product.spec.Name[data]}:</b></span><span> </span><span>{product.spec.Detail[data]}</span></li>
                                                              })}
                                                          </ul>
                                                      </p>
                                                  </div>
                                              </div>
                                              <div className="col-sm-8 ">
                                                  <div className=" learnmore-header">
                                                      <p><div dangerouslySetInnerHTML={{__html: product.shortDescription}}></div></p>
                                                      <br/>
                                                      <br/>
                                                      <div className="button">
                                                          <a href="#requestDemo">REQUEST A DEMO</a>
                                                          <a href="#">TALK TO A REP </a>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                        )
                    }
            }
        }
        if (products) {
            allProducts=products.map(value=>{
                if (value.slug===slug){
                }
                else {
                    return(
                        <div key={value.id}>
                                    <div className="col-sm-4" >
                                        <div className="image-margin">
                                            <img src={value.featuredImage && value.featuredImage.url} height="320" width="320"/>
                                            <div className="view-text">
                                                <h1>{value.title}</h1>
                                                <p><a href={"/products/"+value.slug}>VIEW PRODUCT</a></p>
                                            </div>
                                        </div>
                                    </div>
                        </div>
                    )
                }
            })
        }
        return(
            err?<div>
                <section className="product-det">
                    <section className="first-section">
                        <div className="third-row">
                            <div className="container custom-container">
                                <div className="row flex">
                                    <div className="header-text">
                                        <p><span>Product Not found</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="container custom-container">
                                <div className="row flex">
                                    <div className="header-image" style={{background :'black'}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <RequestDemo/>
            </div>:product?
                <div>
                    <section className="product-det">
                        <section className="first-section">
                            <div>
                                {detailProduct}
                            </div>
                            allProducts & <div className="yellow-section">
                            <div className="container custom-container">
                                <div className="row view-area">
                                    <div className="col-sm-2"></div>

                                    {allProducts}
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
                    </section>
                    <section  className="cards-section">
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
                    </section>
                <ScrollableAnchor id={'requestDemo'}>
                <RequestDemo/>
                </ScrollableAnchor>
            </div>:<div>
                    <section className="product-det">
                        <section className="first-section">
                            <div className="third-row">
                                <div className="container custom-container">
                                    <div className="row flex">
                                        <div className="header-text">
                                            <p><span>Loading ...</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="container custom-container">
                                    <div className="row flex">
                                        <div className="header-image" style={{background :'black'}}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </section>
                    <RequestDemo/>
                </div>
        )
    }
}

export default ProductDetail;
