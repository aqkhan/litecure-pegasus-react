/**
 * Created by FaZi on 12/11/2018.
 */
import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import Photomodudlations from "../components/photoModulation/index";

class PhotoModulation extends Component {
    state={
        slug:null
    };
    render() {
        let {slug} = this.state;
        return (
            <Layout>
                <Photomodudlations slug={slug}/>
            </Layout>
        )
    }
}
export default withRouter(PhotoModulation);
