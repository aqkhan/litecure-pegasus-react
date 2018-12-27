
import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import Webinars from '../components/webinars/webinars';

class webinars extends Component {


    render() {
        return (
            <Layout type={"Webinars"}>
                <Webinars/>
            </Layout>
        )
    }
}
export default withRouter(webinars);
