import React, {Component} from 'react';
import RequestDemo from '../requestDemo';
import axios from 'axios';
import {API_PATH} from '../apiconfig';
import Router from 'next/router';

class AdvisoryBoardMemberDetail extends Component {
    state = {
        error: null
    };

    componentDidMount() {
        let {dispatch, advisoryTeamMembers} = this.props;
        if(!advisoryTeamMembers)
            axios.get(API_PATH + 'teamMembers')
                .then((res => {
                    let temp = [];
                    res.data.teamMembers.forEach((val) => {
                        if (val.team === "advisory-board") {
                            temp.push(val);
                        }
                    });
                    dispatch({
                        type: 'advisoryTeamMembers',
                        payLoad: {
                            advisoryTeamMembers:temp
                        }
                    });
                }))
                .catch(err => {
                    console.log("error", err);
                    this.setState({error: "404 Not Found"})
                });
    }

    render() {
        let { advisoryTeamMembers, slug} = this.props;
        let {error} = this.state;
        let member = null;
        if(advisoryTeamMembers){
            member = advisoryTeamMembers.find(element=> element.slug===slug)
        }
        return (member ? (<div>
                <div className="empty-div">
                    <div className="container">
                        <div className="course-text1">
                            <div onClick={() => Router.back()}><i className="fa fa-chevron-left"> </i></div>
                            <p>BACK TO PREVIOUS </p></div>
                    </div>
                </div>
                <div className="member-wrapper">
                    <section className="container-fluid customer-support-one single-member-article article-area">
                        <div className="container custom-container customer-support">
                            <div className="col-sm-12 member-headshot">
                                <img src={member.memberImage && member.memberImage.url} alt=""/>
                            </div>
                            <div className="col-sm-12">
                                <div className="list-detail"><a href={member.linkedIn}
                                                                target="__blank"><span>[ LINKEDIN ]</span></a></div>
                            </div>
                            <div className="col-sm-12 top-content b-detail">
                                <h1>{member.name} | {member.title}</h1>
                            </div>
                        </div>
                    </section>
                    <section className="single-member-qoutation qoutation bio-bg-para">
                        <div className="container custom-container qoutation-inside">
                            <div className="col-sm-12 bio-paragraph">
                                <p><strong>Bio: </strong><br/>
                                </p>
                                <div className="bio-para" dangerouslySetInnerHTML={{__html: member.Bio}}/>
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

export default AdvisoryBoardMemberDetail;
