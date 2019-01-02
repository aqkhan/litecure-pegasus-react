import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import Products from '../components/product'
class Product extends Component {
    state={
        slug:null
    };
    componentWillMount() {
        this.setState({ slug:"slug" })
    };

    render() {
        return (
            <Layout type={"product"}>
                <Products/>
            </Layout >
        )
    }
}
export default withRouter(Product);
