
import  React , { Component } from 'react';
import RequestDemo from '../requestDemo';
import WebinarsHeader from '../publication/publicationHeader';
import DetailContent from './detailContent';
import axios from "axios";
import {API_PATH} from "../apiconfig";

class  webinar extends Component{
    state={
        slug:null,
        page:null
    };
    componentWillMount() {
        let {slug} = this.props;
        this.setState({ slug:slug })
        axios.get(API_PATH + 'pages')
            .then((res)=>{
                res.data.pages.forEach((val) => {
                    if (val.type === "webinars") {
                        this.setState({page: val})
                    }
                });
            })
            .catch(err => console.log(err));
    };
    render() {
        let {slug, page} = this.state;
        return(<div>
            {page && <WebinarsHeader publicationCategory={"Webinar"} headerImg={page && page.featuredImage && page.featuredImage.url} heading={"WEBINARS"}/>}
            <DetailContent slug={slug}/>
            {/*<DetailCard/>*/}
            <RequestDemo/>
        </div>)
    }
}
export default webinar;
