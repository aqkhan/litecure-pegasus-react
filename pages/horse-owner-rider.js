import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import HorseRiderComponent from '../components/stories/horseRider';

class HorseRider extends Component {
    render() {
        return (
            <Layout type={"horseRider"}>
                <HorseRiderComponent/>
            </Layout>
        )
    }
}
export default withRouter(HorseRider);
