import React, {Component} from 'react';
import RequestDemo from '../requestDemo';
import Link from 'next/link';
import  axios from 'axios';
import {API_PATH} from '../apiconfig'
class Advisory extends Component {
  state={
      advisoryTeamMember:null,
      advisoryBanner:null
  };
    componentWillMount(){
            axios.get(API_PATH +'teamMembers')
                .then((res=>{
                    let temp=[];
                    res.data.teamMembers.forEach((val)=>{
                        if (val.team==="advisory-board"){
                            temp.push(val);
                        }
                    });
                    this.setState({advisoryTeamMember:temp})
                }))
                .catch()
        axios.get(API_PATH +'pages')
            .then((res)=>{
                let temp=[];
                res.data.pages.forEach((val)=>{
                    if (val.type==="advisoryBoard"){
                        temp.push(val);
                    }
                });
                this.setState({advisoryBanner:temp})
            })
            .catch(err=>{throw err});

    }
    render() {
        let cards=null;
        let banner=null;
        let {advisoryTeamMember, advisoryBanner}= this.state;
        if (advisoryTeamMember){
            cards = advisoryTeamMember.map((data,index)=> <div className="outter-container" key={index}>
                    <Link href={'/advisory-board-member-detail/'+data.slug}><a>
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
        if (advisoryBanner){
            banner=advisoryBanner.map((value,index) =><div>
                <section className="new-home-cards" key={index}>
                    <section className="section-one" style={{
                        background: `linear-gradient(rgba(0, 0, 0, 0.66), rgba(6, 6, 6, 0.72)),url(${value.featuredImage && value.featuredImage.url})`,
                        }} >
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
                        <div className="blog-content-teambio-responsive-only pride">
                            <section className="container-fluid article-area remove">
                                <div className="customer-support">
                                    <div className=" lead_text_area">
                                        <div className="container custom-container">
                                            <div className="col-sm-12">
                                                <div className="advisory-page-para" dangerouslySetInnerHTML={{__html: value.content}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                </section>
                </div>
            )
        }
        return (<div>
                {banner&&banner}
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
        );
    }
}


export default Advisory;