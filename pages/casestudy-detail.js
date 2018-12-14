/**
 * Created by FaZi on 12/10/2018.
 */
import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import PublicationDetails from '../components/publicationDetail/caseStudyDetail';

class CaseStudyDetail extends Component {
    state={
        slug:null
    };
    componentWillMount() {
        let slug = this.props.router.query.name;
        this.setState({ slug:slug })
    };
    render() {
        let {slug} = this.state;
        return (
            <Layout type={"caseStudies"}>
                <PublicationDetails slug={slug}/>
            </Layout>
        )
    }
}
export default withRouter(CaseStudyDetail);
