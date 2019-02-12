import React, {Component} from 'react';
import RequestDemo from '../requestDemo';
import DefaultComponent from "../defaultComponent/defaultComponent";
import {API_PATH} from '../apiconfig'
import {Carousel} from 'react-bootstrap';
import Link from 'next/link'
import axios from 'axios'
import embed from 'embed-video';

class Home extends Component {
    state = {
        error: null
    };

    componentDidMount() {
        let {pages, dispatch, products, stories} = this.props;
        if (!pages) {
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
                console.log("error", err);
                this.setState({error: "404 Home Page Not Found"})
            });
        }


        if(!products){
            axios.get(API_PATH + 'products')
            .then((res) => {
                dispatch({
                    type: 'products',
                    payLoad: {
                        products:res.data.products
                    }
                })
            })
            .catch(err => {
                console.log("error", err);
                this.setState({error: err})
            });
        }

        if(!stories){
            axios.get(API_PATH + 'stories')
            .then((res) => {
                dispatch({
                    type: 'stories',
                    payLoad: {
                        stories:res.data.stories
                    }
                })
            })
            .catch(err => {
                this.setState({error: err})
            });
        }
    }


    render() {
            let {pages, products, stories, error} = this.props;
        let renderStories, renderProducts,storiesPopup  = null;
        let one =[];
        let defaults =[];
        if (pages  && pages.length> 0) {
            pages.forEach((value, index) => {
                    if (value.templateOrder === 'one' && value.type === "homepage") {
                        one = [...one,
                            <section className="new-home-cards" key={index}>
                             <section className="section-one" style={value.featuredImage&&{
                            background: `linear-gradient(rgba(0, 0, 0, 0.66), rgba(6, 6, 6, 0.72)),url(${value.featuredImage && value.featuredImage.url})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition:"center"
                        }}>
                            <div className="third-row">
                                <div className="container custom-container">
                                    <div className="row flex">
                                        <div className="header-text custom-header-text">
                                            <p><br/><span>{value.headerImageLabel}</span></p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="small-upper-line flex">
                                <div className="line"></div>
                            </div>
                            <div className="fourth-row">
                                <div className="custom-container container">
                                    <div className="row flex">
                                        <div className="flex-column learnmore-header learn-home">
                                            <div className='detail-content'>
                                                <div className="home-start-content"
                                                     dangerouslySetInnerHTML={{__html: value.leadText}}/>
                                                     </div>
                                            <Link><a href="/benefit-laser-therapy">
                                                LEARN MORE
                                            </a></Link>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                </section>
                                </section>
                        ]
                    } else if( value.type === "homepage") {
                        defaults =[...defaults,
                            <DefaultComponent featuredImage={value.featuredImage}
                                              headerImageLabel={value.headerImageLabel && value.headerImageLabel}
                                              metaTitle={value.metaTitle && value.metaTitle}
                                              leadText={value.leadText && value.leadText}
                                              content={value.content && value.content}/>
                        ]
                    }
                }
            )
        }
        if (products  && products.length>0) {
            let duplicate = [...products];
            let reverse = duplicate.reverse();
            renderProducts = reverse && reverse.map((value, index) =>{
                if(value.type==='product'){
                    return <Carousel.Item key={index}>
                    <section className="new-home-cards">
                        <section className="section-one publication-header" style={{
                            background: `linear-gradient(rgba(0, 0, 0, 0.66), rgba(6, 6, 6, 0.72)),url(${value.featuredImage && value.featuredImage.url})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
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
                }
            } )
        }
        if (stories && stories.length>0) {
            let duplicate = [...stories];
            let reverse = duplicate.reverse();
            renderStories = reverse.map((value, index) =>
                <Carousel.Item key={index} data-toggle="modal" data-target={"#myModal4" + index} style={{cursor:"pointer"}}>
                    <div className="section-three-overlay1" />
                    <div className="home-slider-div" style={{
                        background: `linear-gradient(rgba(0, 0, 0, 0.66), rgba(6, 6, 6, 0.72)), url(${value.featuredImage && value.featuredImage.url})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        // alt:"900x500",
                    }}/>
                    <Carousel.Caption>
                        <div className="slider-text">
                            <h1>STORIES</h1><br/>
                            <div className="paragraph-text" dangerouslySetInnerHTML={{__html: value.shortDescription}}/>
                            <span>{value.author}</span>
                        </div>
                    </Carousel.Caption>
                    {/*<div className="container" key={index}>*/}
                        {/*<div className="modal fade" id={"myModal4" + index}>*/}
                            {/*<div className="modal-dialog modal-lg">*/}
                                {/*<div className="modal-content modal-content-product">*/}
                                    {/*<div className="modal-header">*/}
                                        {/*<button type="button" className="close"*/}
                                                {/*data-dismiss="modal">&times;</button>*/}
                                    {/*</div>*/}
                                    {/*<div className="modal-body">*/}
                                        {/*{value.videoLink && <div dangerouslySetInnerHTML={{__html:embed(value.videoLink,{ attr:{width:"560", height:315}})}}/>}*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </Carousel.Item>
            )
            {
                storiesPopup=stories && reverse.map((item, index) => {
                    return (<div className="container" key={index}>
                        {/*<!-- The Modal -->*/}
                        <div className="modal fade" id={"myModal4" + index}>
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
        }
        return (pages && pages.length> 0 ? (
            <div>
                {one.length>0 && one}
                {defaults.length>0 && defaults}
                {renderProducts && <Carousel interval={3000} indicators={false} controls={false} pauseOnHover={false}>
                    {renderProducts}
                </Carousel>}
                {renderStories && <Carousel interval={7000} pauseOnHover={false}>
                    {renderStories}
                </Carousel>}
                {storiesPopup && storiesPopup}
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

export default Home;
