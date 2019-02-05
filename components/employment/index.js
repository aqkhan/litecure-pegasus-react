import React, { Component } from "react";
import Employe from './employmentPage/index'
import Employmentheader from './employmentHeader/employmentheader'
import axios from 'axios';
import {API_PATH} from '../apiconfig';
import RequestDemo from '../requestDemo';
import DefaultComponent from "../defaultComponent/defaultComponent";

class employeesPage extends Component{
    state = {
        pages: null,
        error:null
    };
    componentDidMount(){
        axios.get(API_PATH +'pages')
            .then((res)=>{
                let temp=[];
                res.data.pages.forEach((val)=>{
                    if (val.type==="employment"){
                        temp.push(val);
                    }
                });

                this.setState({pages:temp})

            })
            .catch(err=>{throw err});
    }
    render(){

        let {pages,error} = this.state;
        let one = [];
        let defaults =[];
            if(pages && pages.length>0){
                pages.forEach((item,index)=>{
                    if (item.templateOrder==='one'){
                        one = [
                            ...one,<div>
                                <Employmentheader headerImageLabel = {item.headerImageLabel} leadText = {item.leadText} imgUrl = {item.featuredImage&&item.featuredImage.url}/>
                                <Employe content ={item.content}/>
                            </div>
                        ]
                    }
                    else {
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
