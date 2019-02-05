import React, {Component} from 'react';
import {API_PATH} from '../apiconfig';
import Link from 'next/link';
import axios from 'axios';

class Search extends Component {
    render(){
        return(
            <div class="search">
                <div class="search__inner_1  search__inner_1--down">
                    <div class="container  custom-container header">
                    <h1 class="headerh2">DEPARTMENTS</h1>
                    <hr/>
                </div>
                <div class="container custom-container">
                    <div class="row make-webline">
                        <div class="col-2">
                            <div class="overall">
                                <div class="image">
                                <img src="img/dep-pic-1.png"/>
                                </div>
                                <p class="tag-line">Audio and Electronics</p> 
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="overall">
                                <div class="image">
                                    <img src="img/dep-pic-2.png"/>
                                </div>
                                <p class="tag-line">Audio and Electronics</p> 
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="overall">
                                <div class="image">
                                    <img src="img/dep-pic-3.png"/>
                                </div>
                                <p class="tag-line">Audio and Electronics</p> 
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="overall">
                                <div class="image">
                                    <img src="img/dep-pic-4.png"/>
                                </div>
                                <p class="tag-line">Audio and Electronics</p> 
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="overall">
                                <div class="image">
                                    <img src="img/dep-pic-5.png"/>
                                </div>
                                <p class="tag-line">Custom Gauges</p> 
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="overall">
                                <div class="image">
                                    <img src="img/dep-pic-6.png"/>
                                </div>
                                <p class="tag-line">Body Parts</p>  
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="overall">
                                <div class="image">
                                    <img src="img/dep-pic-7.png"/>
                                </div>
                                <p class="tag-line">Wheel Tires</p> 
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="overall">
                                <div class="image">
                                    <img src="img/dep-pic-8.png"/>
                                </div>
                                <p class="tag-line">Automative Light</p>  
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="overall">
                                <div class="image">
                                    <img src="img/dep-pic-9.png"/>
                                </div>
                                <p class="tag-line">Dish Cover</p>  
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="overall">
                                <div class="image">
                                    <img src="img/dep-pic-10.png"/>
                                </div>
                            <p class="tag-line">View More</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        )
    }
}
export default Search;