import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import AthleteComponent from '../components/stories/athlete';

class Athlete extends Component {
    render() {
        return (
            <Layout type={"athlete"}>
                <AthleteComponent/>
            </Layout>
        )
    }
}
export default withRouter(Athlete);
