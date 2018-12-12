import React, {Component} from 'react';
import RequestDemo from '../requestDemo';
import Link from 'next/link';
import  axios from 'axios';
import {API_PATH} from '../apiconfig'
class Advisory extends Component {
  state={
      advisoryTeamMember:null,
  }
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
  }
    render() {
        let cards=null;
        let {advisoryTeamMember}= this.state;
        if (advisoryTeamMember){
            cards = advisoryTeamMember.map((data,index)=> <div className="outter-container" key={index}>
                    <Link href={'/advisory-board-detail/'+data.slug}><a>
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
        return (<div>
                <div className="blog-content-teambio-responsive-only pride">
                    <section className="container-fluid article-area remove">
                        <div className="customer-support">
                            <div className=" lead_text_area">
                                <div className="container custom-container">
                                    <div className="col-sm-12">
                                        <p>As part of the Pegasus promise to leading the way in equine science and
                                            technology, Pegasus Therapy participates in an annual advisory board
                                            meeting. Industry leaders in science, education, and veterinary medicine
                                            discuss the current and future state of the equine market and suggest steps
                                            to meet the growing demand for versatile and research-based
                                            technologies.</p>
                                        <h3 className="advisory-page-heading">Meet the Veterinary Advisory Board</h3>
                                    </div>
                                </div>
                            </div>
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