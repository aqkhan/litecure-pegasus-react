import React , {Component} from 'react';
import axios from "axios";
import Link from 'next/link'
import {API_PATH} from "../apiconfig";

class RequestDemo extends Component{
    state = {
        page:null,
    };
    componentWillMount() {
        axios.get(API_PATH + 'pages')
            .then((res) => {
                let temp = [];
                res.data.pages.forEach((val) => {
                    if (val.type === "requestADemo") {
                        temp.push(val);
                    }
                });
                this.setState({page: temp})
            })
            .catch(err => {
                throw err
            });
    }
    render() {
        let page=null;
        if (this.state.page) {
            page = this.state.page.map((value, index)=> {
                return <section className="new-request-demo " key={index}>
                    <section className="section-four">
                        <div  className="section-four-background" style={value.featuredImage&&{
                            backgroundColor: "#191d24",
                            backgroundImage: `linear-gradient(261deg, rgba(0, 0, 0, 0), #191d24), url(${value.featuredImage && value.featuredImage.url})`,
                            backgroundPosition: "bottom",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            position: "absolute",
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            zIndex: -1,
                        }}/>
                        <div className="container">
                            <div className="row flex requestitbro">
                                <p>{value.headerImageLabel}</p>
                            </div>
                            <div className="small-upper-line flex">
                                <div className="line"/>
                            </div>
                            <div className="row flex">
                                <div className="taketheflowbro">
                                    <p>
                                        {value.leadText}
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 flex-custom " dangerouslySetInnerHTML={{__html:value.content}}/>
                            </div>
                        </div>
                    </section>
                </section>
            })
        }
        return (
            <div>
                {
                    page&&page
                }
                <section className="new-subscribe">
                    <section className="section-five">
                        <div className="custom-container container">
                            <div className="row flex">

                                <p>
                                    Subscribe to stay up to date with Pegasus
                                </p>
                                <Link href={'/subscribe'}><a>SUBSCRIBE</a></Link>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        );
    }
}

export default RequestDemo;
