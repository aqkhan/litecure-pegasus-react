import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import SubscribePage from "../components/subscribe/subscribeContainer";

class SubscribesPage extends Component {


    render() {
        return (
            <Layout>
                <SubscribePage/>
            </Layout>
        )
    }
}
export default withRouter(SubscribesPage);