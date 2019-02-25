import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import TermOfUsePage from "../components/termOfUse/termOfUseContainer";

class TermOfUse extends Component {

    render() {
        return (
            <Layout>
                <TermOfUsePage/>
            </Layout>
        )
    }
}
export default withRouter(TermOfUse);
