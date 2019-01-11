import React, { Component } from "react";
import Employe from './employmentPage/index'
import Employmentheader from './employmentHeader/employmentheader'
import axios from 'axios';
import {API_PATH} from '../apiconfig';
import RequestDemo from '../requestDemo';

class employeesPage extends Component{
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

        let {employee} = this.state;

            return employee&&(<div>

                <Employmentheader title = {employee[0].title} leadText = {employee[0].leadText} imgUrl = {employee[0].featuredImage&&employee[0].featuredImage.url}/>
                <Employe content ={employee[0].content}/>
                    <RequestDemo/>
            </div>)
    }
}

export default employeesPage;
