import  React, {Component} from 'react';
import RequestDemo from '../requestDemo';
import WebinarsHeader from './webinarHeader';
import WebinarsCategory from './webinarCategory';
import {API_PATH} from '../apiconfig'
import axios from 'axios';

class webinars extends Component {
    state = {
        webinars:null,
        err:null
    }
    componentDidMount(){
        axios.get(API_PATH + 'webinars')
            .then((res) => {
                console.log("datacoming",res);
                let temp = [];
                res.data.webinars.forEach((val) => {

                    temp.push(val);

                });
                this.setState({webinars: temp})
            })
            .catch(err => {
                this.setState({err:err})
            })
    }
    render() {
        let {webinars} = this.state;
        return (
            <div>
                <WebinarsHeader webinarCategory={"Webinar"}/>
                <WebinarsCategory webinars={webinars} webinarCategory={"Webinar"} page={"/webinar/"}/>
                <RequestDemo/>
            </div>
        )
    }
}
export default webinars;
