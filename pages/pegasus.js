import React, { Component } from "react";
import Layout from "../components/layout";
import '../style.css'
import Employment from "../components/employment";
import Products from '../components/product'
import { withRouter } from "next/router";
import Home from "../components/home";
class Pegasus extends Component{

    state = {
        type: null
    };

    componentWillMount() {
        let slug = this.props.router.query.id;
                this.setState({ type:slug })
    }

    pageSwitch(type){
        switch(type){
            case "employment":
                return <Employment />
            case "products": return <Products />
            default: return <Home/>
        }
    }

    render(){
        let{ type } = this.state;
        return (
            <Layout>
                {
                    this.pageSwitch(type)
                }
            </Layout>
        )
    }
}

export default withRouter(Pegasus);
