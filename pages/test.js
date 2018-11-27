import React, { Component } from "react";
import '../style.css'
import {PegasusProvider} from '../components/store/context'
import Test from "../components/test/testContainer";
import Layout from "../components/layout";
class index extends Component{
    render(){
        return(
            <PegasusProvider>
                <Layout>
                    <Test/>
                </Layout>
            </PegasusProvider>
        )
    }
}

export default index;
