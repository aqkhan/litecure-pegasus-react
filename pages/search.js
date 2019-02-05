import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import Search from "../components/search/search";
class index extends Component{
    render(){
        return(
            <Layout>
                <Search/>
            </Layout>
        )
    }
}

export default index;