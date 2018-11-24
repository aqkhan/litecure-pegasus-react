import React, { Component } from "react";
import '../style.css'
import MediaDetail from "../components/mediaDetail";
import Layout from "../components/layout";
class index extends Component{
    render(){
        return(
            <Layout>
                <MediaDetail/>
            </Layout>
        )
    }
}

export default index;
