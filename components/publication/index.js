import  React, {Component} from 'react';
import RequestDemo from '../requestDemo';
import PublicationHeader from '../publication/publicationHeader/index';
import PublicImgSection from '../publication/publicationImageSection/index';
import CaseStudysection from '../publication/caseStudy/index'
class Publications extends Component {
    state = {
        products: null,
        err: null
    }


    render() {
        return (
            <div>
                <PublicationHeader/>
                <PublicImgSection/>
                <CaseStudysection/>
                <RequestDemo/>
            </div>
        )
    }
}
export default Publications;
