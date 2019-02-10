/**
 * Created by FaZi on 12/10/2018.
 */
import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import PublishedPapersComp from '../components/publication/articlesContainer';

class Articles extends Component {


    render() {
        return (
            <Layout type={"articles"}>
                <PublishedPapersComp/>
            </Layout>
        )
    }
}
export default withRouter(Articles);
