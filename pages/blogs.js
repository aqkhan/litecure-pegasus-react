
import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import Blogs from '../components/publication/blogs';

class blogs extends Component {


    render() {
        return (
            <Layout type={"blogs"}>
                <Blogs/>
            </Layout>
        )
    }
}
export default withRouter(blogs);
