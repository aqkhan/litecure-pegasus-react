import  React, {Component} from 'react';
import RequestDemo from '../requestDemo';
import PublicationHeader from '../publication/publicationHeader/index';
import PublicImgSection from '../publication/publicationImageSection/index';
import PublicationCategory from './publicationCategory/index'
import {API_PATH} from '../apiconfig'
import axios from 'axios';

class PublishedPapers extends Component {
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
                    if (val.type === "publication") {
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

        axios.get(API_PATH + 'publications')
            .then((res) => {
                let temp = [];
                let tempArray = [];
                res.data.publications.forEach((val) => {
                    if (val.publicationCategory === "trade-articles") {
                        val.selectTags.forEach((item)=>{
                            tempArray.push(item);
                        });
                        temp.push(val);
                    }
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
                {page && <PublicationHeader publicationCategory={"Articles"} headerImg={page && page.featuredImage && page.featuredImage.url} heading={"PUBLICATIONS"}/>}
                <PublicImgSection publicationCategory={"Articles"}/>
                <PublicationCategory publications={publications} categoryList={newCategories} publicationCategory={"Articles"} page={"/article-detail/"}/>
                <RequestDemo/>
            </div>
        )
    }
}
export default PublishedPapers;
