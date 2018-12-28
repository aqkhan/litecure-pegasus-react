/**
 * Created by FaZi on 12/27/2018.
 */
/**
 * Created by FaZi on 12/10/2018.
 */
import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import DetailPage from "../components/detailPage/index";
class detailsPage extends Component {
    render() {
        return (
            <Layout type={"detail"}>
                <DetailPage/>
            </Layout>
        )
    }
}
export default withRouter(detailsPage);
