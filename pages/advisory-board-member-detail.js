import React, {Component} from "react";
import '../style.css'
import Layout from "../components/layout";
import {withRouter} from "next/router";
import AdvisoryDetail from '../components/advisoryBoardMemberDetail';

class AdvisoryBoardMemberDetail extends Component {
    state = {
        slug: null
    };

    componentDidMount() {
        let slug = this.props.router.query.name;
        this.setState({slug: slug})
    };

    render() {
        let {slug} = this.state;
        return (
            <Layout type={"advisoryboard"}>
                {slug && <AdvisoryDetail slug={slug}/>}
            </Layout>
        )
    }
}

export default withRouter(AdvisoryBoardMemberDetail);
