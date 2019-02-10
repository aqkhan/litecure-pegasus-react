
import  React , { Component } from 'react';
import RequestDemo from '../requestDemo';
import WebinarsHeader from '../publication/publicationHeader';
import DetailContent from './detailContent';
import axios from "axios";
import {API_PATH} from "../apiconfig";

class  webinar extends Component{
    state = {
        error: null
    };

    componentDidMount() {
        let {dispatch, pages, webinars, tags} = this.props;
        if (!pages) {
            axios.get(API_PATH + 'pages')
                .then((res) => {
                    dispatch({
                        type: 'pages',
                        payLoad: {
                            pages: res.data.pages
                        }
                    })
                })
                .catch(err => {
                    console.log("error ", err);
                    this.setState({error: "404 About Us Page Not Found"})
                });
        }

        if(!tags){
            axios.get(API_PATH + 'tags')
                .then((res) => {
                    dispatch({
                        type: 'tags',
                        payLoad: {
                            tags: res.data.tags
                        }
                    });
                })
                .catch(err => {
                    console.log("error", err);
                    this.setState({error: "404 Not Found"})
                });
        }
        if(!webinars){
            axios.get(API_PATH + 'webinars')
                .then((res) => {
                    let duplicate = [...res.data.webinars];
                    let reverse = duplicate.reverse();
                    dispatch({
                        type: 'webinars',
                        payLoad: {
                            webinars: reverse
                        }
                    });
                })
                .catch(err => {
                    console.log("error", err);
                    this.setState({error: "Not Found"})
                })
        }
    }

    render() {
        let {slug, pages, webinars, tags} = this.props;
        let {error} = this.state;
        let webinar = null;
        if(webinars){
            webinar = webinars.find(element=> element.slug===slug)
        }
        let one = [];
        let defaults = [];
        if (pages !== null && pages.length > 0) {
            pages.forEach((item, index) => {
                if (item.templateOrder === 'one' && item.type === "webinars") {
                    one = [...one, <WebinarsHeader publicationCategory={"Webinar"} headerImg={item && item.featuredImage && item.featuredImage.url} heading={"WEBINARS"} key={index}/>]
                } else if(item.type === "webinars") {
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
            {webinar&& <DetailContent webinar={webinar} tags={tags}/>}
            {/*<DetailCard/>*/}
            <RequestDemo/>
        </div>)
    }
}
export default webinar;
