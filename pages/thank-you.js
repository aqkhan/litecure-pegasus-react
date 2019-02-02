import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import Thankyou from "../components/thankYou/thankYou";


class Benefits extends Component {


    render() {
        return (
            <Layout>
                <Thankyou/>
            </Layout>
        )
    }
}
export default withRouter(Benefits);