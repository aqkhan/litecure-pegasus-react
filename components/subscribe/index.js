import React, { Component } from "react";
import Subscribe from './subscribePage/subscribePage'
import SubscribeHeader from './subscribeHeader/subscribeHeader'
import axios from 'axios';
import {API_PATH} from '../apiconfig';
// import RequestDemo from '../requestDemo';
// import DefaultComponent from "../defaultComponent/defaultComponent";

class SubscribePage extends Component{
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
        let two = [];
        let defaults =[];
        if(pages && pages.length>0){
            pages.forEach((item,index)=>{
                if (item.templateOrder==='two' && item.type === "paradotForm"){
                    two = [
                        ...two,<div key={index}>
                            <SubscribeHeader headerImageLabel = {item.headerImageLabel} leadText = {item.leadText} imgUrl = {item.featuredImage&&item.featuredImage.url}/>
                            <Subscribe content ={item.content}/>
                        </div>
                    ]
                }
            })
        }
        return (pages&& pages.length>0?(<div>
            {two && two.length>0 && two}
            {/*<RequestDemo/>*/}
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

export default SubscribePage;
