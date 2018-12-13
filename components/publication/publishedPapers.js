import  React, {Component} from 'react';
import RequestDemo from '../requestDemo';
import PublicationHeader from '../publication/publicationHeader/index';
import PublicImgSection from '../publication/publicationImageSection/index';
import PublicationCategory from './publicationCategory.js/index'
import {API_PATH} from '../apiconfig'
import axios from 'axios';

class PublishedPapers extends Component {
    state = {
        publications:null,
        err:null
    }
    componentDidMount(){
        axios.get(API_PATH + 'publications')
            .then((res) => {
                let temp = [];
                res.data.publications.forEach((val) => {
                    if (val.publicationCategory === "published-papers") {
                        temp.push(val);
                    }
                });
                this.setState({publications: temp})
            })
            .catch(err => {
                this.setState({err:err})
            })
    }
    render() {
        let {publications} = this.state;
        return (
            <div>
                <PublicationHeader publicationCategory={"Published Papers"}/>
                <PublicImgSection publicationCategory={"Puplished Papers"}/>
                <PublicationCategory publications={publications} publicationCategory={"Puplished Papers"}/>
                <RequestDemo/>
            </div>
        )
    }
}
export default PublishedPapers;
