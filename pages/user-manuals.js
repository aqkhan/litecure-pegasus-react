import React, { Component } from "react";
import '../style.css'
import UserMannualContainer from "../components/userManual/userManualContainer";
import Layout from "../components/layout";
class UserMannual extends Component{
    render(){
        return(
            <Layout type={"userManual"}>
                <UserMannualContainer/>
            </Layout>
        )
    }
}

export default UserMannual;
