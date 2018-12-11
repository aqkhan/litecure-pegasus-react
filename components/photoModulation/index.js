/**
 * Created by FaZi on 12/11/2018.
 */
import  React , { Component } from 'react';
import RequestDemo from '../requestDemo';
import Photomodulation from '../photoModulation/photomodulationHeader/index'
import Modulationdetail from '../photoModulation/modulationdetail/index';
class  PhotoModulations extends Component {
    render () {
        return(
            <div>
                <Photomodulation/>
                <Modulationdetail/>
            </div>
        );
    }
}
export default PhotoModulations;
