import React, { Component } from "react";
import '../style.css'
import TextDetail from "../components/textDetail";
import Layout from "../components/layout";
class index extends Component{
    render(){
        return(
            <Layout>
                <TextDetail/>
            </Layout>
        )
    }
}

export default index;
