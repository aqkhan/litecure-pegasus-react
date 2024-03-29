import React, {Component} from 'react';
import Link from 'next/link';
import axios from "axios";
import {API_PATH} from "../../apiconfig";
class DetailContent extends Component {
    state = {
        err:null
    }
    render() {
        let {err} = this.state;
        let {publication} = this.props
        return (
            <div>
                {publication &&<section className="content-dev">
                    <div className="container">
                        <div className="title-dev">
                            <p className="w-text">{publication.title}</p>
                            <div className="row">
                                {publication.downloadLink !== "" ?
                                    <Link href={publication.downloadLink}><a className="download-link-new">
                                        <button className="download-btn-red">DOWNLOAD PDF</button>
                                    </a></Link> : <div/>}
                                {publication.linksTo !== "" ?
                                    <Link href={publication.linksTo}><a className="read-more-new">
                                        <button className="full-study-btn">READ FULL STUDY</button>
                                    </a></Link> : <div/>}
                            </div>
                            <span>Author(s):{publication.authors}</span>
                        </div>
                        <div className="description-dev">
                            <div className="publication-description"
                                 dangerouslySetInnerHTML={{__html: publication.description}}/>
                            <h3 className="about-author">About the authors (s)</h3>
                            <div className="authors-details-card">
                                <div className="card">
                                    <div className="card-body">
                                        {publication.authorImage &&
                                        <img className="author-img-div" src={publication.authorImage.url}/>}
                                        <div>
                                            <p className="author-name">{publication.authors}</p>
                                        </div>
                                        {publication.Bio && <div>
                                            <div className="author-bio"
                                                 dangerouslySetInnerHTML={{__html: publication.bio && publication.bio}}/>
                                        </div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>}
                {
                    err && <section className="content-dev">
                        <div className="container">
                            <div className="title-dev">
                                <h1><b>Invalid Publication Link</b></h1>
                            </div>
                        </div>
                    </section>
                }
            </div>
        );
    }
}
export default DetailContent;