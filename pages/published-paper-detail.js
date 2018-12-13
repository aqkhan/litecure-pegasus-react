/**
 * Created by FaZi on 12/10/2018.
 */
import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import PublicationDetails from '../components/publicationDetail/publishedPaperDetail';

class PublishedPaperDetail extends Component {

    render() {
        return (
            <Layout type={"published-papers"}>
                <PublicationDetails/>
            </Layout>
        )
    }
}
export default withRouter(PublishedPaperDetail);
