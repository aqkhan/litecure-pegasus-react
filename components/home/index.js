import  React , { Component } from 'react';
import RequestDemo from '../requestDemo';
import {API_PATH} from '../apiconfig'
import {Carousel} from 'react-bootstrap';
import Link from 'next/link'
import axios from 'axios'
class  Home extends Component{
    state = {
        pages:null,
        stories:null
    }
    componentWillMount() {
        axios.get(API_PATH +'pages')
            .then((res)=>{
                let temp=[];
                res.data.pages.forEach((val)=>{
                    if (val.type==="homepage"){
                        temp.push(val);
                    }
                });
                this.setState({pages:temp})
            })
            .catch(err=>{throw err});

        axios.get(API_PATH + 'stories')
            .then((res)=>{
            this.setState({stories:res.data.stories})
            })
    }


    render() {
        let stories = null;
        let pages;
        if (this.state.pages){
            pages = this.state.pages.map((value, index)=>{
                    if(index===1){
                        return <section className="new-home-cards">
                            <section className="section-one publication-header" style={{
                                background: `linear-gradient(rgba(0, 0, 0, 0.66), rgba(6, 6, 6, 0.72)),url(${value.featuredImage && value.featuredImage.url})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                            }}>
                                <div className="third-row">
                                    <div className="container custom-container">
                                        <div className="row flex">
                                            <div className="header-text publication-text home-page">
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
                                            <div className="flex-column learnmore-header">
                                                <p>{value.leadText}</p>
                                                <Link href="/products"><a>
                                                    VIEW PRODUCTS
                                                </a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </section>
                    }
                    return<section className="new-home-cards" key={index}>
                        <section className="section-one" style={{
                            background: `linear-gradient(rgba(0, 0, 0, 0.66), rgba(6, 6, 6, 0.72)),url(${value.featuredImage && value.featuredImage.url})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",}} >
                            <div className="third-row">
                                <div className="container custom-container">
                                    <div className="row flex">
                                        <div className="header-text">
                                            <p><br/><span>{value.headerImageLabel}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="small-upper-line flex">
                                <div className="line"> </div>
                            </div>
                            <div className="fourth-row">
                                <div className="custom-container container">
                                    <div className="row flex">
                                        <div className="flex-column learnmore-header learn-home">
                                            <div className='detail-content'><div className="home-start-content" dangerouslySetInnerHTML={{__html: value.leadText}}/></div>
                                            <Link><a href="/detail/home-main">
                                                LEARN MORE
                                            </a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
        })}

        if ( this.state.stories){
            stories = this.state.stories.map((value,index)=>
                <Carousel.Item key={index}>
                    <div className="section-three-overlay1"/>
                    <img width={'auto'} height={500} alt="900x500" src={value.featuredImage && value.featuredImage.url } />
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
        return(
            <div>
                {pages}

{stories&&<Carousel interval={2000}>
    {stories}
</Carousel>}
                <RequestDemo/>
                </div>
        )

}
}
export default Home;
