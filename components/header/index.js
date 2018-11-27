import React, { Component } from "react";
import Link from 'next/link';
import Head from "next/head";
class Header extends Component{
    state={
        products:"",
        research:"",
        resources:"",
        about:"",
        support:"",
        type:null
    }
    componentWillMount() {
        this.setState({type:this.props.type})
    }

    changeHover(type){
        switch (type) {
            case "product":
                this.setState({products:"active",research:"", resources:"", about:"",support:""})
                consolw.log(this.state.products)
                return;
            case "research":
                this.setState({products:"",research:"active", resources:"", about:"",support:""})
                return;
            case "resources":
                this.setState({products:"",research:"", resources:"active", about:"",support:""})
                return;
            case "about":
                this.setState({products:"",research:"", resources:"", about:"active",support:""})
                return;
            case "support":
                this.setState({products:"",research:"", resources:"", about:"",support:"active"})
                return;
        }

    }
    render(){
        return(
            <div>
                <Head>
                    <title>Pegasus</title>
                    <meta http-equiv="x-ua-compatible" content="ie=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <link rel="stylesheet" href="/static/css/bootstrap.css"/>
                    <link rel="stylesheet" href="/static/css/responsive.css"/>
                    <link href="https://fonts.googleapis.com/css?family=Roboto:300" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto:300" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js" />
                    <link rel="stylesheet"
                          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
                          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
                          crossOrigin="anonymous"/>
                </Head>

                    <section className="new-header">
                        <section className="first-section">
                            <div className="first-row">
                                <div className="container custom-container">
                                    <div className="row HEADERS">
                                        <div className="col-sm-7 col-7 flex-end-row  ">
                                            <Link href="/"><a><img src="/static/images/logos1.png" /></a></Link>
                                        </div>
                                        <div className="col-sm-5 col-5 flex-end-row ">
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
                                        <ul className="responsive-column navbar flex-row nav-color">
                                            <li><span className={this.state.products}><Link href="/products"><a>PRODUCTS</a></Link></span></li>
                                            <li><span className={this.state.research}><Link  href="/"><a>Research</a></Link></span></li>
                                            <li><span className={this.state.resources}><Link href="/resources"><a>RESOURCES</a></Link></span></li>
                                            <li><span className={this.state.about}><Link href="/about-us"><a>About</a></Link></span></li>
                                            <li><span className={this.state.support}><Link href="/support"><a>Support</a></Link></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </section>
            </div>
        )
    }

}

export default Header;
