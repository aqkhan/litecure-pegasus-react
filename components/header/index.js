import React, { Component } from "react";
import Head from "next/head";
class Header extends Component{

    render(){
        return(
            <div>
                <Head>
                    <title>Home</title>
                    <link href="https://fonts.googleapis.com/css?family=Roboto:300" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto:300" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
                    <link rel="stylesheet" href="/static/style.css"/>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"/>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"/>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="utf-8" />
                </Head>
                <div className="first-section">
                    <div className="first-row">
                        <div className="container custom-container">
                            <div className="row HEADERS">
                                <div className="flex-end-row">
                                    <img src="/static/images/logos1.png" />
                                </div>
                                <div className="mag-icon">
                                    <img src="/static/images/magnifier.png" width="18px" height="18px"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="second-row">
                        <div className="for-responsive-only">
                            <div className="custom-container">
                                <div className="menu-button  click">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div className="container showhide custom-container">
                            <div className="row  justify-center align-center">
                                <ul className="responsive-column navbar flex-row">
                                    <li><span className="active">PRODUCTS</span></li>
                                    <li><span>RESEARCH</span></li>
                                    <li><span>RESOURCES</span></li>
                                    <li><span>ABOUT</span></li>
                                    <li><span>SUPPORT</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Header;