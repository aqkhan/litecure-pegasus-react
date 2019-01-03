/**
 * Created by FaZi on 12/28/2018.
 */
/**
 * Created by FaZi on 12/27/2018.
 */
import React, {Component} from 'react';
import Router from 'next/router';

class detailHeader extends Component{
    render(){
        return(
            <section className="new-home-cards">
                <section className="section-one publication-header" style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.66), rgba(6, 6, 6, 0.72)),url(${this.props.imgUrl})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",}} >
                    <div className="third-row">
                        <div className="container custom-container">
                            <div className="row flex">
                                <div className="header-text publication-text">
                                    <p><br/><span>{this.props.headerImageLabel}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="small-upper-line flex">
                        <div className="line"> </div>
                    </div>
                    <div className="pagename">
                        <h4>{this.props.leadText}</h4>
                    </div>
                </section>
                <div className="empty-div">
                    <div className="container">
                        <div className="course-text1"><div onClick={() => Router.back()}><i className="fa fa-chevron-left"> </i></div><p>BACK TO PREVIOUS </p></div>
                    </div>
                </div>
            </section>    )
    };
}

export default detailHeader;