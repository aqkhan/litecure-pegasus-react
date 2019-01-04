import  React, {Component} from 'react';
import RequestDemo from '../requestDemo';
import ResearchHeader  from './researchheader';
import ResearchContent from './researchcontent';
import {API_PATH} from '../apiconfig';
import axios from 'axios';

class research extends Component {
    state = {
        page:null,
        err:null,
    }
    componentWillMount(){
        axios.get(API_PATH + 'pages')
            .then((res) => {
                res.data.pages.map((item)=>{
                    if(item.type === 'onGoingResearch'){
                        this.setState({page: item });
                    }
                })
            })
            .catch(err => {
                console.log("error", err);
            })
    }
    render() {
        let {page} = this.state;
        return (page &&
            <div>
                <ResearchHeader  leadText={page.leadText} imgUrl={page.featuredImage && page.featuredImage.url} headerImageLabel={page.headerImageLabel}/>
                <ResearchContent content={page.content} />
                <RequestDemo/>
            </div>
        )
    }
}
export default research;
