import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import Advisory from '../components/advisoryBoard';
class Board extends Component {
    render() {
        return (
            <Layout type={"advisoryboard"}>
                <Advisory/>
            </Layout>
        )
    }
}
export default withRouter(Board);
