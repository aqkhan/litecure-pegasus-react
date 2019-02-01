import  React , { Component } from 'react';
import RequestDemo from '../requestDemo';
import BlogHeader from '../publication/publicationHeader';
import DetailContent from './detailContent';
import axios from "axios";
import {API_PATH} from "../apiconfig";

class  post extends Component{
    state={
        slug:null,
        page:null
    };
    componentWillMount() {
        let {slug} = this.props;
        axios.get(API_PATH + 'pages')
            .then((res)=>{
                res.data.pages.forEach((val) => {
                    if (val.type === "blog") {
                        this.setState({page: val})
                    }
                });
            })
            .catch(err => console.log(err));
        this.setState({ slug:slug })
    };
    render() {
        let {slug, page} = this.state;
        return(<div>
            {page && <BlogHeader publicationCategory={"Post"} headerImg={page && page.featuredImage && page.featuredImage.url} heading={"BLOG"}/>}
            <DetailContent slug={slug}/>
            {/*<DetailCard/>*/}
            <RequestDemo/>
        </div>)
    }
}
export default post;
