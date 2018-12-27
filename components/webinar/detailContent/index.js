import React, {Component} from 'react';
import Link from 'next/link';
import axios from "axios";
import {API_PATH} from "../../apiconfig";

class detailContent extends Component {
    state = {
        webinar:null,
        err:null,
        category: []
    }
    componentWillMount() {
        let {slug}= this.props;
        axios.get(API_PATH +'webinars/'+slug)
            .then((res) => {
                this.setState({webinar: res.data.webinar});

                res.data.webinar.selectTags.map((item)=>{

                    axios.get(API_PATH + 'tags/'+item)
                    .then((respo)=>{
                        console.log("seelctedtags are coing ", respo);
                        this.state.category.push(respo.data.tag.title);
                        this.setState({category: this.state.category});
                    })
                        .catch(err => console.log(err));
                });

             console.log("all categories",this.state.category);
            })
            .catch(err => {
                this.setState({err:err})
            })
    }
    render() {
        let {webinar,err, category} = this.state;
        console.log("webinar",webinar);
        return (
            <div>

                {webinar &&<section className="content-dev">
                    <div className="container">
                        <h1 className="color-yellow">Categories</h1>
                        {
                            category.length !== 0 && category.map((item,index)=>{
                                return(
                                    <div className="publication-description" key={index}>
                                        {
                                        item
                                    }
                                    </div>
                                )
                            })
                        }
                        <div className="title-dev">
                            <p className="w-text">{webinar.title}</p>
                        </div>
                        <div>
                            {
                                webinar.instructors.map((item, index)=>{
                                    return(
                                        <div className="publication-description" key={index}>
                                            by {
                                                item
                                            }

                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div className="description-dev">
                            <div className="publication-description"
                                 dangerouslySetInnerHTML={{__html: webinar.description}}/>

                            <div className="publication-description"
                                 dangerouslySetInnerHTML={{__html: webinar.form}}/>
                            {/*<div className="authors-details-card">*/}
                            {/*<div className="card">*/}
                            {/*<div className="card-body">*/}
                            {/*{webinar.authorImage &&*/}
                            {/*<img className="author-img-div" src={webinar.authorImage.url}/>}*/}
                            {/*<div>*/}
                            {/*<p className="author-name">{webinar.authors}</p>*/}
                            {/*</div>*/}
                            {/*{webinar.Bio && <div>*/}
                            {/*<div className="author-bio"*/}
                            {/*dangerouslySetInnerHTML={{__html: webinar.bio && webinar.bio}}/>*/}
                            {/*</div>}*/}
                            {/*</div>*/}
                            {/*</div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </section>}
                {
                    err && <section className="content-dev">
                        <div className="container">
                            <div className="title-dev">
                                <h1><b>Invalid webinar Link</b></h1>
                            </div>
                        </div>
                    </section>
                }
            </div>
        );
    }
}
export default detailContent;