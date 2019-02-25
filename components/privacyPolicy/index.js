import React, { Component } from "react";
import Employe from './employmentPage/index'
import axios from 'axios';
import {API_PATH} from '../apiconfig';
import RequestDemo from '../requestDemo';
import DefaultComponent from "../defaultComponent/defaultComponent";
import Router from 'next/router';
class employeesPage extends Component{
    state = {
        error:null
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
    render(){
        let {error} = this.state;
        let {pages} = this.props;
        let one = [];
        let defaults =[];
            if(pages && pages.length>0){
                pages.forEach((item,index)=>{
                    if (item.templateOrder==='one' && item.type === "privacyPolicy"){
                        one = [
                            ...one,<div key={index}>
                                <Employe content ={item.content} headerImageLabel={item.headerImageLabel}/>
                            </div>
                        ]
                    }
                    else if( item.type === "privacyPolicy") {
                        defaults = [...defaults,
                            <DefaultComponent featuredImage={item.featuredImage}
                                              headerImageLabel={item.headerImageLabel && item.headerImageLabel}
                                              metaTitle={item.metaTitle && item.metaTitle}
                                              leadText={item.leadText && item.leadText}
                                              content={item.content && item.content}/>
                        ]
                    }
                })
            }
            return (pages&& pages.length>0?(<div>
                <div className="empty-div">
                    <div className="container">
                        <div className="course-text1"><div onClick={() => Router.back()}><i className="fa fa-chevron-left"> </i></div><p>BACK TO PREVIOUS </p></div>
                    </div>
                </div>
                {one && one.length>0 && one}
                {defaults && defaults.length> 0 && defaults}
                    <RequestDemo/>
            </div>): error ? (<div className="splash">
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

export default employeesPage;
