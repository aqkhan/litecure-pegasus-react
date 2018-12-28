import React, { Component } from "react";
import Link from 'next/link';
import Head from "next/head";
import $ from "jquery";
class Header extends Component{
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        if ($(window).scrollTop() >= 86) {
            $('.second-row').addClass('fixed-header');
        }
        else {
            $('.second-row').removeClass('fixed-header');
    }
    }
    state={
        products:"",
        resources:"",
        about:"",
        support:"",
        blogs:"",
        education:"",
        evidence:"",
        publications:"",
        caseStudies:"",
        articles:"",
        publishedPapers:"",
        photobiomodulation:"",
        advisoryboard:"",
        webinars:"",
        ongoingresearch:"",
        dropdown: false,
        wdropdown:false,
        publicationDropdown:false

    };
    componentWillMount() {
        console.log("header",this.props.type)
        this.changeHover(this.props.type)
    }
    componentWillReceiveProps(nextProps, nextContext) {
        console.log("header",this.props.type)
        this.changeHover(this.props.type)
    }
    evidenceDropdown(){
        let {dropdown}=this.state;
        this.setState({dropdown:!dropdown})
    }

    educationDropdown(){
        let {wdropdown} = this.state;
        this.setState({wdropdown:!wdropdown})
    }

    publicationDropdownFunc(){
        let {publicationDropdown}=this.state
        this.setState({publicationDropdown:!publicationDropdown})
    }

    changeHover(type){
        switch (type) {
            case "product":
                this.setState({webinars:"",ongoingresearch:"", education:"",products:"active",evidence:"", publications:"", publishedPapers:"", caseStudies:"", articles:"", photobiomodulation:"", blogs:"",advisoryboard:"", resources:"", about:"",support:""});
                return;
            case "blogs":
                this.setState({webinars:"",ongoingresearch:"", education:"",products:"",evidence:"", publications:"", publishedPapers:"", caseStudies:"", articles:"", photobiomodulation:"", advisoryboard:"", blogs:"active", resources:"", about:"",support:""});
                return;
            case "resources":
                this.setState({ webinars:"",ongoingresearch:"", education:"",products:"",evidence:"", publications:"", blogs:"", publishedPapers:"", caseStudies:"", articles:"", advisoryboard:"", photobiomodulation:"", resources:"active", about:"",support:""});
                return;
            case "publishedPapers":
                this.setState({ webinars:"", education:"",products:"",ongoingresearch:"",evidence:"active", publications:"active", blogs:"", publishedPapers:"active", caseStudies:"", articles:"", advisoryboard:"", photobiomodulation:"", resources:"", about:"",support:""});
                return;
            case "caseStudies":
                this.setState({ webinars:"", education:"",products:"",evidence:"active", publications:"active",ongoingresearch:"",blogs:"", publishedPapers:"", caseStudies:"active", articles:"", advisoryboard:"", photobiomodulation:"", resources:"", about:"",support:""});
                return;
            case "webinars":
                this.setState({webinars:"active", education:"active",products:"",evidence:"",ongoingresearch:"", publications:"",blogs:"", publishedPapers:"", caseStudies:"", articles:"", advisoryboard:"", photobiomodulation:"", resources:"", about:"",support:""});
                return;
            case "articles":
                this.setState({webinars:"", education:"",products:"",evidence:"active", publications:"active",blogs:"",ongoingresearch:"", publishedPapers:"", caseStudies:"", articles:"active", advisoryboard:"", photobiomodulation:"", resources:"", about:"",support:""});
                return;
            case "photobiomodulation":
                this.setState({webinars:"", education:"",products:"",evidence:"active", publications:"",ongoingresearch:"",blogs:"", publishedPapers:"", caseStudies:"", articles:"", advisoryboard:"", photobiomodulation:"active", resources:"", about:"",support:""});
                return;
            case "advisoryboard":
                this.setState({ webinars:"", education:"",products:"",evidence:"active",ongoingresearch:"", publications:"",blogs:"", publishedPapers:"", caseStudies:"", articles:"", advisoryboard:"active", photobiomodulation:"", resources:"", about:"",support:""});
                return;
            case "ongoingresearch":
                this.setState({ webinars:"", education:"",products:"",evidence:"active",ongoingresearch:"active", publications:"",blogs:"", publishedPapers:"", caseStudies:"", articles:"", advisoryboard:"", photobiomodulation:"", resources:"", about:"",support:""});
                return;
            case "about":
                this.setState({webinars:"", education:"",products:"",ongoingresearch:"",evidence:"", publications:"", blogs:"",publishedPapers:"", caseStudies:"", articles:"", advisoryboard:"", photobiomodulation:"", resources:"", about:"active",support:""});
                return;
            case "support":
                this.setState({webinars:"", education:"",ongoingresearch:"",products:"",evidence:"", publications:"",blogs:"", publishedPapers:"", caseStudies:"", articles:"", advisoryboard:"", photobiomodulation:"", resources:"", about:"",support:"active"});
                return;
            default:
                this.setState({webinars:"",ongoingresearch:"", education:"",products:"",evidence:"", publications:"",blogs:"", publishedPapers:"", caseStudies:"", articles:"", advisoryboard:"", photobiomodulation:"", resources:"", about:"",support:""});
        }

    }
    render(){
        let {products,about,evidence,publications,wdropdown,education, publishedPapers,ongoingresearch,blogs,resources,support,advisoryboard,webinars, caseStudies, articles, photobiomodulation, dropdown,publicationDropdown} = this.state;
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
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
                </Head>

                    <section className="new-header">
                        <section className="first-section">
                            <div className="first-row">
                                <div className="container custom-container">
                                    <div className="row HEADERS">
                                        <div className="col-sm-7 col-7 flex-end-row  ">
                                            <Link href="/"><a><img src="/static/images/logos1.png"/></a></Link>
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
                                            <li><span className={products}><Link href="/products"><a>PRODUCTS</a></Link></span></li>
                                            <li><span className={evidence}><a onClick={()=>this.evidenceDropdown()}>Evidence</a></span>
                                                {dropdown && <ul className="childlist" onMouseLeave={()=>this.evidenceDropdown()}>
                                                        <div className="triangle-up"/>
                                                    <li onClick={()=>this.publicationDropdownFunc()} ><span className={publications}><a>Publications</a></span>
                                                        {publicationDropdown&&<ul>
                                                            <li><span className={publishedPapers}><Link href="/published-papers"><a>Published Papers</a></Link></span></li>
                                                            <li><span className={caseStudies}><Link href="/casestudies" ><a >Case Studies</a></Link></span></li>
                                                            <li><span className={articles}><Link href="/articles"><a>Articles</a></Link></span></li>
                                                            </ul>}
                                                        </li>
                                                    <li><span className={photobiomodulation}><Link href="/photobiomodulation"><a>Photobiomodulation</a></Link></span></li>
                                                        <li><span className={advisoryboard}><Link href="/advisory-board-members"><a>Advisory Board</a></Link></span></li>
                                                        <li><span className={ongoingresearch}><Link href="/ongoingresearch"><a>On Going Research</a></Link></span></li>
                                                    </ul>}
                                            </li>
                                            <li><span className={blogs}><Link href="/blogs"><a>Blog</a></Link></span></li>
                                            <li>
                                                <span className={education}><a onClick={()=>this.educationDropdown()}>Education</a></span>
                                                {wdropdown && <ul className="childlist" onMouseLeave={()=>this.educationDropdown()}>
                                                    <div className="triangle-up"/>
                                                    <li><span className={webinars}><Link href="/webinars"><a>Webinars</a></Link></span></li>
                                                </ul>}
                                            </li>
                                            <li><span className={resources}><Link href="/resources"><a>RESOURCES</a></Link></span></li>
                                            <li><span className={about}><Link href="/about-us"><a>About</a></Link></span></li>
                                            <li><span className={support}><Link href="/support"><a>Support</a></Link></span></li>
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
