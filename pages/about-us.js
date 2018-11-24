import React, { Component } from "react";
import '../style.css'
import AboutUs from "../components/aboutUs";
import Layout from "../components/layout";
class index extends Component{
    render(){
        return(
            <Layout>
                <AboutUs/>
            </Layout>
        )
    }
}

export default index;
