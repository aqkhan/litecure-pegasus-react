import React, {Component} from 'react';
import RequestDemo from '../requestDemo';
import DefaultComponent from "../defaultComponent/defaultComponent";
import {API_PATH} from '../apiconfig'
import {Carousel} from 'react-bootstrap';
import Link from 'next/link'
import axios from 'axios'

class Home extends Component {
    state = {
        pages: null,
        products: null,
        stories: null,
        error: null
    };

    componentDidMount() {
        axios.get(API_PATH + 'pages')
            .then((res) => {
                let temp = [];
                res.data.pages.forEach((val) => {
                    if (val.type === "homepage") {
                        temp.push(val);
                    }
                });
                this.setState({pages: temp})
            })
            .catch(err => {
                console.log("error", err);
                this.setState({error: "404 Home Page Not Found"})
            });

        axios.get(API_PATH + 'products')
            .then((res) => {
                this.setState({products: res.data.products})
            })
            .catch(err => {
                console.log("error", err);
                this.setState({error: err})
            });

        axios.get(API_PATH + 'stories')
            .then((res) => {
                this.setState({stories: res.data.stories})
            })
            .catch(err => {
                this.setState({error: err})
            });
    }


    render() {
        let {pages, products, stories, error} = this.state;
        let renderStories, renderProducts  = null;
        let one =[];
        let defaults =[];
        if (pages !== null && pages.length > 0) {
            pages.forEach((value, index) => {
                    if (value.templateOrder === 'one') {
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
                    } else {
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
        if (products) {
            let duplicate = [...this.state.products];
            let reverse = duplicate.reverse();
            renderProducts = reverse && reverse.map((value, index) => <Carousel.Item key={index}>
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
            </Carousel.Item>)
        }
        if (stories) {
            let dummy = [...stories];
            let reverse = dummy.reverse();
            renderStories = reverse.map((value, index) =>
                <Carousel.Item key={index}>
                    <div className="section-three-overlay1"/>
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
                </Carousel.Item>
            )
        }
        return (pages!==null && pages.length>0 ? (
            <div>
                {one.length>0 && one}
                {defaults.length>0 && defaults}
                {renderProducts && <Carousel interval={3000} indicators={false} controls={false} pauseOnHover={false}>
                    {renderProducts}
                </Carousel>}
                {renderStories && <Carousel interval={5000} pauseOnHover={false}>
                    {renderStories}
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

export default Home;
