/**
 * Created by FaZi on 12/10/2018.
 */
import  React , { Component } from 'react';
import RequestDemo from '../requestDemo';
import PublicationHeader from '../publication/publicationHeader/index';
import DetailContent from '../publicationDetail/detailcontent/index';
// import DetailCard from '../publicationDetail/detailCard';

class  PublishedPaperDetail extends Component{
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
            <PublicationHeader publicationCategory={"Case Study"}/>
            <DetailContent slug={slug}/>
            {/*<DetailCard/>*/}
            <RequestDemo/>
        </div>)
    }
}
export default PublishedPaperDetail;
