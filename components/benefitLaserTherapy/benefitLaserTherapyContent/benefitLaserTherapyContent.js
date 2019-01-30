import React from 'react';
import axios from 'axios';
import {API_PATH} from '../../apiconfig';
class BenefitContent extends  React.Component{

    render(){
        return(
                <div className="benefits-background">
                <div className=" container">
                    <div className="row ">
                        <div className="col-sm-12 ">
                            <div className="description-dev">
                                <div className="publication-description1"
                                     dangerouslySetInnerHTML={{__html: this.props.content}}/>
                            </div>

                        </div>
                    </div>
                </div>
                </div>
        )
    }
}
export default BenefitContent;