/**
 * Created by FaZi on 12/28/2018.
 */
import React, { Component } from "react";
import Detailheader from './detailheader/index'
import DetailContent from './contentdetail/index'
import axios from 'axios';
import {API_PATH} from '../apiconfig';

class detailPage extends Component{
    state = {
        page: null,
        error:null
    };
    componentWillMount(){
        let {slug}= this.props;
        axios.get(API_PATH +'pages/'+slug)
            .then((res)=>{
                this.setState({page:res.data.page});
            })
            .catch(err=>{
                console.log("error", err);
                this.setState({error:err});
               });
    }
    render(){
        let {page, error}= this.state;
        return(page?
            <div>
            <Detailheader imgUrl={page.featuredImage && page.featuredImage.url} headerImageLabel={page.headerImageLabel} leadText={page.leadText}/>
            <DetailContent content={page.content}/>
            </div>: error ? (<div className="splash">
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
            </div>)
            )
    }
}

export default detailPage;
