/**
 * Created by FaZi on 12/11/2018.
 */
import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import Photobiomodudlations from "../components/photobiomodulation/index";

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
