import React, {Component} from 'react';
import Link from 'next/link';
import ReactPaginate from 'react-paginate';
import { RestructorData } from "../../functions";
import ContentLoader  from 'react-content-loader';
import ScrollableAnchor, { goToAnchor, configureAnchors  } from 'react-scrollable-anchor';
class StoriesCategory extends Component {
    state={
        storiesCategory: null,
        stories: null,
        publicationsCopy: null,
        publicationDestructure: null,
        totalPages:null,
        final: null
    };
    async componentWillReceiveProps(nextProps) {
        let {publicationCategory, stories} = nextProps;
        await this.setState({publicationCategory:publicationCategory,stories:stories});
        await this.setDisplay();
          }
     setDisplay(){
        let newCheck=true;
        let temp=[];
         this.state.categoryList.forEach((tag)=>{
             if (tag.check===true){
                 newCheck=false;
             }
         });

         if(newCheck){
             temp=this.state.publications?this.state.publications:[];
         }
         else {
             this.state.publications&&this.state.publications.forEach((val)=>{
                 let check = 0;
                 val.selectTags.forEach(data=>{
                     if (check ===0){
                         this.state.categoryList.forEach((tag)=>{
                             if ( data === tag.id && tag.check===true){
                                 temp.push(val);
                                 check = 1;
                             }
                         })
                     }
                 })
             });
         }
         let restructured = RestructorData(temp, 10);
     this.setState({publicationDestructure:restructured, final: restructured[0], totalPages: restructured.length}, function () {
     })
    };

    returnData = (index) => {
        this.setState({final: this.state.publicationDestructure[index.selected]});
        configureAnchors({offset: -60, scrollDuration: 1000});
        goToAnchor('scroll')
    };

    checkChange=(value)=>{
                let temp = [...this.state.categoryList];
                let change = temp[value].check;
                temp[value].check=!change;
                this.setState({categoryList:temp});
                this.setDisplay();
        };

    render(){
        let {publicationCategory, final,totalPages} = this.state;
        let cards=null;

        if(final){
            cards = final.map((value,index)=>(<div key={index} className="post-casestudy">
                    <div className="img-dev">
                        <Link href={page+value.slug}><a><img src={value.featuredImage?value.featuredImage.url:"https://rs-cms.s3.amazonaws.com/pics/Yk_kkbCUx-_NPr_2.png"}/></a></Link>
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
export default StoriesCategory;