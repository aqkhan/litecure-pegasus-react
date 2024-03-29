import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import Post from '../components/blogPost/postContainer';
class post extends Component {
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
            <Layout type={"blogs"}>
                <Post slug={slug}/>
            </Layout>
        )
    }
}
export default withRouter(post);
