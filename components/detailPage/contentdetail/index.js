/**
 * Created by FaZi on 12/27/2018.
 */
import React, {Component} from 'react';
import embed from 'embed-video';
class DetailContent extends Component {
    render(){
        console.log("video " + this.props.embedVideo)
        return <div>
            <section className="employees">
                <div className="container">
                    <div className="detail-emp">
                        <div className="description-text" dangerouslySetInnerHTML={{__html:this.props.content}}>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container-fluid benefit-video-con">
            {       
                embed(this.props.embedVideo, {attr:{width:"100%", height:500}})
                }
            </div>
        </div>
    }
}
export default DetailContent;