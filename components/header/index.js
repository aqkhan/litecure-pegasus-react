import React, {Component} from "react";
import Link from 'next/link';
import Head from "next/head";
import $ from "jquery";
class Header extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        if ($(window).scrollTop() >= 86.5) {
            $('.second-row').addClass('fixed-header');
        }
        else {
            $('.second-row').removeClass('fixed-header');
        }
    }

    state = {
        products: "",
        ptc: "",
        empowerDsDeliverySystem: "",
        resources: "",
        about: "",
        support: "",
        employees: "",
        blogs: "",
        education: "",
        evidence: "",
        publications: "",
        caseStudies: "",
        articles: "",
        publishedPapers: "",
        photobiomodulation: "",
        advisoryboard: "",
        webinars: "",
        ongoingresearch: "",
        productDropDown: false,
        dropdown: false,
        wdropdown: false,
        publicationDropdown: false,
        empowerDsDeliverySystemDropDown:false,
        ptcDropDown:false,
        showHeaderList:'hide-header',

    };

    componentWillMount() {
        console.log("header", this.props.type)
        this.changeHover(this.props.type)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("header", this.props.type)
        this.changeHover(this.props.type)
    }


    publicationDropdownFunc() {
        let {publicationDropdown} = this.state
        this.setState({publicationDropdown: !publicationDropdown})
    }
    responsiveHeader=()=>{
        if (this.state.showHeaderList === 'hide-header'){
            this.setState({showHeaderList:'show-header'})
        }
        else if (this.state.showHeaderList === 'show-header'){
            this.setState({showHeaderList:'hide-header'})
        }
        console.log('function-hit');
    };
    changeHover(type) {
        switch (type) {
            case "product":
                this.setState({
                    webinars: "",
                    ongoingresearch: "",
                    education: "",
                    products: "active",
                    ptc: "",
                    empowerDsDeliverySystem: "",
                    evidence: "",
                    publications: "",
                    publishedPapers: "",
                    caseStudies: "",
                    articles: "",
                    photobiomodulation: "",
                    blogs: "",
                    advisoryboard: "",
                    resources: "",
                    about: "",
                    support: "",
                    employees: ""
                });
                return;
            case "ptc":
                this.setState({
                    webinars: "",
                    ongoingresearch: "",
                    education: "",
                    products: "active",
                    ptc: "active",
                    empowerDsDeliverySystem: "",
                    evidence: "",
                    publications: "",
                    publishedPapers: "",
                    caseStudies: "",
                    articles: "",
                    photobiomodulation: "",
                    blogs: "",
                    advisoryboard: "",
                    resources: "",
                    about: "",
                    support: "",
                    employees: ""
                });
                return;
            case "empower-ds-delivery-system":
                this.setState({
                    webinars: "",
                    ongoingresearch: "",
                    education: "",
                    products: "active",
                    ptc: "",
                    empowerDsDeliverySystem: "active",
                    evidence: "",
                    publications: "",
                    publishedPapers: "",
                    caseStudies: "",
                    articles: "",
                    photobiomodulation: "",
                    blogs: "",
                    advisoryboard: "",
                    resources: "",
                    about: "",
                    support: "",
                    employees: ""
                });
                return;
            case "blogs":
                this.setState({
                    webinars: "",
                    ongoingresearch: "",
                    education: "",
                    products: "",
                    ptc: "",
                    empowerDsDeliverySystem: "",
                    evidence: "",
                    publications: "",
                    publishedPapers: "",
                    caseStudies: "",
                    articles: "",
                    photobiomodulation: "",
                    advisoryboard: "",
                    blogs: "active",
                    resources: "",
                    about: "",
                    support: "",
                    employees: ""
                });
                return;
            case "resources":
                this.setState({
                    webinars: "",
                    ongoingresearch: "",
                    education: "",
                    products: "",
                    ptc: "",
                    empowerDsDeliverySystem: "",
                    evidence: "",
                    publications: "",
                    blogs: "",
                    publishedPapers: "",
                    caseStudies: "",
                    articles: "",
                    advisoryboard: "",
                    photobiomodulation: "",
                    resources: "active",
                    about: "",
                    support: "",
                    employees: ""
                });
                return;
            case "publishedPapers":
                this.setState({
                    webinars: "",
                    education: "",
                    products: "",
                    ptc: "",
                    empowerDsDeliverySystem: "",
                    ongoingresearch: "",
                    evidence: "active",
                    publications: "active",
                    blogs: "",
                    publishedPapers: "active",
                    caseStudies: "",
                    articles: "",
                    advisoryboard: "",
                    photobiomodulation: "",
                    resources: "",
                    about: "",
                    support: "",
                    employees: ""
                });
                return;
            case "caseStudies":
                this.setState({
                    webinars: "",
                    education: "",
                    products: "",
                    ptc: "",
                    empowerDsDeliverySystem: "",
                    evidence: "active",
                    publications: "active",
                    ongoingresearch: "",
                    blogs: "",
                    publishedPapers: "",
                    caseStudies: "active",
                    articles: "",
                    advisoryboard: "",
                    photobiomodulation: "",
                    resources: "",
                    about: "",
                    support: "",
                    employees: ""
                });
                return;
            case "webinars":
                this.setState({
                    webinars: "active",
                    education: "active",
                    products: "",
                    ptc: "",
                    empowerDsDeliverySystem: "",
                    evidence: "",
                    ongoingresearch: "",
                    publications: "",
                    blogs: "",
                    publishedPapers: "",
                    caseStudies: "",
                    articles: "",
                    advisoryboard: "",
                    photobiomodulation: "",
                    resources: "",
                    about: "",
                    support: "",
                    employees: ""
                });
                return;
            case "articles":
                this.setState({
                    webinars: "",
                    education: "",
                    products: "",
                    ptc: "",
                    empowerDsDeliverySystem: "",
                    evidence: "active",
                    publications: "active",
                    blogs: "",
                    ongoingresearch: "",
                    publishedPapers: "",
                    caseStudies: "",
                    articles: "active",
                    advisoryboard: "",
                    photobiomodulation: "",
                    resources: "",
                    about: "",
                    support: "",
                    employees: ""
                });
                return;
            case "photobiomodulation":
                this.setState({
                    webinars: "",
                    education: "",
                    products: "",
                    ptc: "",
                    empowerDsDeliverySystem: "",
                    evidence: "active",
                    publications: "",
                    ongoingresearch: "",
                    blogs: "",
                    publishedPapers: "",
                    caseStudies: "",
                    articles: "",
                    advisoryboard: "",
                    photobiomodulation: "active",
                    resources: "",
                    about: "",
                    support: "",
                    employees: ""
                });
                return;
            case "advisoryboard":
                this.setState({
                    webinars: "",
                    education: "",
                    products: "",
                    ptc: "",
                    empowerDsDeliverySystem: "",
                    evidence: "active",
                    ongoingresearch: "",
                    publications: "",
                    blogs: "",
                    publishedPapers: "",
                    caseStudies: "",
                    articles: "",
                    advisoryboard: "active",
                    photobiomodulation: "",
                    resources: "",
                    about: "",
                    support: "",
                    employees: ""
                });
                return;
            case "ongoingresearch":
                this.setState({
                    webinars: "",
                    education: "",
                    products: "",
                    ptc: "",
                    empowerDsDeliverySystem: "",
                    evidence: "active",
                    ongoingresearch: "active",
                    publications: "",
                    blogs: "",
                    publishedPapers: "",
                    caseStudies: "",
                    articles: "",
                    advisoryboard: "",
                    photobiomodulation: "",
                    resources: "",
                    about: "",
                    support: "",
                    employees: ""
                });
                return;
            case "about":
                this.setState({
                    webinars: "",
                    education: "",
                    products: "",
                    ptc: "",
                    empowerDsDeliverySystem: "",
                    ongoingresearch: "",
                    evidence: "",
                    publications: "",
                    blogs: "",
                    publishedPapers: "",
                    caseStudies: "",
                    articles: "",
                    advisoryboard: "",
                    photobiomodulation: "",
                    resources: "",
                    about: "active",
                    support: "",
                    employees: ""
                });
                return;
            case "support":
                this.setState({
                    webinars: "",
                    education: "",
                    ongoingresearch: "",
                    products: "",
                    ptc: "",
                    empowerDsDeliverySystem: "",
                    evidence: "",
                    publications: "",
                    blogs: "",
                    publishedPapers: "",
                    caseStudies: "",
                    articles: "",
                    advisoryboard: "",
                    photobiomodulation: "",
                    resources: "",
                    about: "",
                    support: "active",
                    employees: ""
                });
                return;
            case "employees":
                this.setState({
                    webinars: "",
                    education: "",
                    ongoingresearch: "",
                    products: "",
                    ptc: "",
                    empowerDsDeliverySystem: "",
                    evidence: "",
                    publications: "",
                    blogs: "",
                    publishedPapers: "",
                    caseStudies: "",
                    articles: "",
                    advisoryboard: "",
                    photobiomodulation: "",
                    resources: "",
                    about: "",
                    support: "",
                    employees: "active"
                });
                return;
            default:
                this.setState({
                    webinars: "",
                    ongoingresearch: "",
                    education: "",
                    products: "",
                    ptc: "",
                    empowerDsDeliverySystem: "",
                    evidence: "",
                    publications: "",
                    blogs: "",
                    publishedPapers: "",
                    caseStudies: "",
                    articles: "",
                    advisoryboard: "",
                    photobiomodulation: "",
                    resources: "",
                    about: "",
                    support: "",
                    employees: ""
                });
        }

    }

    render() {
        let {products, ptc, ptcDropDown, empowerDsDeliverySystem, empowerDsDeliverySystemDropDown, about, evidence, publications, wdropdown, education, publishedPapers, ongoingresearch, blogs, resources, support, employees, advisoryboard, webinars, caseStudies, articles, photobiomodulation, productDropDown, dropdown, publicationDropdown} = this.state;
        return (
            <div>
                <Head>
                    <title>Pegasus</title>
                    <meta http-equiv="x-ua-compatible" content="ie=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link rel="stylesheet"
                          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <link rel="stylesheet" href="/static/css/bootstrap.css"/>
                    <link rel="stylesheet" href="/static/css/responsive.css"/>
                    <link href="https://fonts.googleapis.com/css?family=Roboto:300" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto:300" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
                    <link rel="stylesheet"
                          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"/>
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
                                    <div className="menu-button  click " onClick={()=>this.responsiveHeader()} >
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                            <div className={"container showhide custom-container "  +  this.state.showHeaderList}>
                                <div className="row  justify-center align-center">
                                    <ul className="responsive-column navbar flex-row nav-color">
                                        <li onMouseLeave={() => this.setState({productDropDown: false})}><span
                                            className={products} ><Link href="/products"><a onMouseEnter={() => this.setState({productDropDown: true})}>PRODUCTS</a></Link></span>
                                             <ul className="childlist childlist-first">
                                                {/*<div className="triangle-up"/>*/}
                                                {/*<li ><span><img src="https://rs-cms.s3.amazonaws.com/pics/4HWnKn12zXWvEs6-.png"/></span>*/}
                                                {/*<span className={empowerDsDeliverySystem}><Link href={"/product/empower-ds-delivery-system"}><a>EMPOWER DS DELIVERY SYSTEM</a></Link></span></li>*/}
                                                {/*<li ><span><img src="https://rs-cms.s3.amazonaws.com/pics/nwQkU1NKyZByRecL.png"/></span>*/}
                                                {/*<span className={ptc}><Link href={"/product/ptc"}><a>PEGASUS THERAPY COMPACT</a></Link></span></li>*/}
                                                <li>
                                                    {
                                                        productDropDown &&
                                                        <div className="header-list-div-1">
                                                            {/*<div className="close-btn-div">*/}
                                                                {/*<i class="fa fa-times"></i>*/}
                                                            {/*</div>*/}
                                                        <div className="header-list-main-div-1" onMouseLeave={() => this.setState({productDropDown: false})}>
                                                            <div className="inside-list">

                                                                <ul className="header-main-ul">

                                                                    <li><span className={empowerDsDeliverySystem} onMouseEnter={()=>this.setState({empowerDsDeliverySystemDropDown:true})} onMouseLeave={()=>this.setState({empowerDsDeliverySystemDropDown:false})}><Link href={"/product/empower-ds-delivery-system"}><a>EMPOWER DS DELIVERY SYSTEM</a></Link></span></li>
                                                                    <li><span className={ptc} onMouseEnter={()=>this.setState({ptcDropDown:true})} onMouseLeave={()=>this.setState({ptcDropDown:false})}><Link href={"/product/ptc"}><a>PEGASUS THERAPY COMPACT</a></Link></span></li>
                                                                </ul>
                                                            </div>
                                                            {
                                                                empowerDsDeliverySystemDropDown&&
                                                                <div className="header-line-div">
                                                                <div className="header-list-hr"/>
                                                                <div className="inside-list-two-1">
                                                                    <div className="img-div-h-list">
                                                                        <img src="/static/images/2018-09-12.png"/>
                                                                    </div>
                                                                    <div className="product-detail-div">
                                                                        <p>Empower DS provides the versatility you need to treat your toughest cases. Four application- specific treatment heads, the patented laser-contact ball and the toughest fiber available make Pegasus therapy lasers clinically practical and ruggedly durable.</p></div>

                                                                </div>
                                                            </div>
                                                            }{ptcDropDown&&<div className="header-line-div">
                                                                <div className="header-list-hr"/>
                                                                <div className="inside-list-two-1">
                                                                    <div className="img-div-h-list">
                                                                        <img src="/static/images/ptc-400px.png"/>
                                                                    </div>
                                                                    <div className="product-detail-div">
                                                                        <p>Powerful, safe, and easy-to-use, this doctor-prescribed modality effectively treats a wide variety of conditions including pre-surgical, post-surgical, acute, and chronic disease states.</p></div>

                                                                </div>
                                                            </div>
                                                        }
                                                        </div>
                                                    </div>}
                                                </li>
                                            </ul>
                                        </li>
                                        <li onMouseLeave={() => this.setState({dropdown: false})}><span
                                            className={evidence} onMouseEnter={() => this.setState({dropdown: true})}><a>Evidence</a></span>
                                            {dropdown && <ul className="childlist">
                                                {/*<div className="triangle-up"/>*/}
                                                {/*<li onClick={() => this.publicationDropdownFunc()}><span*/}
                                                    {/*className={publications}><a>Publications</a></span>*/}
                                                    {/*{publicationDropdown && <ul>*/}
                                                        {/*<li><span className={publishedPapers}><Link*/}
                                                            {/*href="/published-papers"><a>Published Papers</a></Link></span>*/}
                                                        {/*</li>*/}
                                                        {/*<li><span className={caseStudies}><Link href="/casestudies"><a >Case Studies</a></Link></span>*/}
                                                        {/*</li>*/}
                                                        {/*<li><span className={articles}><Link href="/articles"><a>Articles</a></Link></span>*/}
                                                        {/*</li>*/}

                                                    {/*</ul>}*/}
                                                {/*</li>*/}
                                                {/*<li><span className={photobiomodulation}><Link*/}
                                                    {/*href="/photobiomodulation"><a>Photobiomodulation</a></Link></span>*/}
                                                {/*</li>*/}
                                                {/*<li><span className={advisoryboard}><Link*/}
                                                    {/*href="/advisory-board-members"><a>Advisory Board</a></Link></span>*/}
                                                {/*</li>*/}
                                                {/*<li><span className={ongoingresearch}><Link href="/ongoingresearch"><a>On Going Research</a></Link></span>*/}
                                                {/*</li>*/}
                                                     <li><div className="header-list-div-2">
                                                         {/*<div className="close-btn-div">*/}
                                                             {/*<i class="fa fa-times"></i>*/}
                                                         {/*</div>*/}
                                                     <div className="header-list-main-div-2" onMouseLeave={() => this.setState({dropdown: false})}>

                                                     <div className="inside-list">
                                                     <ul className="header-main-ul">

                                                         <li onClick={() => this.publicationDropdownFunc()}><span className={publications}><a>PUBLICATIONS</a></span></li>
                                                         <li><span className={photobiomodulation}><Link href="/photobiomodulation"><a>PHOTOBIOMODULATION</a></Link></span></li>
                                                         <li><span className={advisoryboard}><Link href="/advisory-board-members"><a>ADVISORY BOARD</a></Link></span></li>
                                                         <li><span className={ongoingresearch}><Link href="/ongoingresearch"><a>On GOING SEARCH</a></Link></span></li>
                                                 </ul>
                                                 </div>
                                                         {publicationDropdown &&
                                                         <div className="header-line-div">
                                                             <div className="header-list-hr"/>
                                                             <div className="inside-list-two">
                                                                 <ul>
                                                                     <li><span className={publishedPapers}><Link href="/published-papers"><a>PUBLISHED PAPERS</a></Link></span></li>
                                                                     <li><span className={caseStudies}><Link href="/casestudies"><a>CASE STUDIES</a></Link></span></li>
                                                                     <li><span className={articles}><Link href="/articles"><a>ARTICLES</a></Link></span></li>
                                                                 </ul>
                                                             </div>
                                                         </div>}
                                                 </div>
                                                 </div></li>
                                            </ul>}
                                        </li>
                                        <li><span className={blogs}><Link href="/blogs"><a>Blog</a></Link></span></li>
                                        <li onMouseLeave={() => this.setState({wdropdown: false})}>
                                            <span className={education} onMouseEnter={() => this.setState({wdropdown: true})}><a >Education</a></span>
                                            {
                                                wdropdown &&
                                                <ul className="childlist">
                                                {/*<div className="triangle-up"/>*/}

                                                {/*<li><span className={webinars}><Link href="/webinars"><a>Webinars</a></Link></span></li>*/}
                                                <li>
                                                    <div className="header-list-div-3">
                                                        {/*<div className="close-btn-div">*/}
                                                            {/*<i class="fa fa-times"></i>*/}
                                                        {/*</div>*/}
                                                        <div className="header-list-main-div-3" onMouseLeave={() => this.setState({wdropdown: false})}>

                                                            <div className="inside-list-3">

                                                                <ul className="header-main-ul">

                                                                    <li><span className={webinars}><Link href="/webinars"><a>Webinar</a></Link></span></li>

                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>}
                                        </li>
                                        <li><span className={resources}><Link href="/resources"><a>RESOURCES</a></Link></span>
                                        </li>
                                        <li><span className={about}><Link href="/about-us"><a>About</a></Link></span>
                                        </li>
                                        <li><span className={support}><Link href="/support"><a>Support</a></Link></span>
                                        </li>
                                        <li><span className={employees}><Link href="/employees"><a>Employees</a></Link></span>
                                        </li>
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
