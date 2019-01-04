import React , {Component} from 'react';
import axios from "axios";
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
                        <div className="section-four-background"/>
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
                                    Stay up to date. Subscribe to the Pegasus feed :)
                                </p>
                                <a href="#">
                                    SUBSCRIBE
                                </a>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        );
    }
}

export default RequestDemo;
