/**
 * Created by FaZi on 12/10/2018.
 */
import React, {Component} from 'react';
import ReactPaginate from 'react-paginate';
class PublicationCategoty extends Component {
    state={
        publicationCategory: null,
        publications: null,
        publicationsCopy: null,
        publicationDestructure: null,
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
            let {publicationCategory, publications} = nextProps;
          await this.setState({publicationCategory:publicationCategory,publications:publications})
         await this.setDisplay();
          }
     setDisplay(){
        let { regenerativeMedicine,rehabilitation,photobiomodulation,athletics,humanMedicine,business ,wellness,
            underwaterTreadmill,coldCompression,stanceAnalyzer,emergingTrends,needleScope } = this.state;
        let temp=[];
         this.state.publications.forEach((val)=>{
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
     this.setState({publicationsCopy:temp}, function () {
         this.deStructure();
     })
    };

    deStructure(){
        let publicationsCopy = this.state.publicationsCopy;
        if(publicationsCopy.length%10===0){

        }
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
        console.log("khasmi yadha error",this.state.publicationsCopy)
        let {publicationCategory, publicationsCopy, one, two, three, four, five, six, seven, eight, nine, ten , eleven, twelve} = this.state;
        let cards;
        if(publicationsCopy){
            cards = publicationsCopy.map((value,index)=>(<div key={index} className="post-casestudy">
                    <div className="img-dev">
                        <a href="#"><img src={value.featuredImage?value.featuredImage.url:"https://rs-cms.s3.amazonaws.com/pics/Yk_kkbCUx-_NPr_2.png"}/></a>
                    </div>
                    <div>
                        <a>{value.title}</a>
                        <a>Read More</a>
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
                                <span>{publicationCategory}</span>
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
                            {cards}
                            <div>
                                <ReactPaginate previousLabel={<i className="fa fa-chevron-left "> </i>}
                                               nextLabel={<i className="fa fa-chevron-right "> </i>}
                                               breakLabel={". . ." }
                                               breakClassName={"break-me"}
                                               pageCount={10}
                                               marginPagesDisplayed={2}
                                               pageRangeDisplayed={5}
                                    // onPageChange={this.handlePageClick}
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

};
export default PublicationCategoty;