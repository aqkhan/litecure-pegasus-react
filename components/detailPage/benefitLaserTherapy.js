import  React, {Component} from 'react';
import {API_PATH} from '../apiconfig';
import axios from 'axios';
import Detailheader from './detailheader/index'
import DetailContent from './contentdetail/index'

class BenefitLaserTherapy extends Component {
    state = {
        page:null,
        err:null,
    };
    componentDidMount(){
        axios.get(API_PATH + 'pages')
            .then((res) => {
                res.data.pages.map((item)=>{
                    if(item.type === 'resources'){
                        this.setState({page: item });
                    }
                })
            })
            .catch(err => {
                console.log("error", err);
            })
    }
    render(){
        let {page}= this.state;
        return page?(page &&
            <div>
            <Detailheader imgUrl={page.featuredImage && page.featuredImage.url} headerImageLabel={page.headerImageLabel} leadText={page.leadText}/>
            <DetailContent content={page.content}/>
            </div>
            ):(<div className="splash">
            <div className="lds-ellipsis">
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
                </div>)
    }
}
export default BenefitLaserTherapy;