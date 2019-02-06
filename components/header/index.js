import Head from "next/head";
import Link from 'next/link';
import React, {Component} from "react";
import axios from 'axios';
import {API_PATH} from '../apiconfig'

class Header extends Component {

    state = {
        products: "",
        ptc: "",
        scrollClass: "",
        empowerDsDeliverySystem: "",
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
        stories: "",
        clinicalVeterinarian: "",
        athlete: "",
        horseRider: "",
        productDropDown: false,
        dropdown: false,
        wdropdown: false,
        publicationDropdown: false,
        empowerDsDeliverySystemDropDown: true,
        ptcDropDown: false,
        storiesDropDown: false,
        showHeaderList: 'hide-header',

    };

    componentWillMount() {
        let {navigations, dispatch} = this.props;
        if (navigations) {
        }
        else {
            axios.get(API_PATH +'navigations')
                .then(res => {
                    axios.get(API_PATH +'navigations/'+res.data.navigations[0].slug)
                        .then(response => {
                            dispatch({
                                type: 'SET_DATA',
                                payLoad: {
                                    navigations: res.data.navigations && res.data.navigations,
                                    navigationChilds: response.data.navigationChilds,
                                    image: response.data.navigationChilds[response.data.navigationChilds.length - 1].headerImage && response.data.navigationChilds[response.data.navigationChilds.length - 1].headerImage.url,
                                    leadText: response.data.navigationChilds[response.data.navigationChilds.length - 1].leadText
                                }
                            })
                        })
                        .catch(error => {
                            console.log("error",error);
                        })
                })
                .catch(error => {
                    console.log("error1", error)
                })
        }
    }

    componentDidMount() {
        this.changeHover(this.props.type);
        if (typeof window !== "undefined") {
            window.addEventListener('scroll', this.handleScroll);
        }
    }

    handleScroll = (event) => {
        let scrollTop = event.target.scrollingElement.scrollTop;
        // console.log("event", event.target.scrollingElement.scrollTop);
        // console.log("window", window.scrollY);
        if (scrollTop >= 86.5) {
            this.setState({scrollClass: 'fixed-header'})
        } else {
            this.setState({scrollClass: ''})

        }
    };

    // componentWillMount() {
    //        this.changeHover(this.props.type)
    // }
    //
    // componentWillReceiveProps(nextProps, nextContext) {
    //     this.changeHover(this.props.type)
    // }


    publicationDropdownFunc() {
        let {publicationDropdown} = this.state
        this.setState({publicationDropdown: !publicationDropdown})
    }

    responsiveHeader = () => {
        if (this.state.showHeaderList === 'hide-header') {
            this.setState({showHeaderList: 'show-header'})
        } else if (this.state.showHeaderList === 'show-header') {
            this.setState({showHeaderList: 'hide-header'})
        }
    };

    changeHover(type) {
        switch (type) {
            case "product":
                this.setState({
                    webinars: "",
                    education: "",
                    products: "active",
                    allProducts: "active",
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
                    about: "",
                    support: "",
                    employees: "",
                    stories: "",
                    clinicalVeterinarian: "",
                    athlete: "",
                    horseRider: ""
                });
                return;
            case "ptc":
                this.setState({
                    webinars: "",
                    education: "",
                    products: "active",
                    allProducts: "",
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
                    about: "",
                    support: "",
                    employees: "",
                    stories: "",
                    clinicalVeterinarian: "",
                    athlete: "",
                    horseRider: ""
                });
                return;
            case "empower-ds-delivery-system":
                this.setState({
                    webinars: "",
                    education: "",
                    products: "active",
                    allProducts: "",
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
                    about: "",
                    support: "",
                    employees: "",
                    stories: "",
                    clinicalVeterinarian: "",
                    athlete: "",
                    horseRider: ""
                });
                return;
            case "blogs":
                this.setState({
                    webinars: "",
                    education: "",
                    products: "",
                    allProducts: "",
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
                    about: "",
                    support: "",
                    employees: "",
                    stories: "",
                    clinicalVeterinarian: "",
                    athlete: "",
                    horseRider: ""
                });
                return;
            case "publishedPapers":
                this.setState({
                    webinars: "",
                    education: "",
                    products: "",
                    allProducts: "",
                    ptc: "",
                    empowerDsDeliverySystem: "",
                    evidence: "active",
                    publications: "active",
                    blogs: "",
                    publishedPapers: "active",
                    caseStudies: "",
                    articles: "",
                    advisoryboard: "",
                    photobiomodulation: "",
                    about: "",
                    support: "",
                    employees: "",
                    stories: "",
                    clinicalVeterinarian: "",
                    athlete: "",
                    horseRider: ""
                });
                return;
            case "caseStudies":
                this.setState({
                    webinars: "",
                    education: "",
                    products: "",
                    allProducts: "",
                    ptc: "",
                    empowerDsDeliverySystem: "",
                    evidence: "active",
                    publications: "active",
                    blogs: "",
                    publishedPapers: "",
                    caseStudies: "active",
                    articles: "",
                    advisoryboard: "",
                    photobiomodulation: "",
                    about: "",
                    support: "",
                    employees: "",
                    stories: "",
                    clinicalVeterinarian: "",
                    athlete: "",
                    horseRider: ""
                });
                return;
            case "webinars":
                this.setState({
                    webinars: "active",
                    education: "active",
                    products: "",
                    allProducts: "",
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
                    about: "",
                    support: "",
                    employees: "",
                    stories: "",
                    clinicalVeterinarian: "",
                    athlete: "",
                    horseRider: ""
                });
                return;
            case "articles":
                this.setState({
                    webinars: "",
                    education: "",
                    products: "",
                    allProducts: "",
                    ptc: "",
                    empowerDsDeliverySystem: "",
                    evidence: "active",
                    publications: "active",
                    blogs: "",
                    publishedPapers: "",
                    caseStudies: "",
                    articles: "active",
                    advisoryboard: "",
                    photobiomodulation: "",
                    about: "",
                    support: "",
                    employees: "",
                    stories: "",
                    clinicalVeterinarian: "",
                    athlete: "",
                    horseRider: ""
                });
                return;
            case "photobiomodulation":
                this.setState({
                    webinars: "",
                    education: "",
                    products: "",
                    allProducts: "",
                    ptc: "",
                    empowerDsDeliverySystem: "",
                    evidence: "active",
                    publications: "",
                    blogs: "",
                    publishedPapers: "",
                    caseStudies: "",
                    articles: "",
                    advisoryboard: "",
                    photobiomodulation: "active",
                    about: "",
                    support: "",
                    employees: "",
                    stories: "",
                    clinicalVeterinarian: "",
                    athlete: "",
                    horseRider: ""
                });
                return;
            case "advisoryboard":
                this.setState({
                    webinars: "",
                    education: "",
                    products: "",
                    allProducts: "",
                    ptc: "",
                    empowerDsDeliverySystem: "",
                    evidence: "active",
                    publications: "",
                    blogs: "",
                    publishedPapers: "",
                    caseStudies: "",
                    articles: "",
                    advisoryboard: "active",
                    photobiomodulation: "",
                    about: "",
                    support: "",
                    employees: "",
                    stories: "",
                    clinicalVeterinarian: "",
                    athlete: "",
                    horseRider: ""
                });
                return;
            case "about":
                this.setState({
                    webinars: "",
                    education: "",
                    products: "",
                    allProducts: "",
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
                    about: "active",
                    support: "",
                    employees: "",
                    stories: "",
                    clinicalVeterinarian: "",
                    athlete: "",
                    horseRider: ""
                });
                return;
            case "support":
                this.setState({
                    webinars: "",
                    education: "",
                    products: "",
                    allProducts: "",
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
                    about: "",
                    support: "active",
                    employees: "",
                    stories: "",
                    clinicalVeterinarian: "",
                    athlete: "",
                    horseRider: ""
                });
                return;
            case "employees":
                this.setState({
                    webinars: "",
                    education: "",
                    products: "",
                    allProducts: "",
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
                    about: "",
                    support: "",
                    employees: "active",
                    stories: "",
                    clinicalVeterinarian: "",
                    athlete: "",
                    horseRider: ""
                });
                return;
            case "clinicalVeterinarian":
                this.setState({
                    webinars: "",
                    education: "",
                    products: "",
                    allProducts: "",
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
                    about: "",
                    support: "",
                    employees: "",
                    stories: "active",
                    clinicalVeterinarian: "active",
                    athlete: "",
                    horseRider: ""
                });
                return;
            case "athlete":
                this.setState({
                    webinars: "",
                    education: "",
                    products: "",
                    allProducts: "",
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
                    about: "",
                    support: "",
                    employees: "",
                    stories: "active",
                    clinicalVeterinarian: "",
                    athlete: "active",
                    horseRider: ""
                });
                return;
            case "horseRider":
                this.setState({
                    webinars: "",
                    education: "",
                    products: "",
                    allProducts: "",
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
                    about: "",
                    support: "",
                    employees: "",
                    stories: "active",
                    clinicalVeterinarian: "",
                    athlete: "",
                    horseRider: "active"
                });
                return;
            default:
                this.setState({
                    webinars: "",
                    education: "",
                    products: "",
                    allProducts: "",
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
                    about: "",
                    support: "",
                    employees: "",
                    stories: "",
                    clinicalVeterinarian: "",
                    athlete: "",
                    horseRider: ""
                });
        }

    }

    toggleHandler = () => {
        this.props.dispatch({
            type: 'toggle'
        })
    };
    toggleHandlerr = () => {
        this.props.dispatch({
            type: 'togglef'
        })
    };

    changeImageAndText =(imageUrl, leadText)=>{
      this.props.dispatch({
          type:'imageAndHeader',
          payLoad: {
              image:imageUrl,
              leadText: leadText
          }
      })
    };


    render() {
        let {
            products, allProducts, scrollClass, ptc, ptcDropDown, empowerDsDeliverySystem, empowerDsDeliverySystemDropDown, about, evidence, publications, publishedPapers, blogs, support, employees, advisoryboard, webinars, caseStudies, articles, photobiomodulation, productDropDown, dropdown, publicationDropdown, stories,
            clinicalVeterinarian, storiesDropDown, athlete, horseRider
        } = this.state;
        let {navigations, toggle, navigationChilds, image, leadText} = this.props;
        let mainNavigation = [];
        let mobileMainNavigation= [];
        if (navigations) {
            navigations.forEach((item, index) => {
                // if(item.template==='one'){
                mainNavigation = [...mainNavigation,
                    <li onMouseLeave={() => this.toggleHandlerr()} key={index}><span
                        className={products}>{item.linked ?
                        <Link to={item.linkTo}><a>{item.navigationName}</a></Link> : <a
                            onClick={() => this.toggleHandler()}>{item.navigationName}</a>}</span>
                        <ul className="childlist childlist-first  ">
                            <li>
                                {
                                    toggle &&
                                    <div className="header-list-div-1">
                                        <div className="header-list-main-div-1"
                                             onMouseLeave={() => this.setState({productDropDown: false})}>
                                            <div className="inside-list">
                                                <ul className="header-main-ul">
                                                    if(navigationChilds){
                                                    navigationChilds.map((items,indexx)=>{
                                                        if(items.headerImage && items.leadText){
                                                            return(
                                                                <li key={indexx}><span
                                                                                       onMouseEnter={() => this.changeImageAndText(items.headerImage && items.headerImage.url, items.leadText)}>{items.linked?<Link
                                                                    href={items.linkTo}><a>{items.navigationName}</a></Link>:<a>{items.navigationName}</a>}</span>
                                                                </li>
                                                            )
                                                        }
                                                        else {
                                                            return <li key={indexx}><span >{items.linked?<Link
                                                                href={items.linkTo}><a>{items.navigationName}</a></Link>:<a>{items.navigationName}</a>}</span>
                                                            </li>
                                                        }
                                                    })
                                                }
                                                </ul>
                                            </div>
                                            {
                                                <div className="header-line-div">
                                                    <div className="header-list-hr"/>
                                                    <div className="inside-list-two-1">
                                                        <div className="img-div-h-list">
                                                            <img
                                                                src={image}/>
                                                        </div>
                                                        <div className="product-detail-div">
                                                            <p>{leadText}</p></div>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>}
                            </li>
                        </ul>
                    </li>]
                // }
                mobileMainNavigation =[...mobileMainNavigation,
                    <li><span
                        className={products}><a
                        onClick={() => this.toggleHandler()}>{item.navigationName}</a></span>
                        {toggle &&
                        <ul className="childlist childlist-first first-mob-list ">
                            <li>
                                <div className="header-list-div-1">
                                    <div className="header-list-main-div-1">
                                        <div className="inside-list ">
                                            <ul className="header-main-ul ">
                                                if(navigationChilds){
                                                navigationChilds.map((items,indexx)=>{
                                                    if(items.headerImage && items.leadText){
                                                        return(
                                                            <li key={indexx}><span
                                                                onMouseEnter={() => this.changeImageAndText(items.headerImage && items.headerImage.url, items.leadText)}>{items.linked?<Link
                                                                href={items.linkTo}><a>{items.navigationName}</a></Link>:<a>{items.navigationName}</a>}</span>
                                                            </li>
                                                        )
                                                    }
                                                    else {
                                                        return <li key={indexx}><span >{items.linked?<Link
                                                            href={items.linkTo}><a>{items.navigationName}</a></Link>:<a>{items.navigationName}</a>}</span>
                                                        </li>
                                                    }
                                                })
                                            }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>}
                    </li>
                ]
            })
        }
        return (
            <div>
                <Head>
                    <title>Pegasus</title>
                    <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
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
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"/>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"/>
                </Head>

                <section className="new-header">
                    <section className="first-section">
                        <div className="first-row">
                            <div className="container custom-container">
                                <div className="row HEADERS">
                                    <div className="col-sm-7 col-7 flex-end-row  ">
                                        <Link href="/"><a><img src="/static/images/logos1.png"/></a></Link>
                                    </div>
                                    <div className="col-sm-5 col-5">
                                        <div className="flex-end-row ">
                                            <input type="text" name="search" class="search-engine"/>
                                            <img src="/static/images/magnifier.png" width="18px" height="18px"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"second-row " + scrollClass}>
                            <div className="for-responsive-only">
                                <div className="custom-container">
                                    <div className="menu-button  click " onClick={() => this.responsiveHeader()}>
                                        <div/>
                                        <div/>
                                        <div/>
                                    </div>
                                </div>
                            </div>
                            <div className={"container showhide custom-container " + this.state.showHeaderList}>
                                <div className="row  justify-center align-center">
                                    <ul className="responsive-column navbar flex-row nav-color desktop-header ">
                                            {mainNavigation && mainNavigation.length >0 && mainNavigation}
                                        <li onMouseLeave={() => this.setState({dropdown: false})}><span
                                            className={evidence}
                                            onClick={() => this.setState({dropdown: !dropdown})}><a>Evidence</a></span>
                                            {dropdown && <ul className="childlist">
                                                <li>
                                                    <div className="header-list-div-2">
                                                        <div className="header-list-main-div-2"
                                                             onMouseLeave={() => this.setState({dropdown: false})}>

                                                            <div className="inside-list">
                                                                <ul className="header-main-ul">

                                                                    <li onClick={() => this.publicationDropdownFunc()}>
                                                                        <span
                                                                            className={publications}><a>PUBLICATIONS</a></span>
                                                                    </li>
                                                                    <li><span className={photobiomodulation}><Link
                                                                        href="/photobiomodulation"><a>PHOTOBIOMODULATION</a></Link></span>
                                                                    </li>
                                                                    <li><span className={advisoryboard}><Link
                                                                        href="/advisory-board-members"><a>ADVISORY BOARD</a></Link></span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            {publicationDropdown &&
                                                            <div className="header-line-div">
                                                                <div className="header-list-hr"/>
                                                                <div className="inside-list-two">
                                                                    <ul>
                                                                        <li><span className={publishedPapers}><Link
                                                                            href="/published-papers"><a>PUBLISHED PAPERS</a></Link></span>
                                                                        </li>
                                                                        <li><span className={caseStudies}><Link
                                                                            href="/casestudies"><a>CASE STUDIES</a></Link></span>
                                                                        </li>
                                                                        <li><span className={articles}><Link
                                                                            href="/articles"><a>ARTICLES</a></Link></span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>}
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>}
                                        </li>
                                        <li onMouseLeave={() => this.setState({storiesDropDown: false})}><span
                                            className={stories}
                                            onClick={() => this.setState({storiesDropDown: !storiesDropDown})}><a>STORIES</a></span>
                                            {storiesDropDown && <ul className="childlist">
                                                <li>
                                                    <div className="header-list-div-2">
                                                        <div className="header-list-main-div-4"
                                                             onMouseLeave={() => this.setState({storiesDropDown: false})}>
                                                            <div className="inside-list">
                                                                <ul className="header-main-ul">
                                                                    <li><span className={clinicalVeterinarian}><Link
                                                                        href="/clinical-veterinarian"><a>VETERINARIAN</a></Link></span>
                                                                    </li>
                                                                    <li><span className={athlete}><Link href="/athlete"><a>Equine Athlete</a></Link></span>
                                                                    </li>
                                                                    <li><span className={horseRider}><Link
                                                                        href="/horse-owner-rider"><a>Horse Owner</a></Link></span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>}
                                        </li>
                                        <li><span className={blogs}><Link href="/blogs"><a>Blog</a></Link></span></li>
                                        <li><span className={webinars}><Link
                                            href="/webinars"><a>Webinars</a></Link></span></li>
                                        <li><span className={about}><Link href="/about-us"><a>About</a></Link></span>
                                        </li>
                                        <li><span className={support}><Link href="/support"><a>Support</a></Link></span>
                                        </li>
                                        <li><span className={employees}><Link href="/employees"><a>Employees</a></Link></span>
                                        </li>
                                    </ul>
                                    <ul className="responsive-column navbar flex-row nav-color mobile-header">
                                        {mobileMainNavigation && mobileMainNavigation.length>0 && mobileMainNavigation}
                                        <li><span
                                            className={evidence}
                                            onClick={() => this.setState({dropdown: !dropdown})}><a>Evidence</a></span>
                                            {dropdown && <ul className="childlist childlist-2">
                                                <li>
                                                    <div className="header-list-div-2">

                                                        <div className="header-list-main-div-2">

                                                            <div className="inside-list">
                                                                <ul className="header-main-ul">
                                                                    <li onClick={() => this.publicationDropdownFunc()}>
                                                                        <span
                                                                            className={publications}><a>PUBLICATIONS</a></span>
                                                                        {publicationDropdown &&
                                                                        <ul className="publication-list">
                                                                            <li><span className={publishedPapers}><Link
                                                                                href="/published-papers"><a>PUBLISHED PAPERS</a></Link></span>
                                                                            </li>
                                                                            <li><span className={caseStudies}><Link
                                                                                href="/casestudies"><a>CASE STUDIES</a></Link></span>
                                                                            </li>
                                                                            <li><span className={articles}><Link
                                                                                href="/articles"><a>ARTICLES</a></Link></span>
                                                                            </li>
                                                                        </ul>}
                                                                    </li>
                                                                    <li><span className={photobiomodulation}><Link
                                                                        href="/photobiomodulation"><a>PHOTOBIOMODULATION</a></Link></span>
                                                                    </li>
                                                                    <li><span className={advisoryboard}><Link
                                                                        href="/advisory-board-members"><a>ADVISORY BOARD</a></Link></span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>}
                                        </li>
                                        <li><span
                                            className={stories}
                                            onClick={() => this.setState({storiesDropDown: !storiesDropDown})}><a>STORIES</a></span>
                                            {storiesDropDown && <ul className="childlist childlist-2">
                                                <li>
                                                    <div className="header-list-div-2">

                                                        <div className="header-list-main-div-2">

                                                            <div className="inside-list">
                                                                <ul className="header-main-ul">
                                                                    <li><span className={clinicalVeterinarian}><Link
                                                                        href="/clinical-veterinarian"><a>VETERINARIAN</a></Link></span>
                                                                    </li>
                                                                    <li><span className={athlete}><Link href="/athlete"><a>Equine Athlete</a></Link></span>
                                                                    </li>
                                                                    <li><span className={horseRider}><Link
                                                                        href="/horse-owner-rider"><a>Horse Owner</a></Link></span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>}
                                        </li>
                                        <li><span className={blogs}><Link href="/blogs"><a>Blog</a></Link></span></li>
                                        <li><span className={webinars}><Link
                                            href="/webinars"><a>Webinar</a></Link></span></li>
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
