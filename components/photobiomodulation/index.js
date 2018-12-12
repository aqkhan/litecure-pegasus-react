/**
 * Created by FaZi on 12/11/2018.
 */
import  React , { Component } from 'react';
import Photomodulation from './/photobiomodulationHeader/index'
import Modulationdetail from './/photobiomodulationDetail/index';
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
