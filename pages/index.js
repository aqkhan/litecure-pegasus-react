import React, { Component } from "react";
import '../style.css'
import Home from "../components/home";
import Layout from "../components/layout";
class index extends Component{
    render(){
        return(
            <Layout>
                <Home/>
            </Layout>
        )
    }
}

export default index;
