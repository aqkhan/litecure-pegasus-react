import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import ProductDetail from "../components/product/productDetail";
class Product extends Component {
    state={
        slug:null
    };
    componentWillMount() {
        let slug = this.props.url.query.name;
        this.setState({ slug:slug })
    }


    render() {
        let {slug} = this.state;
        return (
            <Layout>
                <ProductDetail slug={slug}/>
            </Layout>
        )
    }
}
export default withRouter(Product);
