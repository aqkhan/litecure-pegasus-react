/**
 * Created by FaZi on 12/10/2018.
 */
import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import Publications from '../components/publication'
class Publication extends Component {


    render() {
        return (
            <Layout type={"publications"}>
                <Publications/>
            </Layout>
        )
    }
}
export default withRouter(Publication);
