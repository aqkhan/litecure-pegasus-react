import React, { Component } from 'react';
import RequestDemo from '../requestDemo';
import {API_PATH} from '../apiconfig';
import axios from 'axios';
import Link from "next/link";
class TextDetail extends Component{
    state={
        content: null,
    }
    componentDidMount(){
        axios.get(API_PATH + 'pages')
            .then((res) => {
                let temp=[];
                res.data.pages.map((item)=>{
                    if(item.type === 'support'){
                        temp.push(item);
                    }
                });
                this.setState({content: temp});
                })
            .catch(err => {
                console.log("error", err);
            })
    }
    render() {
        let content = null;
        if (this.state.content){
            content = this.state.content.map((data,index)=>{
             if (index===0){
                 return (<section className="classification">
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
                 </section>)
             }
            });
        }
        return content?(
            <div>
                {content&&content}
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

export default TextDetail;
