
import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import Research from '../components/onGoingResearch/research';

class onGoingResearch extends Component {


    render() {
        return (
            <Layout type={"ongoingresearch"}>
                <Research/>
            </Layout>
        )
    }
}
export default withRouter(onGoingResearch);
