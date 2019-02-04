import React, {Component} from 'react';
import RequestDemo from '../requestDemo';
import BlogHeader from '../publication/publicationHeader';
import DetailContent from './detailContent';
import axios from "axios";
import {API_PATH} from "../apiconfig";
import PublicationHeader from "../publicationDetail/caseStudyDetail";

class post extends Component {
    state = {
        slug: null,
        pages: null,
        error: null
    };

    componentWillMount() {
        let {slug} = this.props;
        this.setState({slug: slug});
        axios.get(API_PATH + 'pages')
            .then((res) => {
                let temp = [];
                res.data.pages.forEach((val) => {
                    if (val.type === "blog") {
                        temp.push(val);
                    }
                });
                this.setState({pages: temp})
            })
            .catch(err => {
                console.log("error", err);
                this.setState({error: "404 Not Found"})
            });
    };

    render() {
        let {slug, pages, error} = this.state;
        let one = [];
        let defaults = [];
        if (pages !== null && pages.length > 0) {
            pages.forEach((item, index) => {
                if (item.templateOrder === 'one') {
                    one = [...one, <BlogHeader publicationCategory={"Post"}
                                               headerImg={item && item.featuredImage && item.featuredImage.url}
                                               heading={"BLOG"} key={index}/>]
                } else {
                    defaults = [...defaults,
                        <DefaultComponent featuredImage={item.featuredImage}
                                          headerImageLabel={item.headerImageLabel && item.headerImageLabel}
                                          metaTitle={item.metaTitle && item.metaTitle}
                                          leadText={item.leadText && item.leadText}
                                          content={item.content && item.content}/>
                    ]
                }
            })
        }

        return (<div>
            {
                (one.length > 0 ? one : error ? (<div className="splash">
                    <div className="lds-ellipsis">
                        <h1><strong>{error}</strong></h1>
                    </div>
                </div>) : (<div className="splash">
                    <div className="lds-ellipsis">
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                    </div>
                </div>))
            }
            {defaults.length > 0 && defaults}
            <DetailContent slug={slug}/>
            {/*<DetailCard/>*/}
            <RequestDemo/>
        </div>)
    }
}

export default post;
