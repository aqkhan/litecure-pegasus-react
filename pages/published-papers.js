/**
 * Created by FaZi on 12/10/2018.
 */
import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import PublishedPapersComp from '../components/publication/publishedPapersContainer';

class PublishedPapers extends Component {


    render() {
        return (
            <Layout type={"publishedPapers"}>
                <PublishedPapersComp/>
            </Layout>
        )
    }
}
export default withRouter(PublishedPapers);
