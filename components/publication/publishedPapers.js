import  React, {Component} from 'react';
import RequestDemo from '../requestDemo';
import PublicationHeader from '../publication/publicationHeader/index';
import DefaultComponent from "../defaultComponent/defaultComponent";
import PublicImgSection from '../publication/publicationImageSection/index';
import PublicationCategory from './publicationCategory/index'
import {API_PATH} from '../apiconfig'
import axios from 'axios';

class PublishedPapers extends Component {
    state = {
        error: null
    };

    componentDidMount() {
        let {dispatch, pages, publications, tags} = this.props;
        if(!pages) {
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
    let {error} = this.state;
    let {pages, tags, publications} = this.props;
    let requiredPublications = [];
    let categoryList = [];
    if(publications){
        publications.forEach((val) => {
            if (val.publicationCategory === "published-papers") {
                val.selectTags.forEach((item) => {
                    categoryList.push(item);
                });
                requiredPublications.push(val);
            }
        });
    }

    let uniqueNames = [];
    let one = [];
    let defaults = [];
    if (categoryList) {
        uniqueNames = categoryList.filter(function (item, pos) {
            return categoryList.indexOf(item) === pos;
        });
    }
    let newCategories = [];
    if (uniqueNames.length !== 0) {
        uniqueNames.forEach((key) => (
            tags && tags.forEach(data => {
                if (key === data._id) {
                    newCategories.push({id: key, name: data.title, check: false})
                }
            })
        ));
    }
    if (pages !== null && pages.length > 0) {
        pages.forEach((item, index) => {
            if(item.templateOrder==='one' && item.type === "publication"){
                    one =[...one, <PublicationHeader publicationCategory={"Published Papers"} key={index} headerImg={item && item.featuredImage && item.featuredImage.url} heading={"PUBLICATIONS"}/>]
                }
            else if(item.type === "publication") {
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
        return (
            <div>
                {
                    (one.length>0 ?one: error ? (<div className="splash">
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
                {defaults.length>0 && defaults}
                <PublicImgSection publicationCategory={"Published Papers"}/>
                {requiredPublications && requiredPublications.length>0 &&<PublicationCategory publications={requiredPublications && requiredPublications} categoryList={newCategories}
                publicationCategory={"Published Papers"} page={"/published-paper-detail/"}/>}
                <RequestDemo/>
            </div>
        )
    }
}
export default PublishedPapers;
