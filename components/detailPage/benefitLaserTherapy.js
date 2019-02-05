import  React, {Component} from 'react';
import {API_PATH} from '../apiconfig';
import axios from 'axios';
import Detailheader from './detailheader/index';
import DetailContent from './contentdetail/index';
import DefaultComponent from '../defaultComponent/defaultComponent';
import RequestDemo from '../requestDemo';
class BenefitLaserTherapy extends Component {
    state = {
        pages:null,
        error:null,
    };
    componentDidMount(){
        axios.get(API_PATH + 'pages')
            .then((res) => {
                let temp = [];
                res.data.pages.forEach((item)=>{
                    if(item.type === 'laserTherapy'){
                        temp.push(item);
                    }
                });
                this.setState({pages: temp });
            })
            .catch(err => {
                console.log("error", err);
                this.setState({errer:err})
            })
    }
    render(){
        let {pages, error}= this.state;
        let one = [];
        let defaults =[];
        if(pages!==null && pages.length>0){
            pages.forEach((item,index)=>{
                if (item.templateOrder==='one'){
                    one = [...one,<div key={index}>
                        <Detailheader imgUrl={item.featuredImage && item.featuredImage.url} headerImageLabel={item.headerImageLabel} leadText={item.leadText}/>
                        <DetailContent content={item.content}/>
                    </div>]
                }
                else {
                    defaults=[...defaults,<DefaultComponent featuredImage={item.featuredImage}
                                                            headerImageLabel={item.headerImageLabel && item.headerImageLabel}
                                                            metaTitle={item.metaTitle && item.metaTitle}
                                                            leadText={item.leadText && item.leadText}
                                                            content={item.content && item.content} key={index}/>]
                }
            });
        }
        return (pages!==null && pages.length>0?
            <div>
                {one && one}
                {defaults && defaults}
                <RequestDemo/>
            </div>
            : error ? (<div className="splash">
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
}
export default BenefitLaserTherapy;