import React , {Component} from 'react';
import RequestDemo from '../requestDemo'
import axios from "axios";
import Link from "next/link";
import {API_PATH} from "../apiconfig";

class AboutUs extends Component{
    state ={
        products: null,
        page:null,
    };

    componentWillMount(){
        axios.get(API_PATH +'pages')
            .then((res)=>{
                res.data.pages.forEach((val)=>{
                    if (val.type==="aboutUs"){
                        this.setState({page:val})
                    }
                });
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
        console.log("page",page);
        let allProducts=null;
        if (products) {
            allProducts=products.map(value=>{
                return(
                    <div key={value._id}>
                        <div className="col-sm-4 p-0" >
                            <div className="image-margin">
                                <img src={value.featuredImage && value.featuredImage.url} height="320" width="320"/>
                                <div className="view-text">
                                    <h1>{value.title}</h1>
                                    <p><Link href={'/product/'+value.slug}><a>VIEW PRODUCT</a></Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
        })
    }
        return page&&(
            <div>
                <section className="company-profile">
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
                </section>
                <RequestDemo/>
            </div>
        )
    }

}

export default AboutUs;
