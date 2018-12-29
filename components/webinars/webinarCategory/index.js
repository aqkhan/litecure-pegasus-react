import React, {Component} from 'react';
import Link from 'next/link';
import ReactPaginate from 'react-paginate';
import {configureAnchors}  from 'react-scrollable-anchor';
import { RestructorData } from "../../functions";
import ContentLoader  from 'react-content-loader'
import $ from "jquery";
class webinarsCategoty extends Component {
    state={
        publicationCategory: null,
        categoryList:[],
        publications: null,
        page:null,
        publicationsCopy: null,
        publicationDestructure: null,
        totalPages:null,
        final: null,
        one: true,
        two: true,
        three: true,
        regenerativeMedicine:"5c0ff50063580f122d7e750b",
        rehabilitation:"5c0ffaeb63580f122d7e750e",
        photobiomodulation:"5c0ff0d663580f122d7e7509"
    };
    async componentWillReceiveProps(nextProps) {
        let {publicationCategory, publications, page, categoryList} = nextProps;
        console.log("new check 10",categoryList)
        await this.setState({publicationCategory:publicationCategory,publications:publications, page,categoryList});
        await this.setDisplay();
    }
    setDisplay(){
        let { regenerativeMedicine,rehabilitation,photobiomodulation } = this.state;
        let temp=[];
        this.state.publications&&this.state.publications.forEach((val)=>{
            let check = 0;
            val.selectTags.forEach(data=>{
                if (check ===0){
                    if ( data === regenerativeMedicine ||
                        data === rehabilitation ||
                        data === photobiomodulation
                    ){
                        temp.push(val);
                        check = 1;
                    }
                }
            })
        });
        let restructured = RestructorData(temp, 10);
        console.log("restructured",restructured);
        this.setState({publicationDestructure:restructured, final: restructured[0], totalPages: restructured.length}, function () {
        })
    };

    returnData = (index) => {
        this.setState({final: this.state.publicationDestructure[index.selected]});
        $('html, body').animate({
            scrollTop: $("#scroll").offset().top
        }, 1000);
    }

    checkChange(value){
        switch (value) {
            case 1:
                let one = this.state.one;
                this.setState({one:!one});
                if(one){
                    this.setState({regenerativeMedicine:"nothing"},function () {
                        this.setDisplay();
                    })
                }
                else {
                    this.setState({regenrativeMadicine:"5c0ff50063580f122d7e750b"},function () {
                        this.setDisplay();
                    })
                }
                break;
            case 2:
                let two = this.state.two;
                this.setState({two:!two});
                if(two){
                    this.setState({rehabilitation:"nothing"},function () {
                        this.setDisplay();
                    })
                }
                else {
                    this.setState({rehabilitation:"5c0ffaeb63580f122d7e750e"},function () {
                        this.setDisplay();
                    })
                }
                break;
        }
    }

    render(){
        let {publicationCategory, categoryList, page, final,totalPages} = this.state;
        let cards=null;
        let categories = null;
        if(categoryList) {
            categories = categoryList.map((value,index)=>(<li key={index} onClick={()=>this.checkChange(1)}><input type="checkbox" name="Regenerative Medicine" checked={value.check}/><span>{value.name}</span></li>))
        }
        if(final){
            cards = final.map((value,index)=>(<div key={index} className="post-casestudy">
                    <div className="img-dev">
                        <Link href={page+value.slug}><a><img src={value.featuredImage?value.featuredImage.url:"https://rs-cms.s3.amazonaws.com/pics/Yk_kkbCUx-_NPr_2.png"}/></a></Link>
                    </div>
                    <div>
                        <Link href={page+value.slug}><a>{value.title}</a></Link>
                        <Link href={page+value.slug}><a>Read More</a></Link>
                    </div>
                </div>
            ))
        }
        return (
            <section className="casestudy" id="scroll">
                <div className="container">
                    <div className="casestudy-primary">
                        <div>
                            <div className="casestudy-text">
                                <span>{publicationCategory}</span>
                                <span>Filter by topic categories</span>
                                <div className="list-dev">
                                    <ul>
                                        {categories && categories}
                                    </ul>
                                </div>
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
export default webinarsCategoty;