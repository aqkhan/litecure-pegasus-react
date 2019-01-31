import React, {Component} from 'react';
import RequestDemo from '../requestDemo';
import {API_PATH} from '../apiconfig'
import {Carousel} from 'react-bootstrap';
import Link from 'next/link'
import axios from 'axios'

class Home extends Component {
    state = {
        pages: null,
        products: null,
        stories: null,
        err: null
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
                throw err
            });
        axios.get(API_PATH + 'products')
            .then((res) => {
                this.setState({products: res.data.products})
            })
            .catch(err => {
                this.setState({err: err})
            });

        axios.get(API_PATH + 'stories')
            .then((res) => {
                this.setState({stories: res.data.stories})
            })
    }


    render() {
        let stories = null;
        let pages;
        let products = null;
        if (this.state.pages) {
            pages = this.state.pages.map((value, index) => {
                if (index === 0)
                    return <section className="new-home-cards home-wrapper" key={index}>
                        <section className="section-one" style={{
                            background: `linear-gradient(rgba(0, 0, 0, 0.66), rgba(6, 6, 6, 0.72)),url(${value.featuredImage && value.featuredImage.url})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",

                        }}>
                            <div className="third-row">
                                <div className="container custom-container">
                                    <div className="flex-container">
                                        <div className="text-container">
                                            <p>{value.headerImageLabel}</p>
                                        </div>
                                        <div>
                                            <div className="vertical-container"></div>
                                        </div>
                                        <div className="btn-txt">
                                            <div>
                                                <p>{value.leadText}</p>
                                                <a href="/detail/home-main">LEARN MORE</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
            })
        }
        if (this.state.products) {
            products = this.state.products.map((value, index) => <Carousel.Item key={index}>
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
                            <div className="line"></div>
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
        if (this.state.stories) {
            stories = this.state.stories.map((value, index) =>
                <Carousel.Item key={index}>
                    <div className="section-three-overlay1"/>
                    {/*<img width={'auto'} height={500} alt="900x500" src={value.featuredImage && value.featuredImage.url } />*/}
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
        return pages?(
            <div>
                {pages}
                {products && <Carousel interval={3000} indicators={false} controls={false} pauseOnHover={false}>
                    {products}
                </Carousel>}
                {stories && <Carousel interval={5000} pauseOnHover={false}>
                    {stories}
                </Carousel>}
                <RequestDemo/>
            </div>
        ):(<div className="splash">
        <div className="lds-ellipsis">
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
            </div>)

    }
}

export default Home;
