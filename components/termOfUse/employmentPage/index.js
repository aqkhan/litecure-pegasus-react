
import React, {Component} from 'react';
class Employe extends Component {
    render(){
        return <section className="employees">
            <div className="container">
                <h1 style={{color: "#efb817"}}><strong>{this.props.headerImageLabel}</strong></h1>>
                <div className="detail-emp">
                    <div className="description-text" dangerouslySetInnerHTML={{__html:this.props.content}}/>
                </div>
            </div>
        </section>

    }
}
export default Employe;