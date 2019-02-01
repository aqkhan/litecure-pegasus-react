import  React, {Component} from 'react';
import RequestDemo from '../requestDemo';
import WebinarsHeader from './publicationHeader/index';
import WebinarsCategory from './publicationCategory/index';
import {API_PATH} from '../apiconfig';
import axios from 'axios';


class webinars extends Component {
    state = {
        publications:null,
        categoryList:null,
        allCategoryList:null,
        page:null,
        err:null
    };
    componentDidMount(){

        axios.get(API_PATH + 'pages')
            .then((res)=>{
                res.data.pages.forEach((val) => {
                    if (val.type === "webinars") {
                        this.setState({page: val})
                    }
                });
              })
            .catch(err => console.log(err));
        axios.get(API_PATH + 'tags')
            .then((res)=>{
                this.setState({allCategoryList:res.data.tags});
            })
            .catch(err => console.log(err));

        axios.get(API_PATH + 'webinars')
            .then((res) => {
                let temp = [];
                let tempArray = [];
                res.data.webinars.forEach((val) => {
                    val.selectTags.forEach((item)=>{
                        tempArray.push(item);
                    });
                    temp.push(val)
                });
                this.setState({categoryList:tempArray});
                this.setState({publications: temp})
            })
            .catch(err => {
                this.setState({err:err})
            })
    }
    render() {
        let {publications,categoryList,allCategoryList,page} = this.state;
        let uniqueNames=[];
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
        return (
            <div>
               {page && <WebinarsHeader publicationCategory={"All Webinars"} headerImg={page && page.featuredImage && page.featuredImage.url} heading={"WEBINARS"}/>}
                <WebinarsCategory publications={publications} categoryList={newCategories} publicationCategory={"Webinar"} page={"/webinar/"}/>
                <RequestDemo/>
            </div>
        )
    }
}
export default webinars;
