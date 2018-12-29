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
        err:null
    }
    componentWillMount(){
        let {slug}= this.props;
        axios.get(API_PATH +'pages/'+slug)
            .then((res)=>{
                this.setState({page:res.data.page});
                console.log(this.state.page)
            })
            .catch(err=>{throw err});
    }
    render(){
        let {page}= this.state;
        return(page &&
            <div>
            <Detailheader imgUrl={page.featuredImage && page.featuredImage.url} headerImageLable={page.headerImageLable} leadText={page.leadText}/>
            <DetailContent content={page.content}/>
            </div>
            )
    }
}

export default detailPage;
