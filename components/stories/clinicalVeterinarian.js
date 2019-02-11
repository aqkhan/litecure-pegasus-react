import  React, {Component} from 'react';
import RequestDemo from '../requestDemo';
import StoriesHeader from './storiesHeader/storiesHeader';
import DefaultComponent from "../defaultComponent/defaultComponent";
import StoriesMiddleSection from "./storiesMiddleSection/storiesMiddleSection";
import StoriesCategory from "./storiesCategories/storiesCategories";
import {API_PATH} from '../apiconfig'
import axios from 'axios';

class clinicalVeterinarian extends Component {
    state = {
        error:null
    };
    componentDidMount(){
        let {pages, dispatch, stories} = this.props;
        if (!pages) {
            axios.get(API_PATH + 'pages')
                .then((res) => {
                    dispatch({
                        type: 'pages',
                        payLoad: {
                            pages:res.data.pages
                        }
                    })
                })
                .catch(err => {
                    console.log("error", err);
                    this.setState({error: "404 Home Page Not Found"})
                });
        }



        if(!stories){
            axios.get(API_PATH + 'stories')
                .then((res) => {
                    dispatch({
                        type: 'stories',
                        payLoad: {
                            stories:res.data.stories
                        }
                    })
                })
                .catch(err => {
                    this.setState({error: err})
                });
        }
    }
    render() {
        let {stories,pages} = this.props;
        let requiredStories = null;
        if (stories){
            requiredStories = stories.filter(stories => stories.selectCategory.find(element=>element==="5c59ecac52b58d379abc6c91"))
        }
        let {error} = this.state;
        let one = [];
        let defaults = [];
        if(pages!== null && pages.length>0){
            pages.forEach((item,index)=>{
                if(item.templateOrder==='one' && item.type === "stories"){
                    one =[...one, <StoriesHeader publicationCategory={"Veterinarian"} key={index} headerImg={item && item.featuredImage && item.featuredImage.url} heading={"Stories"}/>]
                }
                else if(item.type === "stories") {
                    defaults =[...defaults,
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
                <StoriesMiddleSection storiesCategory={"Veterinarian"}/>
                 {requiredStories !==null && requiredStories.length>0 && <StoriesCategory stories={requiredStories} storiesCategory={"Veterinarian"}/>}
                <RequestDemo/>
            </div>
        )
    }
}
export default clinicalVeterinarian;
