import React, {Component} from 'react';
import ReactPaginate from 'react-paginate';
import { RestructorData } from "../../functions";
import ContentLoader  from 'react-content-loader';
import ScrollableAnchor, { goToAnchor, configureAnchors  } from 'react-scrollable-anchor';
class StoriesCategory extends Component {
    state={
        storiesCategory: null,
        publicationDestructure: null,
        totalPages:null,
        final: null
    };
     componentDidMount() {
        let {storiesCategory, stories} = this.props;
        let restructured = RestructorData(stories, 10);
     this.setState({publicationDestructure:restructured, final: restructured[0], totalPages: restructured.length, storiesCategory});
    };

    returnData = (index) => {
        this.setState({final: this.state.publicationDestructure[index.selected]});
        configureAnchors({offset: -60, scrollDuration: 1000});
        goToAnchor('scroll')
    };
    getId=(url)=> {
        let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        let match = url.match(regExp);

        if (match && match[2].length == 11) {
            return match[2];
        } else {
            return 'error';
        }
    };
    render(){
        let {storiesCategory, final,totalPages} = this.state;
        let cards=null;
        if(final){
            cards = final.map((value,index)=>{
                let videoId = null;
                if(value.videoLink !==""){
                    videoId =  this.getId(value.videoLink);
                }
                return (<div key={index} className="post-stories">
                        <div className="row reverse-content">
                            <div className="col-sm-6">
                                <div className="img-div">
                                    {videoId ? <iframe width="100%" height="100%"
                                                       src={`//www.youtube.com/embed/${videoId}`}
                                                       frameBorder="0" allowFullScreen/>:<img src={value.featuredImage&&value.featuredImage.url}/>}
                                </div>
                            </div>
                            <div className="col-sm-6 text-div">
                                <div className="heading-div"><h1>{value.title}</h1></div>
                                <div className="short-desc-div" dangerouslySetInnerHTML={{__html: value.shortDescription}}/>
                                <div className="long-desc-div" dangerouslySetInnerHTML={{__html: value.longDescription}}/>
                                <div className="author-div"><p><span>Author :</span> {value.author}</p></div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        return (
            <section className="stories">
                <ScrollableAnchor id={'scroll'}>
                    <div/>
                </ScrollableAnchor>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="stories-text">
                                <span>{storiesCategory}</span>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                            <div className="post-area">
                            {cards?cards: <div className="loading-publications"><ContentLoader
                                height={160}
                                width={550}
                                speed={2}
                                primaryColor="#f3f3f3"
                                secondaryColor="#ecebeb"
                            >
                                <rect x="81" y="12" rx="3" ry="3" width="350" height="6.4" />
                                <rect x="81" y="30" rx="3" ry="3" width="380" height="6.4" />
                                <rect x="81" y="48" rx="3" ry="3" width="201" height="6.4" />
                                <rect x="79.5" y="49.27" rx="0" ry="0" width="0" height="0" />
                                <rect x="11.5" y="10.27" rx="0" ry="0" width="61" height="51" />
                                <rect x="81" y="12" rx="3" ry="3" width="350" height="6.4" />
                                <rect x="81" y="30" rx="3" ry="3" width="380" height="6.4" />
                                <rect x="81" y="48" rx="3" ry="3" width="201" height="6.4" />
                                <rect x="79.5" y="49.27" rx="0" ry="0" width="0" height="0" />
                                <rect x="11.5" y="10.27" rx="0" ry="0" width="61" height="51" />
                            </ContentLoader></div>}
                                <ReactPaginate previousLabel={<i className="fa fa-chevron-left "> </i>}
                                               nextLabel={<i className="fa fa-chevron-right "> </i>}
                                               breakLabel={". . ." }
                                               breakClassName={"break-me"}
                                               pageCount={totalPages}
                                               marginPagesDisplayed={2}
                                               pageRangeDisplayed={5}
                                               onPageChange={this.returnData}
                                               containerClassName={"digit-icons main"}
                                               subContainerClassName={"container column"}
                                               activeClassName={"p-one"} />
                            </div>
                            </div>
                        </div>
                    </div>
            </section>
        );
    }
}
export default StoriesCategory;