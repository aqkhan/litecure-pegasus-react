import React, { Component } from "react";
import Subscribe from '../components/subscribe/subscribePage/subscribePage'
import SubscribeHeader from '../components/subscribe/subscribeHeader/subscribeHeader'
import axios from 'axios';
import {API_PATH} from '../components/apiconfig';
import Layout from "../components/layout";
import '../style.css'

function PtxIQ() {
    return (
        <Layout>
            <PtxPage/>
        </Layout>
    )
}

class PtxPage extends Component{
    state = {
        error:null,
        page: null
    };
    componentDidMount(){
        let {pages} = this.props;
        if (!pages) {
            axios.get(API_PATH + 'pages/ptx-iq')
                .then((res) => {
                   this.setState({page: res.data.page});
                })
                .catch(err => {
                    console.log("error", err);
                    this.setState({error: "404 Home Page Not Found"})
                });
        }
    }
    render(){
        let {error, page} = this.state;
        return (page ? (<div>
            <div>
                <SubscribeHeader headerImageLabel={page.headerImageLabel} leadText = {page.leadText} imgUrl = {page.featuredImage&&page.featuredImage.url}/>
                <Subscribe item={page}/>
            </div>
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

export default PtxIQ;
