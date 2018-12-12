import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import AdvisoryDetail from '../components/advisoryBoardDetail';
class AdvisoryBoardDetail extends Component {
    render() {
        return (
            <Layout type={"advisoryDetail"}>
                <AdvisoryDetail></AdvisoryDetail>
            </Layout>
        )
    }
}
export default withRouter(AdvisoryBoardDetail);
