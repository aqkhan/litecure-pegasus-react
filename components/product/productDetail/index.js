import React, {Component} from 'react';
import Link from 'next/link'
import axios from 'axios';
import {API_PATH} from '../../apiconfig';
import ScrollableAnchor, { configureAnchors, goToAnchor } from 'react-scrollable-anchor';
import RequestDemo from "../../requestDemo";
import {Carousel} from 'react-bootstrap';
import embed from 'embed-video';
class ProductDetail extends Component {
    state = {
        product: null,
        error: null,
        slug: null,
        products: null,
        stories: null
    };

    componentDidMount() {
        let slug = this.props.slug;
        axios.get(API_PATH + 'products/' + slug)
            .then((res) => {
                this.setState({product: res.data.product, slug: slug})
            })
            .catch(err => {
                console.log("error", err);
                this.setState({error: "Product Not Found"})
            });

        axios.get(API_PATH + 'products')
            .then((res) => {
                this.setState({products: res.data.products})
            })
            .catch(err => {
                console.log("error", err);
                this.setState({error: "Products Not Found"})
            });

        axios.get(API_PATH + 'stories')
            .then((res) => {
                this.setState({stories: res.data.stories})
            })
            .catch(err => {
                console.log("error", err);
                this.setState({error: "Stories Not Found"})
            })
    }
    scroll=()=>{
        configureAnchors({ scrollDuration: 2000})
        goToAnchor('requestDemo')
    }
    render() {
        let {product, error, slug, products, stories} = this.state;
        let detailProduct = null;
        let renderProducts = null;
        let allProductCards = null;
        let allStoriesCards = null;
        let reverse = null;
        if (product) {
            {
                if (product.slug === slug) {
                    detailProduct = (
                        <div key={product._id}>
                            <div className="third-row">
                                <div className="container custom-container">
                                    <div className="row flex">
                                        <div className="header-text">
                                            <p><span>{product.leadText}</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="container custom-container header-stg">
                                    <div className="row flex">
                                        <div className="header-image">
                                            <img src={product.featuredImage && product.featuredImage.url}
                                                 className="head-img1" data-toggle="modal" data-target="#myModal20"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row header-btn">
                                <div className="button">
                                    <a onClick={()=>this.scroll()}>REQUEST A DEMO</a>
                                </div>
                            </div>
                            <div className="fourth-row text-area">
                                <div className="overlay-section">
                                    <div className=" container">
                                        <div className="row ">
                                            <div className="col-sm-4 p-0">
                                                <div className="SPECIFICATIONS">
                                                    <h1>SPECIFICATIONS</h1>
                                                    <div className="text-specification">
                                                        <ul>
                                                            {Object.keys(product.spec.name).map((data, index) => {
                                                                return <li key={index}>
                                                                    <span><b>{product.spec.name[data]}:</b></span><span> </span><span>{product.spec.detail[data]}</span>
                                                                </li>
                                                            })}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-8 ">
                                                <div className=" learnmore-header">
                                                    <div className='detail-content'>
                                                        <div
                                                            dangerouslySetInnerHTML={{__html: product.longDescription}}/>
                                                    </div>
                                                    <br/>
                                                    <br/>
                                                    <div className="button">
                                                        <a href="/support">TALK TO A REP </a>
                                                    </div>
                                                        {product.embedVideo && <div className="header-video-div" dangerouslySetInnerHTML={{__html:embed(product.embedVideo,{ attr:{width:"50%", height:200}})  }}/> }
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
            let duplicate = [...products];
            let reverse= duplicate.reverse();
            renderProducts = reverse && reverse.map((value, index) =>{
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
            } )
            allProductCards = reverse.map(value => {
                return <div className="col-md-4 p-0 " key={value._id} style={{
                    background: `linear-gradient(rgba(239, 184, 23, 0.1), rgba(239, 184, 23, 0.1)),url(${value.featuredImage && value.featuredImage.url})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "100%",
                    border: "1px solid #efb817",
                }}>
                    <div className="image-container">
                        <div className="image-overlay"/>
                        {/*<img src={value.featuredImage && value.featuredImage.url} className="image"/>*/}
                        <Link href={"/product/" + value.slug}><a>
                            <div className="overlay" onClick={() => this.apiCall(value.slug)}>
                                <div className="text">
                                    <h5>{value.leadText}</h5>
                                </div>
                            </div>
                        </a></Link>
                    </div>
                </div>
            })
        };

        if (stories) {
            let duplicate = [...stories];
            reverse = duplicate.reverse();
            allStoriesCards = reverse.map((item, index) => {
                let date = new Date(item.publishedDate);
                return <div className="col-md-3 p-0 stories-image-background" key={index} data-toggle="modal" data-target={"#myModal3" + index}
                            style={item.featuredImage &&{
                                background: `url(${item.featuredImage && item.featuredImage.url})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "100%",
                                minHeight: "312px",
                                cursor: "pointer",
                            }}>
                    <div className="image-container">
                        <div className="image-overlay"/>
                        <div className="overlay">
                            <div className="text">
                                {
                                    item.publishedDate &&
                                    <p>{date.getMonth()+1}.{date.getDate()}.{date.getFullYear()}</p>
                                }
                                <h5>{item.title}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            })
        }
        return (
             product ?
                <div>
                    <section className="product-det">
                        <section className="first-section">
                            <div>
                                {detailProduct}
                            </div>
                        </section>
                        {/* <section style={{background:"black"}}> */}
                        {/* <div className="yellow-section">
                                <div className="container custom-container">
                                    <div className="row view-area"> */}
                                    {renderProducts && <Carousel interval={3000} indicators={false} controls={true} pauseOnHover={false}>
                                        {renderProducts}
                                    </Carousel>}
                                    {/* </div> */}
                                    {/* <div className="row flex">
                                        <h1 className="prodct">PRODUCTS</h1>
                                    </div> */}
                                {/* </div> */}
                            {/* </div> */}
                        {/* </section> */}
                    </section>
                    <section className="cards-section">
                        <section className="Second-section">
                            <div className="container custom-container">
                                <div className="row images-flex">
                                    {allProductCards && allProductCards}
                                </div>
                            </div>
                        </section>
                    </section>
                    <section className="stories-cards-section">
                        <section className="third-section">
                            <div className="container custom-container">
                                <div className="row flex">
                                    {allStoriesCards && allStoriesCards}
                                </div>
                            </div>
                            <div className="container">
                                {/*<!-- The Modal -->*/}
                                <div className="modal fade" id="myModal20">
                                    <div className="modal-dialog modal-lg">
                                        <div className="modal-content modal-content-product">
                                            {/*<!-- Modal Header -->*/}
                                            <div className="modal-header">
                                                <button type="button" className="close"
                                                        data-dismiss="modal">&times;</button>
                                            </div>
                                            {/*<!-- Modal body -->*/}
                                            <div className="modal-body">
                                                <img src={product.featuredImage && product.featuredImage.url}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                stories && reverse.map((item, index) => {
                                    return (<div className="container" key={index}>
                                        {/*<!-- The Modal -->*/}
                                        <div className="modal fade" id={"myModal3" + index}>
                                            <div className="modal-dialog modal-lg">
                                                <div className="modal-content modal-content-product">
                                                    {/*<!-- Modal Header -->*/}
                                                    <div className="modal-header">
                                                        <button type="button" className="close"
                                                                data-dismiss="modal">&times;</button>
                                                    </div>
                                                    {/*<!-- Modal body -->*/}
                                                    <div className="modal-body">
                                                    {item.videoLink && <div dangerouslySetInnerHTML={{__html:embed(item.videoLink,{ attr:{width:"560", height:315}})}}/>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                })
                            }
                        </section>
                    </section>
                    <ScrollableAnchor id={'requestDemo'}>
                        <div/>
                    </ScrollableAnchor>
                    <RequestDemo/>
                </div>: error ? (<div className="splash">
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
                </div>)
        )
    }
}

export default ProductDetail;
