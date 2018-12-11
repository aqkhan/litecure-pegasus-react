/**
 * Created by FaZi on 12/10/2018.
 */
import  React , { Component } from 'react';
import RequestDemo from '../requestDemo';
import PublicationHeader from '../publication/publicationHeader/index';
import DetailContent from '../publicationDetail/detailcontent/index';
import DetailCard from '../publicationDetail/detailCard';

class  PublicationDetails extends Component{
    state = {
        products : null,
        err:null
    }
    render() {
        return (
            <div>
                <PublicationHeader/>
                <DetailContent/>
                <DetailCard/>
                <RequestDemo/>
            </div>
        )
    }
}
export default PublicationDetails;
