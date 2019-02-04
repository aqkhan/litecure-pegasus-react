import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import ClinicalVeterinarianComponent from '../components/stories/clinicalVeterinarian';

class ClinicalVeterinarian extends Component {
    render() {
        return (
            <Layout type={"clinicalVeterinarian"}>
                <ClinicalVeterinarianComponent/>
            </Layout>
        )
    }
}
export default withRouter(ClinicalVeterinarian);
