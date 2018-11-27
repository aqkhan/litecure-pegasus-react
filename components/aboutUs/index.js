import React , {Component} from 'react';
import RequestDemo from '../requestDemo'
import axios from "axios";
import Link from "next/link";

class AboutUs extends Component{
    state ={
        products: null
    }

    componentWillMount(){
        axios('http://54.234.86.247:3000/api/products')
            .then((res)=>{
                this.setState({products:res.data.products})
            })
            .catch(err=>{
                this.setState({err:err})
            })
    }

    render() {
        let {products} =  this.state;
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
                                    <p><Link href={{ pathname: 'product', query: { title: value.slug }}}><a>VIEW PRODUCT</a></Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
        })
    }
        return(
            <div>
                <section className="company-profile">
                    <section className="first-section" style={{backgroundImage: "url('/static/images/white_horse_stock_4_by_phoenixs_stock.png')"}}>
                        <div className="fourth-row text-area new">
                            <div className=" container">
                                <div className="row ">
                                    <div className="col-sm-4 p-0">
                                        <div className="PROFILE">
                                            <h1>COMPANY PROFILE</h1>
                                            <p>
                                                Pegasus Therapy Laser is part of the<br/> veterinary division of LiteCure,
                                                LLC.<br/> Combining physics, laser science, and <br/>engineering, LiteCure, LLC is
                                                a leading<br/> medical device manufacturing company <br/>bringing advanced
                                                laser technology and<br/> innovative solutions to the health
                                                care<br/> industry.</p>

                                        </div>
                                    </div>
                                    <div className="col-sm-8 ">
                                        <div className=" learnmore-header">

                                            <p>
                                                Located in Newark, Delaware, LiteCure provides expertise in design,
                                                manufacturing, production and support. LiteCure provides highly reliable
                                                products and the resources and tools to successfully incorporate the technology
                                                and products into any practice.<br/><br/>

                                                LiteCure is an FDA-registered manufacturer providing FDA cleared products for a
                                                variety of medical applications. Each product has been designed and manufactured
                                                under stringent quality control systems that are certified to meet ISO-9001 and
                                                ISO-13485 standards for medical devices.<br/><br/>

                                                With over 12 years of state-of-the-art laser development and manufacturing
                                                expertise, LiteCure ensures its customers the best in technology and design.
                                                LiteCure employs a highly experienced management team of research and
                                                development engineers that together represent over 100 years of experience in
                                                the field of laser development and systems</p>
                                            <div className="button">
                                                <a href="#">BENEFITS OF LASER THERAPY</a>
                                                <a href="#">CONTACT US </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container custom-container">
                                <div className="row flex">
                                    <div className="about">
                                        <h1>ABOUT US</h1>
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
