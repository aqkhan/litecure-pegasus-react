/**
 * Created by FaZi on 12/10/2018.
 */
import Link from 'next/link';
import React, {Component} from 'react';

class publicImgSection extends Component {
    state ={
        publishedPapers:"",
        scientificStudies:"",
        articles:""
    };
    componentWillMount(){
        let {publicationCategory} = this.props;
        switch (publicationCategory) {
            case "Puplished Papers": this.setState({ publishedPapers:"active", scientificStudies:"", articles:""})
            break;
            case "Case Studies": this.setState({ publishedPapers:"", scientificStudies:"active", articles:""})
                break;
            case "Articles": this.setState({ publishedPapers:"", scientificStudies:"", articles:"active"})
                break;
        }
    }
    render(){
        let {publishedPapers,scientificStudies,articles} = this.state;
        return(
            <section className="public-img">
                <div className="container">
                    <div className="primary-container">
                        <div>
                            <ul>
                                <li><a href="#" className="active">Evidence</a></li>
                            </ul>
                        </div>
                        <div style={{
                            background: `linear-gradient(rgba(0, 0, 0, 0.66), rgba(6, 6, 6, 0.72)),url('/static/images/buffalo.png')`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover", backgroundPosition: "center",}}>
                            <ul>
                                <li><span><a className="active">Publications</a></span></li>
                                <li><span><Link href="/published-papers"><a className={publishedPapers}>Published Papers</a></Link></span></li>
                                <li><span><Link  href="/casestudies"><a className={scientificStudies}>Case Studies</a></Link></span></li>
                                <li><span><Link  href="/articles"><a className={articles}>Articles</a></Link></span></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
};

export default publicImgSection;