import React, {Component} from 'react';
import Link from 'next/link';
import ReactPaginate from 'react-paginate';
import {configureAnchors}  from 'react-scrollable-anchor';
import { RestructorData } from "../../functions";
import ContentLoader  from 'react-content-loader'
class blogsCategoty extends Component {
    state={
        blogCategory: null,
        blogs: null,
        page:null,
        blogsCopy: null,
        blogDestructure: null,
        totalPages:null,
        final: null,
        one: true,
        two: true,
        three: true,
        four: true,
        five: true,
        six: true,
        seven: true,
        eight: true,
        nine: true,
        ten: true,
        eleven: true,
        twelve: true,
        regenerativeMedicine:"5c0ff50063580f122d7e750b",
        rehabilitation:"5c0ffaeb63580f122d7e750e",
        photobiomodulation:"5c0ff0d663580f122d7e7509",
        athletics: "5c102ee160912116086de5ce",
        humanMedicine: "5c102db860912116086de5c7",
        business: "5c10053763580f122d7e7528",
        wellness: "5c1001be63580f122d7e751e",
        underwaterTreadmill: "5c10008863580f122d7e7519",
        coldCompression: "5c10007963580f122d7e7518",
        stanceAnalyzer: "5c10006463580f122d7e7517",
        emergingTrends: "5c0ffc3263580f122d7e7510",
        needleScope: "5c0ffada63580f122d7e750d",
    };
    async componentWillReceiveProps(nextProps, nextContext) {
        let {blogCategory, blogs, page} = nextProps;
        await this.setState({blogCategory:blogCategory,blogs:blogs, page})
        await this.setDisplay();
    }
    setDisplay(){
        let { regenerativeMedicine,rehabilitation,photobiomodulation,athletics,humanMedicine,business ,wellness,
            underwaterTreadmill,coldCompression,stanceAnalyzer,emergingTrends,needleScope } = this.state;
        let temp=[];
        this.state.blogs.forEach((val)=>{
            let check = 0;
            val.selectTags.forEach(data=>{
                if (check ===0){
                    if ( data === regenerativeMedicine ||
                        data === rehabilitation ||
                        data === photobiomodulation ||
                        data === athletics ||
                        data === humanMedicine ||
                        data === business ||
                        data === wellness ||
                        data === underwaterTreadmill ||
                        data === coldCompression ||
                        data === stanceAnalyzer ||
                        data === emergingTrends ||
                        data === needleScope
                    ){
                        temp.push(val);
                        check = 1;
                    }
                }
            })
        });
        let restructured = RestructorData(temp, 10);
        console.log("restructured",restructured);
        this.setState({blogDestructure:restructured, final: restructured[0], totalPages: restructured.length}, function () {

        })
    };

    returnData = (index) => {
        configureAnchors({offset: -60, scrollDuration: 200})
        this.setState({final: this.state.blogDestructure[index.selected]})
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
            case 3:
                let three = this.state.three;
                this.setState({three:!three});
                if(three){
                    this.setState({photobiomodulation:"nothing"},function () {
                        this.setDisplay();
                    })
                }
                else {
                    this.setState({photobiomodulation:"5c0ff0d663580f122d7e7509"},function () {
                        this.setDisplay();
                    })
                }
                break;
            case 4:
                let four = this.state.four;
                this.setState({four:!four});
                if(four){
                    this.setState({athletics:"nothing"},function () {
                        this.setDisplay();
                    })
                }
                else {
                    this.setState({athletics:"5c102ee160912116086de5ce"},function () {
                        this.setDisplay();
                    })
                }
                break;
            case 5:
                let five = this.state.five;
                this.setState({five:!five});
                if(five){
                    this.setState({humanMedicine:"nothing"},function () {
                        this.setDisplay();
                    })
                }
                else {
                    this.setState({humanMedicine:"5c102db860912116086de5c7"},function () {
                        this.setDisplay();
                    })
                }
                break;
            case 6:
                let six= this.state.six;
                this.setState({six:!six});
                if(six){
                    this.setState({business:"nothing"},function () {
                        this.setDisplay();
                    })
                }
                else {
                    this.setState({business:"5c10053763580f122d7e7528"},function () {
                        this.setDisplay();
                    })
                }
                break;
            case 7:
                let seven = this.state.seven;
                this.setState({seven:!seven});
                if(seven){
                    this.setState({wellness:"nothing"},function () {
                        this.setDisplay();
                    })
                }
                else {
                    this.setState({wellness:"5c1001be63580f122d7e751e"},function () {
                        this.setDisplay();
                    })
                }
                break;
            case 8:
                let eight= this.state.eight;
                this.setState({eight:!eight});
                if(eight){
                    this.setState({underwaterTreadmill:"nothing"},function () {
                        this.setDisplay();
                    })
                }
                else {
                    this.setState({underwaterTreadmill:"5c10008863580f122d7e7519"},function () {
                        this.setDisplay();
                    })
                }
                break;
            case 9:
                let nine = this.state.nine;
                this.setState({nine:!nine});
                if(nine){
                    this.setState({coldCompression:"nothing"},function () {
                        this.setDisplay();
                    })
                }
                else {
                    this.setState({coldCompression:"5c10007963580f122d7e7518"},function () {
                        this.setDisplay();
                    })
                }
                break;
            case 10:
                let ten = this.state.ten;
                this.setState({ten:!ten});
                if(ten){
                    this.setState({stanceAnalyzer:"nothing"},function () {
                        this.setDisplay();
                    })
                }
                else {
                    this.setState({stanceAnalyzer:"5c0ffc3263580f122d7e7510"},function () {
                        this.setDisplay();
                    })
                }
                break;
            case 11:
                let eleven = this.state.eleven;
                this.setState({eleven:!eleven});
                if(eleven){
                    this.setState({emergingTrends:"nothing"},function () {
                        this.setDisplay();
                    })
                }
                else {
                    this.setState({emergingTrends:"5c0ff50063580f122d7e750b"},function () {
                        this.setDisplay();
                    })
                }
                break;
            case 12:
                let twelve = this.state.twelve;
                this.setState({twelve:!twelve});
                if(twelve){
                    this.setState({needleScope:"nothing"},function () {
                        this.setDisplay();
                    })
                }
                else {
                    this.setState({needleScope:"5c0ffada63580f122d7e750d"},function () {
                        this.setDisplay();
                    });
                }
                break;
        }
    }

    render(){
        let {blogCategory, page, final,totalPages, one, two, three, four, five, six, seven, eight, nine, ten , eleven, twelve} = this.state;
        let cards;
        if(final){

            cards= null;
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
            <section className="casestudy">
                <div className="container">
                    <div className="casestudy-primary">
                        <div>
                            <div className="casestudy-text">
                                <span>{blogCategory}</span>
                                <span>Filter by topic categories</span>
                                <div className="list-dev">
                                    <ul>
                                        <li onClick={()=>this.checkChange(1)}><input type="checkbox" name="Regenerative Medicine" checked={one}/> <span>Regenerative Medicine</span></li>
                                        <li onClick={()=>this.checkChange(2)}><input type="checkbox" name="rehabilitation" checked={two}/> <span>Rehabilitation</span></li>
                                        <li onClick={()=>this.checkChange(3)}><input type="checkbox" name="photobiomodulation" checked={three}/> <span>Photobiomodulation</span></li>
                                        <li onClick={()=>this.checkChange(4)}><input type="checkbox" name="athletics" checked={four}/> <span>Athletics</span></li>
                                        <li onClick={()=>this.checkChange(5)}><input type="checkbox" name="human-medicine" checked={five}/> <span>Human Medicine</span></li>
                                        <li onClick={()=>this.checkChange(6)}><input type="checkbox" name="business" checked={six}/> <span>Business</span></li>
                                        <li onClick={()=>this.checkChange(7)}><input type="checkbox" name="wellness" checked={seven}/> <span>Wellness</span></li>
                                        <li onClick={()=>this.checkChange(8)}><input type="checkbox" name="underwater-treadmill" checked={eight}/> <span>Underwater Treadmill</span></li>
                                        <li onClick={()=>this.checkChange(9)}><input type="checkbox" name="cold-compression" checked={nine}/> <span>Cold Compression</span></li>
                                        <li onClick={()=>this.checkChange(10)}><input type="checkbox" name="stance-analyzer" checked={ten}/> <span>Stance Analyzer</span></li>
                                        <li onClick={()=>this.checkChange(11)}><input type="checkbox" name="emerging-trends" checked={eleven}/> <span>Emerging Trends</span></li>
                                        <li onClick={()=>this.checkChange(12)}><input type="checkbox" name="needle-scope" checked={twelve}/> <span>Needle Scope</span></li>
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
export default blogsCategoty;