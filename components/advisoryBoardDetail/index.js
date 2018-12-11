import React , {Component} from 'react';
import RequestDemo from '../requestDemo';
import InnerComponent from './innerComponent'
class AdvisoryBoardDetail extends Component{

    render() {
        return (<div>
                    <InnerComponent></InnerComponent>
                    <RequestDemo/>
                </div>
        );
    }
}

export default AdvisoryBoardDetail;