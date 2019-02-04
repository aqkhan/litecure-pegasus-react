import React, {Component} from 'react';
import Link from 'next/link';
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

    render(){
        let {storiesCategory, final,totalPages} = this.state;
        let cards=null;
        if(final){
            cards = final.map((value,index)=>(<div key={index} className="post-casestudy">
                    <div className="img-dev">
                        <img src={value.featuredImage?value.featuredImage.url:"https://rs-cms.s3.amazonaws.com/pics/Yk_kkbCUx-_NPr_2.png"}/>
                    </div>
                </div>
            ))
        }
        return (
            <section className="casestudy">
                <ScrollableAnchor id={'scroll'}>
                    <div/>
                </ScrollableAnchor>
                <div className="container">
                    <div className="casestudy-primary">
                        <div>
                            <div className="casestudy-text">
                                <span>{storiesCategory}</span>
                            </div>

                        </div>
                        <div>
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
            </section>
        );
    }
}
export default StoriesCategory;