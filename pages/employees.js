import React, { Component } from "react";
import '../style.css'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import EmployeesPage from "../components/employment/employeeContainer";

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
