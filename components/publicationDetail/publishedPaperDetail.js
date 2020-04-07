/**
 * Created by FaZi on 12/10/2018.
 */
import React, {Component} from 'react';
import RequestDemo from '../requestDemo';
import PublicationHeader from '../publication/publicationHeader/index';
import DetailContent from '../publicationDetail/detailcontent/index';
import axios from "axios";
import {API_PATH} from "../apiconfig";
import DefaultComponent from "./articleDetail";

// import DetailCard from '../publicationDetail/detailCard';

class PublishedPaperDetail extends Component {
    state = {
        error: null
    };

    componentDidMount() {
        let {dispatch, pages, publications} = this.props;

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
        if(!publications){
            axios.get(API_PATH + 'publications')
                .then((res) => {
                    let duplicate = [...res.data.publications];
                    let reverse = duplicate.reverse();
                    dispatch({
                        type: 'publications',
                        payLoad: {
                            publications: reverse
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
        let {slug, pages, publications} = this.props;
        let {error} = this.state;
        let publication = null;
        if(publications){
            publication = publications.find(element=> element.slug===slug)
        }
        let one = [];
        let defaults = [];
        if (pages !== null && pages.length > 0) {
            pages.forEach((item, index) => {
                if (item.templateOrder === 'one' && item.type === "publication") {
                    one = [...one, <PublicationHeader publicationCategory={"Published Paper"}
                                                      headerImg={item && item.featuredImage && item.featuredImage.url}
                                                      heading={"PUBLICATIONS"}/>]
                } else if(item.type === "publication"){
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
            {/*{defaults.length > 0 && defaults}*/}
            {publication&&<DetailContent publication={publication}/>}
            {/*<DetailCard/>*/}
            <RequestDemo/>
        </div>)
    }
}

export default PublishedPaperDetail;
