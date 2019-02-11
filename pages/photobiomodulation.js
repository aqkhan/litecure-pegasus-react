import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import Photobiomodudlations from "../components/photobiomodulation/photobiomodulationContainer";

class Photobiomodulation extends Component {
    render() {
        return (
            <Layout  type={"photobiomodulation"}>
                <Photobiomodudlations />
            </Layout>
        )
    }
}
export default withRouter(Photobiomodulation);
