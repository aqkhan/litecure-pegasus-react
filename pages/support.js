import React, { Component } from "react";
import '../style.css'
import TextDetail from "../components/support/supportContainer";
import Layout from "../components/layout";
class index extends Component{

    render(){
        return(
            <Layout type={"support"}>
                <TextDetail/>
            </Layout>
        )
    }
}

export default index;
