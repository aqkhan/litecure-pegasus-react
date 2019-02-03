import React, {Component} from 'react';
import RequestDemo from '../requestDemo';
import Link from 'next/link';
import axios from 'axios';
import {API_PATH} from '../apiconfig'
import DefaultComponent from "../defaultComponent/defaultComponent";

class Advisory extends Component {
    state = {
        pages: null,
        advisoryTeamMember: null,
        error:null
    };

    componentDidMount() {
        axios.get(API_PATH + 'teamMembers')
            .then((res => {
                let temp = [];
                res.data.teamMembers.forEach((val) => {
                    if (val.team === "advisory-board") {
                        temp.push(val);
                    }
                });
                this.setState({advisoryTeamMember: temp})
            }))
            .catch(err => {
                console.log("error", err);
                this.setState({error: "404 Not Found"})
            });
        axios.get(API_PATH + 'pages')
            .then((res) => {
                let temp = [];
                res.data.pages.forEach((val) => {
                    if (val.type === "advisoryBoard") {
                        temp.push(val);
                    }
                });
                this.setState({pages: temp})
            })
            .catch(err => {
                console.log("error", err);
                this.setState({error :" 404 Not Found"});
            });

    }

    render() {
        let {advisoryTeamMember, pages, error} = this.state;
        let cards = null;
        let one = [];
        let defaults = [];
        if (advisoryTeamMember != null && advisoryTeamMember.length>0) {
            cards = advisoryTeamMember.map((data, index) => <div className="outter-container" key={index}>
                    <Link href={'/advisory-board-member-detail/' + data.slug}><a>
                        <div className="imagecon"
                             style={{backgroundImage: `url(${data.memberImage && data.memberImage.url})`}}/>
                        <div className="hovering-area">
                            <p>{data.name}</p>
                            <p className="second-paragraph">{data.title}</p>
                            <p><i className="fa fa-chevron-right"/></p>
                        </div>
                    </a></Link>
                </div>
            )
        }
        if (pages!==null && pages.length>0) {
             pages.forEach((value, index) =>{
                 if (value.templateOrder==="one"){
                     one =[...one,
                             <section className="new-home-cards" key={index}>
                                 <section className="section-one advisory-board-img" style={{
                                     background: `linear-gradient(rgba(0, 0, 0, 0.66), rgba(6, 6, 6, 0.72)),url(${value.featuredImage && value.featuredImage.url})`,
                                     backgroundRepeat: "no-repeat",
                                     backgroundSize: "cover",
                                     backgroundPosition: "center"
                                 }}>
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
                                         <div className="line"></div>
                                     </div>
                                 </section>
                                 <div className="blog-content-teambio-responsive-only pride">
                                     <section className="container-fluid article-area remove">
                                         <div className="customer-support">
                                             <div className=" lead_text_area">
                                                 <div className="container custom-container">
                                                     <div className="col-sm-12">
                                                         <div className="advisory-page-para"
                                                              dangerouslySetInnerHTML={{__html: value.content}}/>
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                     </section>
                                 </div>
                             </section>
                     ]
                 }
                 else {
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
        return (cards ?(
            <div>
                {one.length >0  && one}
                {defaults.length >0 && defaults}
                <div className="blog-content-teambio-responsive-only pride">
                    <section className="container-fluid article-area remove">
                        <div className="customer-support">
                            <div className="container custom-container">
                                <div className="hoverd-images">
                                    {cards}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <RequestDemo/>
            </div>
        ): error ? (<div className="splash">
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
        </div>));
    }
}


export default Advisory;