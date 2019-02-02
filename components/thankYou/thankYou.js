import  React, {Component} from 'react';
import {API_PATH} from '../apiconfig';
import Router from 'next/router';
import axios from 'axios';

class Thankyou extends Component {
    state = {
        page:null,
        err:null,
    }
    componentDidMount(){
        axios.get(API_PATH + 'pages')
            .then((res) => {
                res.data.pages.map((item)=>{
                    if(item.type === 'thankYou'){
                        this.setState({page: item });
                    }
                })
            })
            .catch(err => {
                console.log("error", err);
            })
    }
    render(){
        let {page}= this.state;
        return page?(page &&
            <div>
            <section className="new-home-cards">
            <div className="empty-div">
                    <div className="container">
                        <div className="course-text1"><div onClick={() => Router.back()}><i className="fa fa-chevron-left"> </i></div><p>BACK TO PREVIOUS </p></div>
                    </div>
                </div>
                <section className="section-one publication-header" style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.66), rgba(6, 6, 6, 0.72)),url(${page && page.featuredImage && page.featuredImage.url})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    backgroundPosition:"center",}} >
                    <div className="third-row">
                        <div className="container custom-container">
                            <div className="row flex">
                                <div className="header-text publication-text detial-text">
                                    <p><br/><span>{page && page.headerImageLabel}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="small-upper-line flex">
                        <div className="line"> </div>
                    </div>
                    <div className="thankyou-description" dangerouslySetInnerHTML={{__html:page && page.content}}/>>   
                        </section>
            </section></div>
            ):(<div className="splash">
            <div className="lds-ellipsis">
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
                </div>)
    }
}
export default Thankyou;