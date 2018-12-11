import React , {Component} from 'react';
import RequestDemo from '../requestDemo';
import Inner from './inner'
class Advisory extends Component{

    render() {
        return (<div>
                    <Inner></Inner>
                    <RequestDemo/>
                </div>
        );
    }
}

export default Advisory;