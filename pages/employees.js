/**
 * Created by FaZi on 12/27/2018.
 */
/**
 * Created by FaZi on 12/10/2018.
 */
import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import EmployeesPage from "../components/employment/index";

class employeesPage extends Component {


    render() {
        return (
            <Layout type={"employees"}>
                <EmployeesPage/>
            </Layout>
        )
    }
}
export default withRouter(employeesPage);
