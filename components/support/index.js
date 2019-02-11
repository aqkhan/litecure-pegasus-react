import React, { Component } from 'react';
import RequestDemo from '../requestDemo';
import DefaultComponent from '../defaultComponent/defaultComponent';
import {API_PATH} from '../apiconfig';
import axios from 'axios';
class TextDetail extends Component{
    state={
        error: null
    };
    componentDidMount(){
        let {pages, dispatch} = this.props;
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
    }
    render() {
        let {error} = this.state;
        let {pages} = this.props;
        let one = [];
        let defaults=[];
        if (pages !== null && pages.length > 0) {
            pages.forEach((data, index) => {
                if (data.templateOrder === 'one' && data.type ==="support") {
                    one = [...one,<section className="classification" key={index}>
                     <section className="first-section" style={data.featuredImage && {background:`linear-gradient(rgba(14, 13, 13, 0.89), rgba(10, 9, 9, 0.86)), url(${data.featuredImage && data.featuredImage.url})`,
                        "backgroundRepeat": "no-repeat",
                        "backgroundSize": "cover",
                        "backgroundPosition": "center"}}>
                         <div className="container custom-container">
                             <div className="row flex">
                                 <div className="header-text">
                                     <p> Support </p>
                                 </div>
                             </div>
                         </div>
                         <div className="fourth-row text-area">
                             <div className=" container">
                                 <div className="row ">
                                     <div className="col-sm-12 ">
                                         <div className="learnmore-header ex-class">
                                             <div className="data alotted-html">
                                                 <div className="description-dev">
                                                     <div className="publication-description"
                                                          dangerouslySetInnerHTML={{__html: data.content}}/>
                                                 </div>

                                             </div>
                                             {/*<div className="button">*/}
                                                 {/*<a href="#">TERMS IN LASER THERAPY</a>*/}
                                                 {/*<Link href="/published-paper-detail/shining-examples-three-case-studies-shed-light-on-the-widespread-benefits-of-laser-therapy"><a className="benefits">BENEFITS OF LASER THERAPY</a></Link>*/}
                                                 {/*<Link href="/resources"><a href="#">RESOURCES &amp; LINKS </a></Link>*/}
                                             {/*</div>*/}
                                         </div>
                                     </div>
                                 </div>
                             </div>

                         </div>
                     </section>
                 </section>]
             }
             else if(data.type ==="support") {
                defaults =[...defaults,
                    <DefaultComponent featuredImage={data.featuredImage}
                                      headerImageLabel={data.headerImageLabel && data.headerImageLabel}
                                      metaTitle={data.metaTitle && data.metaTitle}
                                      leadText={data.leadText && data.leadText}
                                      content={data.content && data.content}/>
                ]
            }
            });
        }
        return (pages!==null && pages.length>0 ? (
            <div>
               {one && one}
               {defaults && defaults}
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

export default TextDetail;
