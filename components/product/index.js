import  React , { Component } from 'react';
import Link from 'next/link'
import axios from 'axios';
import RequestDemo from '../requestDemo';
class  Product extends Component{
            state = {
                products : null,
                err:null
            }

            componentWillMount(){
                axios.get('http://54.234.86.247:3000/api/products')
                    .then((res)=>{
                            this.setState({products:res.data.products})
                    })
                    .catch(err=>{this.setState({err:err})})
            }
    render() {
                let dynamic=null;
                if (this.state.products)
                {
                  dynamic =  this.state.products.map((value,index)=>{
                      if (index===0){
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
                                          <div className="header-image">
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
                                              <Link href={{ pathname: 'product', query: { title: value.slug }}}><a>LEARN MORE</a></Link>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </section>
                          </section>
                      }
                      else if(index%2===0){
                          return<section className="odd-product" key={index}>
                          <section className="second-section">
                              <div className="container custom-container">
                                  <div className="row flex">
                                      <div className="PTL-PEGASUS">
                                          <span>{value.title}</span><p>{value.leadText}</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="container custom-container">
                                  <div className="row image-container">
                                      <div className="col-sm-4 ms">
                                          <div className="second">
                                              <div dangerouslySetInnerHTML={{__html: value.shortDescription}}></div>
                                              <br/>
                                              <br/>
                                              <h3><b>Specifications</b></h3>
                                              <ul>
                                                  {Object.keys(value.spec.Name).map((data,i)=>{
                                                      return <li key={i}><span><b>{value.spec.Name[data]}:</b></span><span> </span><span>{value.spec.Detail[data]}</span></li>
                                                  })}
                                              </ul>

                                          </div>
                                      </div>
                                      <div className="col-sm-8 mn">
                                          <img src={value.featuredImage && value.featuredImage.url} className="image34"/>
                                      </div>

                                  </div>
                              </div>
                          </section>
                          </section>
                      }
                      else {
                          return<section className="even-product" key={index}>
                              <section className="third-section">
                                  <div className="container custom-container">
                                      <div className="row flex">
                                          <div className="PTC-PEGASUS">
                                              <span>{value.title}</span><p>{value.leadText}</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="container custom-container">
                                      <div className="row image-container">

                                          <div className="col-sm-6 mn">
                                              <img src={value.featuredImage && value.featuredImage.url} className="image34"/>
                                          </div>
                                          <div className="col-sm-6 ms">
                                              <div>
                                                  <div dangerouslySetInnerHTML={{__html: value.shortDescription}}></div>
                                                  <br/>
                                                  <br/>
                                                  <h3><b>Specifications</b></h3>
                                                  <ul>
                                                      {Object.keys(value.spec.Name).map((data,indexx)=>{
                                                          return <li key={indexx}><span><b>{value.spec.Name[data]}:</b></span><span> </span><span>{value.spec.Detail[data]}</span></li>
                                                      })}
                                                  </ul>
                                              </div>
                                          </div>

                                      </div>
                                  </div>

                              </section>
                          </section>
                      }
                    })
                }
        return (
            this.state.products ? <div>
                {dynamic}
                <RequestDemo/>
            </div>:<div>
                <section className="first-product">
                <section className="first-section">
                    <div className="third-row">
                        <div className="container custom-container">
                            <div className="row flex">
                                <div className="header-text text-extra">
                                    <p className="Product-text"><span>Loading ... </span></p>
                                </div>
                            </div>
                        </div>
                        <div className="container custom-container">
                            <div className="row flex">
                                <div className="header-image">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </section>
                <RequestDemo/>
            </div>
        )
    }
}
export default Product;
