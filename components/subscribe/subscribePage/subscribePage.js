
import React, {Component} from 'react';
class Subscribe extends Component {
    render(){
        return <section className="employees">
            <div className="container">
                <div className="detail-emp">
                    <div className="description-text" dangerouslySetInnerHTML={{__html:this.props.content}}>

                    </div>
                </div>
            </div>
        </section>
    }
}
export default Subscribe;