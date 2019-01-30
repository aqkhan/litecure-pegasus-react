import  React, {Component} from 'react';
import RequestDemo from '../requestDemo';
import {API_PATH} from '../apiconfig';
import axios from 'axios';
import BenefitsHeader from './benefitLaserTherapyHeader/benefitLaserTherapyHeader';
import BenefitContent from './benefitLaserTherapyContent/benefitLaserTherapyContent';

class BenefitLaserTherapy extends Component {
    state = {
        page:null,
        err:null,
    }
    componentWillMount(){
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
    render() {
        let {page} = this.state;
        return (page &&
            <div>
                <BenefitsHeader  leadText={page.leadText} imgUrl={page.featuredImage && page.featuredImage.url} headerImageLabel={page.headerImageLabel}/>
                <BenefitContent content={page.content} />
                <RequestDemo/>
            </div>
        )
    }
}
export default BenefitLaserTherapy;