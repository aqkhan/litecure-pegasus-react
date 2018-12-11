import React, { Component } from "react";
import '../style.css'
import '../saju.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import Advisory from '../components/advisoryBoard';
class Board extends Component {
    render() {
        return (
            <Layout type={"advisory"}>
                <Advisory></Advisory>
            </Layout>
        )
    }
}
export default withRouter(Board);
