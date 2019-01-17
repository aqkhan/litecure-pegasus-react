import React , {Component} from 'react';
import RequestDemo from '../requestDemo'
import axios from "axios";
import Link from "next/link";
import {API_PATH} from "../apiconfig";

class AboutUs extends Component{
    state ={
        products: null,
        page:null,
        pages:null
    };

    componentWillMount(){
        axios.get(API_PATH +'pages')
            .then((res)=>{
                let temp=[];
                res.data.pages.forEach((val)=>{
                    if (val.type==="aboutUs"){
                        this.setState({page:val})
                    }
                    else if (val.type==="resources"){
                        temp.push(val);
                    }
                });
                this.setState({pages:temp})
            })
            .catch(err=>{throw err});
        axios('http://54.234.86.247:3000/api/products')
            .then((res)=>{
                this.setState({products:res.data.products})
            })
            .catch(err=>{
                this.setState({err:err})
            })
    }

    render() {
        let {products,page} =  this.state;
        let allProducts=null;
        let page1 = null;
        let page2 = null;
        if (products) {
            allProducts=products.map(value=>{
                return(
                    <div className="col-sm-4 ex-image" key={value._id} >
                            <div className="image-margin " style={{
                                backgroundImage: `url(${value.featuredImage && value.featuredImage.url})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "contain",
                            }}>
                            </div>
                        <div className="view-text">
                            <h1>{value.title}</h1>
                            <p><Link href={'/product/'+value.slug}><a>VIEW PRODUCT</a></Link>
                            </p>
                        </div>
                    </div>
                                   )
        })
    }
        if(this.state.pages!==null&&this.state.pages.length>0){
            this.state.pages.map((data,index)=>{
                if(index===0){
                    page1 = <section className="new-media-detail" key={index}>
                        <section className="first-section hourse-div">
                            <div className="container custom-container image-section image-container" style={{
                                background: `linear-gradient(rgba(8, 7, 7, 0.72), rgba(10, 9, 9, 0.8)), url(${data.featuredImage&&data.featuredImage.url})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "100% 100%",
                                backgroundPosition: "center"
                            }}>
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
                                                    className="video-icon" data-toggle="modal" data-target="#myModal"/></a>
                                            <div className="modal fade" id="myModal" role="dialog">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-body" dangerouslySetInnerHTML={{__html: data.content}}>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>}
                else if(index===1){
                    page2= <section className="second-section hours-img" >
                        <div className="fourth-row text-area">
                            <div className=" container">
                                <div className="row ">
                                    <div className="col-sm-4 p-0">
                                        <div className="LASER-THREAT">
                                            <h1>{data.headerImageLabel}</h1>
                                            <p>{data.leadText}</p></div>
                                    </div>
                                    <div className="col-sm-8 ">
                                        <div className=" learnmore-header" dangerouslySetInnerHTML={{__html:data.content}}/>
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
                }
            })
        }
        return(
            <div>
                {page&&<section className="company-profile">
                    <section className="first-section"
                             style={{background: `linear-gradient(rgba(14, 13, 13, 0.77), rgba(10, 9, 9, 0.72)),
                    url(${page.featuredImage && page.featuredImage.url})`,
                                 backgroundRepeat: "no-repeat",
                                 backgroundSize: "cover",
                                 width: "100%",
                                 backgroundPosition: "right"}}>
                        <div className="fourth-row text-area new">
                            <div className=" container">
                                <div className="row ">
                                    <div className="col-sm-4 p-0">
                                        <div className="PROFILE">
                                            <h1>{page.headerImageLabel}</h1>
                                            <p>{page.leadText}</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-8 ">
                                        <div className=" learnmore-header" dangerouslySetInnerHTML={{__html:page.content}}/>
                                    </div>
                                </div>
                            </div>
                            <div className="container custom-container">
                                <div className="row flex">
                                    <div className="about">
                                        <h1>{page.title}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="yellow-section">
                            <div className="container custom-container">
                                <div className="row view-area">
                                    {allProducts}
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
                <section className="new-media-detail-containers">
                    {page2&&page2}
                </section>
                {page1&&page1}
                <RequestDemo/>
            </div>
        )
    }

}

export default AboutUs;
