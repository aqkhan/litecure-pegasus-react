import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import ProductDetail from "../components/product/productDetail";
import Product from "../components/product";
class Products extends Component {
    state={
        products:[],
        slug:null
    }
    componentWillMount() {
        let slug = this.props.router.query.id;
        this.setState({ slug:slug })
    }


    render() {
        let {slug} = this.state;
        return (
            slug?<Layout>
                <ProductDetail slug={slug}/>
            </Layout>:<Layout>
                <Product/>
            </Layout>
        )
    }
}
export default withRouter(Products);
