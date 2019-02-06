import  React, {Component} from 'react';
import RequestDemo from '../requestDemo';
import BlogsHeader from './publicationHeader/index';
import DefaultComponent from "../defaultComponent/defaultComponent";
import BlogCategory from './publicationCategory';
import {API_PATH} from '../apiconfig'
import axios from 'axios';

class blogs extends Component {
    state = {
        publications:null,
        categoryList:null,
        allCategoryList:null,
        pages:null,
        error:null
    };
    componentDidMount(){
        axios.get(API_PATH + 'pages')
            .then((res)=>{
                let temp = [];
                res.data.pages.forEach((val) => {
                    if (val.type === "blog") {
                        temp.push(val);
                    }
                });
                this.setState({pages: temp})
            })
            .catch(err =>{
                console.log("error", err);
                this.setState({error:"404 Not Found"})
            });

        axios.get(API_PATH + 'tags')
            .then((res)=>{
                this.setState({allCategoryList:res.data.tags});
            })
            .catch(err =>{
                console.log("error",err);
                this.setState({error:"404 Not Found"})
            });

        axios.get(API_PATH + 'posts')
            .then((res) => {
                let temp = [];
                let tempArray = [];
                let duplicate = [...res.data.posts];
                let reverse = duplicate.reverse();
                reverse.forEach((val) => {
                    val.selectTags.forEach((item)=>{
                        tempArray.push(item);
                    });
                    temp.push(val);
                this.setState({blogs: temp})
            });
                this.setState({categoryList:tempArray});
                this.setState({publications: temp})
            })
            .catch(err => {
                console.log("error", err);
                this.setState({error:" 404 Not Found"})
            })
    }
    render() {
        let {publications,categoryList,allCategoryList,pages, error} = this.state;
        let uniqueNames=[];
        let one = [];
        let defaults = [];
        if (categoryList){
            uniqueNames =  categoryList.filter(function(item, pos){
                return categoryList.indexOf(item)=== pos;
            });
        }
        let newCategories=[];
        if(uniqueNames.length!==0){
            uniqueNames.forEach((key)=>(
                allCategoryList && allCategoryList.forEach(data=>{
                    if (key===data._id){
                        newCategories.push({id:key,name:data.title, check:false})
                    }
                })
            ));
        }
        if(pages!== null && pages.length>0){
            pages.forEach((item,index)=>{
                if(item.templateOrder==='one'){
                    one =[...one, <BlogsHeader publicationCategory={"Posts"} key={index} headerImg={item && item.featuredImage && item.featuredImage.url} heading={"BLOG"}/>]
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
                <BlogCategory publications={publications} categoryList={newCategories} publicationCategory={"Posts"} page={"/post/"}/>
                <RequestDemo/>
            </div>
        )
    }
}
export default blogs;
