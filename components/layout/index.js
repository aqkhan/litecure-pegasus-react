import React, { Component } from "react";
import Header from "../header";
import Footer from "../footer";
class index extends Component{
    render(){
        return(
            <section>
                <Header/>
                {this.props.children}
                <Footer/>
            </section>
        )
    }
}

export default index;