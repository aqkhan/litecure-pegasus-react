
import  React , { Component } from 'react';
import RequestDemo from '../requestDemo';
import BlogHeader from '../blogs/blogHeader';
import DetailContent from './detailContent';

class  post extends Component{
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
            <BlogHeader blogCategory={"Posts"}/>
            <DetailContent slug={slug}/>
            {/*<DetailCard/>*/}
            <RequestDemo/>
        </div>)
    }
}
export default post;
