
import  React , { Component } from 'react';
import RequestDemo from '../requestDemo';
import WebinarsHeader from '../webinars/webinarHeader';
import DetailContent from './detailContent';
import webinars from "../webinars/webinars";

class  webinar extends Component{
    state={
        slug:null
    };
    componentWillMount() {
        let {slug} = this.props;
        this.setState({ slug:slug })
    };
    render() {
        let {slug} = this.state;
        return(<div>
            <WebinarsHeader webinarCategory={"Webinars"} headerImg={'/static/images/buffalo.png'}/>
            <DetailContent slug={slug}/>
            {/*<DetailCard/>*/}
            <RequestDemo/>
        </div>)
    }
}
export default webinar;
