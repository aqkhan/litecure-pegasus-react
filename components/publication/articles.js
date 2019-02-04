import React, {Component} from 'react';
import RequestDemo from '../requestDemo';
import PublicationHeader from '../publication/publicationHeader/index';
import DefaultComponent from "../defaultComponent/defaultComponent";
import PublicImgSection from '../publication/publicationImageSection/index';
import PublicationCategory from './publicationCategory/index'
import {API_PATH} from '../apiconfig'
import axios from 'axios';

class PublishedPapers extends Component {
    state = {
        publications: null,
        categoryList: null,
        allCategoryList: null,
        pages: null,
        error: null
    };

    componentDidMount() {
        axios.get(API_PATH + 'pages')
            .then((res) => {
                let temp = [];
                res.data.pages.forEach((val) => {
                    if (val.type === "publication") {
                        temp.push(val);
                    }
                });
                this.setState({pages: temp})
            })
            .catch(err => {
                console.log("error", err);
                this.setState({error: "404 Not Found"})
            });
        axios.get(API_PATH + 'tags')
            .then((res) => {
                this.setState({allCategoryList: res.data.tags});
            })
            .catch(err => {
                console.log("error", err);
                this.setState({error: "404 Not Found"})
            });

        axios.get(API_PATH + 'publications')
            .then((res) => {
                let temp = [];
                let tempArray = [];
                res.data.publications.forEach((val) => {
                    if (val.publicationCategory === "trade-articles") {
                        val.selectTags.forEach((item) => {
                            tempArray.push(item);
                        });
                        temp.push(val);
                    }
                });
                this.setState({categoryList: tempArray});
                this.setState({publications: temp})
            })
            .catch(err => {
                console.log("error", err);
                this.setState({error: "Not Found"})
            })
    }

    render() {
        let {publications, categoryList, allCategoryList, pages, error} = this.state;
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
                allCategoryList && allCategoryList.forEach(data => {
                    if (key === data._id) {
                        newCategories.push({id: key, name: data.title, check: false})
                    }
                })
            ));
        }
        if (pages !== null && pages.length > 0) {
            pages.forEach((item, index) => {
                if (item.templateOrder === 'one') {
                    one = [...one, <PublicationHeader publicationCategory={"Articles"}
                                                      headerImg={item && item.featuredImage && item.featuredImage.url}
                                                      heading={"PUBLICATIONS"} key={index}/>]
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
        return (
            <div>
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
                <PublicImgSection publicationCategory={"Articles"}/>
                <PublicationCategory publications={publications} categoryList={newCategories}
                                     publicationCategory={"Articles"} page={"/article-detail/"}/>
                <RequestDemo/>
            </div>
        )
    }
}

export default PublishedPapers;
