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
            <section className="new-home-cards home-wrapper">
                <section className="section-one" style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.66), rgba(6, 6, 6, 0.72)),url(${this.props.imgUrl})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                }}>
                    <div className="third-row">
                        <div className="container custom-container">
                            <div className="flex-container">
                                <div className="text-container">
                                    <p>{this.props.headerImageLabel}</p>
                                </div>
                                <div>
                                    <div className="vertical-container"></div>
                                </div>
                                <div className="btn-txt">
                                    <p>{this.props.leadText}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="empty-div">
                    <div className="container">
                        <div className="course-text1"><div onClick={() => Router.back()}><i className="fa fa-chevron-left"> </i></div><p>BACK TO PREVIOUS </p></div>
                    </div>
                </div>
            </section>)
    };
}

export default detailHeader;