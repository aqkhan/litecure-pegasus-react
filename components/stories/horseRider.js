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
        stories:null,
        pages:null,
        error:null
    };
    componentDidMount(){
        axios.get(API_PATH + 'pages')
            .then((res)=>{
                let temp = [];
                res.data.pages.forEach((val) => {
                    if (val.type === "stories") {
                        temp.push(val);
                    }
                });
                this.setState({pages: temp})
            })
            .catch(err =>{
                console.log("error", err);
                this.setState({error:"404 Not Found"})
            });
        axios.get(API_PATH + 'stories/category/horseRider')
            .then((res) => {
                this.setState({stories: res.data.stories})
            })
            .catch(err => {
                console.log("error", err);
                this.setState({error:"Not Found"})
            })
    }
    render() {
        let {stories,pages, error} = this.state;
        let one = [];
        let defaults = [];
        if(pages!== null && pages.length>0){
            pages.forEach((item,index)=>{
                if(item.templateOrder==='one'){
                    one =[...one, <StoriesHeader publicationCategory={"Horse Owner/Rider"} key={index} headerImg={item && item.featuredImage && item.featuredImage.url} heading={"Stories"}/>]
                }
                else {
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
                <StoriesMiddleSection storiesCategory={"Clinical Veterinarian"}/>
                {stories !==null && stories.length>0 && <StoriesCategory stories={stories} storiesCategory={"Clinical Veterinarian"}/>}
                <RequestDemo/>
            </div>
        )
    }
}
export default clinicalVeterinarian;
