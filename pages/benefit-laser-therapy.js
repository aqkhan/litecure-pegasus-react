import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import BenefitLaserTherapy from "../components/detailPage/benefitLaserTherapy";


class Benefits extends Component {


    render() {
        return (
            <Layout>
                <BenefitLaserTherapy/>
            </Layout>
        )
    }
}
export default withRouter(Benefits);