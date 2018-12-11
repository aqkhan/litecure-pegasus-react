/**
 * Created by FaZi on 12/10/2018.
 */
import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import PublicationDetails from '../components/publicationDetail';

class PublicationDetail extends Component {


    render() {
        return (
            <Layout type={"PublicationDetails"}>
                <PublicationDetails/>
            </Layout>
        )
    }
}
export default withRouter(PublicationDetail);
