import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import Products from '../components/product'
import ProductDetail from "../components/product/productDetail";
class Product extends Component {
    state={
        slug:null
    };
    componentWillMount() {
        let slug = this.props.router.query.name;
        this.setState({ slug:slug })
    }


    render() {
        let {slug} = this.state;
        return (
            slug?<Layout>
                <ProductDetail slug={slug}/>
            </Layout>:<Layout>
                <Products/>
            </Layout>
        )
    }
}
export default withRouter(Product);
