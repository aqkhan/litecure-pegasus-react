/**
 * Created by FaZi on 12/27/2018.
 */
import React, {Component} from 'react';
class Employe extends Component {
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
export default Employe;