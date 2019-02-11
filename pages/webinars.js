
import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import Webinars from '../components/publication/webinarsContainer';

class webinars extends Component {


    render() {
        return (
            <Layout type={"webinars"}>
                <Webinars/>
            </Layout>
        )
    }
}
export default withRouter(webinars);
