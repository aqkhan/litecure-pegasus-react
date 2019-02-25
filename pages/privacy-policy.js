import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import PrivacyPolicyPage from "../components/privacyPolicy/privacyPolicyContainer";

class PrivacyPolicy extends Component {

    render() {
        return (
            <Layout>
                <PrivacyPolicyPage/>
            </Layout>
        )
    }
}
export default withRouter(PrivacyPolicy);
