import  React, {Component} from 'react';
import RequestDemo from '../requestDemo';
import ResearchHeader  from './researchheader';
import ResearchContent from './researchcontent';
import {API_PATH} from '../apiconfig';
import axios from 'axios';

class research extends Component {
    state = {
        researchContent:null,
        err:null,
        leadtext:null
    }
    componentWillMount(){
        axios.get(API_PATH + 'pages')
            .then((res) => {
                console.log("ongoing research",res);
                res.data.pages.map((item)=>{
                    if(item.type === 'default'){
                        this.setState({researchContent: item.content,leadtext:item.leadText });

                    }
                })
                console.log("content for support",this.state.content);
            })
            .catch(err => {
                console.log("error", err);
            })
    }
    render() {
        let {researchContent,leadtext} = this.state;
        return (
            <div>
                <ResearchHeader  leadtext={leadtext}/>
                <ResearchContent content={researchContent} />
                <RequestDemo/>
            </div>
        )
    }
}
export default research;
