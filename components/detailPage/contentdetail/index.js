import React, {Component} from 'react';
import embed from 'embed-video';

class DetailContent extends Component {
    render(){
        console.log("video " + embed(this.props.embedVideo))
        return (<div>
            <section className="employees">
                <div className="container">
                    <div className="detail-emp">
                        <div className="description-text" dangerouslySetInnerHTML={{__html:this.props.content}}>
                        </div>
                    </div>
                </div>
            </section>
            {this.props.embedVideo && <div className="container-fluid benefit-video-con" dangerouslySetInnerHTML={{__html:embed(this.props.embedVideo,{ attr:{width:"100%", height:500}})}}>      
                 </div>}
        </div>)
    }
}
export default DetailContent;