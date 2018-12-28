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
        employee: null,
        err:null
    }
    componentWillMount(){
        axios.get(API_PATH +'pages')
            .then((res)=>{
                let temp=[];
                res.data.pages.forEach((val)=>{
                    if (val.type==="employment"){
                        temp.push(val);
                    }

                });

                this.setState({employee:temp})

            })
            .catch(err=>{throw err});
    }
    render(){
        return(
            <div>
                <Detailheader/>
                <DetailContent/>
            </div>)
    }
}

export default detailPage;
