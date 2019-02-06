import  React , { Component } from 'react';
import Link from 'next/link'
import axios from 'axios';
import {API_PATH} from '../apiconfig'
import RequestDemo from '../requestDemo';
class  Product extends Component{
            state = {
                products : null,
                err:null
            };
            componentWillMount(){
                axios.get(API_PATH + 'products')
                    .then((res)=>{
                            this.setState({products:res.data.products})
                    })
                    .catch(err=>{
                        console.log("error", err);
                        this.setState({error:"Products Not Found"})}
                        )
            }
    render() {
                let {error} = this.state;
                let dynamic=null;
                if (this.state.products)
                {
                    let duplicate = [...this.state.products];
                    let reverse = duplicate.reverse();
                  dynamic =  reverse.map((value,index)=>{
                      // if (index===0){
                          return <section className="first-product"  key={index}>
                          <section className="first-section">
                              <div className="third-row">
                                  <div className="container custom-container">
                                      <div className="row flex">
                                          <div className="header-text text-extra">
                                              <p className="Product-text"><span>{value.leadText}</span></p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="container custom-container">
                                      <div className="row flex">
                                          <div className="header-image other-header">
                                              <img src={value.featuredImage && value.featuredImage.url} className="head-img" />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="small-upper-line flex">
                                  <div className="line line-ex"> </div>
                              </div>
                              <div className="fourth-row">
                                  <div className="custom-container container">
                                      <div className="row flex">
                                          <div className="flex-column learnmore-header learn-ex">
                                              <div className='detail-product-content'>
                                                  <div dangerouslySetInnerHTML={{__html: value.shortDescription}}></div>
                                              </div>
                                              <Link href={'/product/'+value.slug}><a>LEARN MORE</a></Link>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </section>
                          </section>
                      // }
                      // else if(index%2===0){
                      //     return<section className="odd-product" key={index}>
                      //     <section className="second-section">
                      //         <div className="container custom-container">
                      //             <div className="row flex">
                      //                 <div className="PTL-PEGASUS">
                      //                     <span>{value.title}</span><p>{value.leadText}</p>
                      //                 </div>
                      //             </div>
                      //         </div>
                      //         <div className="container custom-container">
                      //             <div className="row image-container">
                      //                 <div className="col-sm-4 ms">
                      //                     <div className="second">
                      //                         <div dangerouslySetInnerHTML={{__html: value.shortDescription}}></div>
                      //                         <br/>
                      //                         <br/>
                      //                         <h3><b>Specifications</b></h3>
                      //                         <ul>
                      //                             {Object.keys(value.spec.name).map((data,i)=>{
                      //                                 return <li key={i}><span><b>{value.spec.name[data]}:</b></span><span> </span><span>{value.spec.detail[data]}</span></li>
                      //                             })}
                      //                         </ul>
                      //
                      //                     </div>
                      //                 </div>
                      //                 <div className="col-sm-8 mn">
                      //                     <img src={value.featuredImage && value.featuredImage.url} className="image34"/>
                      //                 </div>
                      //
                      //             </div>
                      //         </div>
                      //     </section>
                      //     </section>
                      // }
                      {/*else {*/}
                          {/*return<section className="even-product" key={index}>*/}
                              {/*<section className="third-section">*/}
                                  {/*<div className="container custom-container">*/}
                                      {/*<div className="row flex">*/}
                                          {/*<div className="PTC-PEGASUS">*/}
                                              {/*<span>{value.title}</span><p>{value.leadText}</p>*/}
                                          {/*</div>*/}
                      //                 </div>
                      //             </div>
                                  {/*<div className="container custom-container">*/}
                                      {/*<div className="row image-container">*/}

                      //                     <div className="col-sm-6 mn">
                      //                         <img src={value.featuredImage && value.featuredImage.url} className="image34"/>
                      //                     </div>
                      //                     <div className="col-sm-6 ms">
                      //                         <div>
                      //                             <div dangerouslySetInnerHTML={{__html: value.shortDescription}}></div>
                      //                             <br/>
                      //                             <br/>
                      //                             <h3><b>Specifications</b></h3>
                      //                             <ul>
                      //                                 {Object.keys(value.spec.name).map((data,indexx)=>{
                      //                                     return <li key={indexx}><span><b>{value.spec.name[data]}:</b></span><span> </span><span>{value.spec.detail[data]}</span></li>
                      //                                 })}
                      //                             </ul>
                      //                         </div>
                      //                     </div>
                      //
                      //                 </div>
                      //             </div>
                      //
                      //         </section>
                      //     </section>
                      // }
                    })
                }
        return (
            this.state.products ? <div>
                {dynamic}
                <RequestDemo/>
            </div>:error ? (<div className="splash">
                <div className="lds-ellipsis">
                    <h1><strong>{error}</strong></h1>
                </div>
            </div>) : (<div className="splash">
                <div className="lds-ellipsis">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
            </div>)
        )
    }
}
export default Product;
