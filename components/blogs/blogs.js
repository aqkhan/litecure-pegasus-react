import  React, {Component} from 'react';
import RequestDemo from '../requestDemo';
import BlogsHeader from './blogHeader';
import BlogCategory from './blogCategory';
import {API_PATH} from '../apiconfig'
import axios from 'axios';
import PublicationCategory from "../publication/caseStudies";

class blogs extends Component {
    state = {
        publications:null,
        categoryList:null,
        allCategoryList:null,
        err:null
    };
    componentDidMount(){

        axios.get(API_PATH + 'tags')
            .then((res)=>{
                this.setState({allCategoryList:res.data.tags});
            })
            .catch(err => console.log(err));

        axios.get(API_PATH + 'posts')
            .then((res) => {
            console.log("datacoming",res);
                let temp = [];
                let tempArray = [];
                res.data.posts.forEach((val) => {
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
                this.setState({err:err})
            })
    }
    render() {
        let {publications,categoryList,allCategoryList} = this.state;
        let uniqueNames=null;
        if (categoryList){
            uniqueNames =  categoryList.filter(function(item, pos){
                return categoryList.indexOf(item)=== pos;
            });
        }
        let newCategories=[];
        if(uniqueNames){
            uniqueNames.forEach((key)=>(
                allCategoryList.forEach(data=>{
                    if (key===data._id){
                        newCategories.push({id:key,name:data.title, check:false})
                    }
                })
            ));
        }
        return (
            <div>
                <BlogsHeader blogCategory={"Posts"}/>
                <BlogCategory publications={publications} categoryList={newCategories} publicationCategory={"Posts"} page={"/post/"}/>
                <RequestDemo/>
            </div>
        )
    }
}
export default blogs;
