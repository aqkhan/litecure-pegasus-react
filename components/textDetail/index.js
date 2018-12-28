import React, { Component } from 'react';
import RequestDemo from '../requestDemo';
import {API_PATH} from '../apiconfig';
import axios from 'axios';
class TextDetail extends Component{
    state={
        content: null
    }
    componentWillMount(){
        axios.get(API_PATH + 'pages')
            .then((res) => {
                console.log("support",res);
                res.data.pages.map((item)=>{
                    if(item.type === 'support'){
                        this.setState({content: item.content});
                    }
                })
                console.log("content for support",this.state.content);
            })
            .catch(err => {
                console.log("error", err);
            })
    }
    render() {
        return(
            <div>
                <section className="classification">
                    <section className="first-section">
                        <div className="container custom-container">
                            <div className="row flex">
                                <div className="header-text">
                                    <p> Support </p>
                                </div>
                            </div>
                        </div>
                        <div className="fourth-row text-area">
                            <div className=" container">
                                <div className="row ">
                                    <div className="col-sm-12 ">
                                        <div className="learnmore-header ex-class">
                                            <div className="data alotted-html">
                                                <div className="description-dev">
                                                    <div className="publication-description"
                                                         dangerouslySetInnerHTML={{__html: this.state.content}}/>
                                                </div>

                                            </div>

                                            <div className="button">
                                                <a href="#">TERMS IN LASER THERAPY</a>
                                                <a href="#" className="benefits">BENEFITS OF LASER THERAPY</a>
                                                <a href="#">RESOURCES &amp; LINKS </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </section>
                <RequestDemo/>
            </div>
        )
    }
}

export default TextDetail;
