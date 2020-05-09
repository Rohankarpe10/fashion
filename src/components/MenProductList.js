import React, { Component } from 'react';
import MenProducts from './MenProducts';
import Title from './Title';
import {ProductConsumer} from '../context';

export default class MenProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                    <Title name="men" title="products"></Title>
                        <div className="row">
                            <div className="col-2 font-weight-bold">
                            <div><h4 className="font-weight-bold">FILTERS</h4></div>
                            <div><hr></hr></div>
                            <div><h5>Categories</h5></div>
                            
                            <div className="filter">
                                <input type="checkbox"></input>
                                <h6 classname="check">Shirts</h6>
                            </div>

                            <div className="filter">
                                <input type="checkbox"></input>
                                <h6 classname="check">T-Shirts</h6>
                            </div>

                            <div className="filter">
                                <input type="checkbox"></input>
                                <h6 classname="check">Jeans</h6>
                            </div>

                            <div className="filter">
                                <input type="checkbox"></input>
                                <h6 classname="check">Shoes</h6>
                            </div>

                            <div><hr></hr></div>

                            <div><h5>Brand</h5></div>

                            <div className="filter">
                                <input type="checkbox"></input>
                                <h6 classname="check">H&M</h6>
                            </div>

                            <div className="filter">
                                <input type="checkbox"></input>
                                <h6 classname="check">Moda Rapido</h6>
                            </div>

                            <div className="filter">
                                <input type="checkbox"></input>
                                <h6 classname="check">Roadster</h6>
                            </div>

                            <div className="filter">
                                <input type="checkbox"></input>
                                <h6 classname="check">Puma</h6>
                            </div>

                            <div className="filter">
                                <input type="checkbox"></input>
                                <h6 classname="check">Jack & Jones</h6>
                            </div>

                            <div className="filter">
                                <input type="checkbox"></input>
                                <h6 classname="check">Tommy Hilfiger</h6>
                            </div>

                            <div className="filter">
                                <input type="checkbox"></input>
                                <h6 classname="check">C & A</h6>
                            </div>

                            <div><hr></hr></div>
                            <div><h5>PRICE</h5></div>

                            <div className="filter">
                                <input type="checkbox"></input>
                                <h6 classname="check">€ 5 to € 10</h6>
                            </div>
                            
                            <div className="filter">
                                <input type="checkbox"></input>
                                <h6 classname="check">€ 10 to € 20</h6>
                            </div>
                            
                            <div className="filter">
                                <input type="checkbox"></input>
                                <h6 classname="check">€ 20 to € 35</h6>
                            </div>

                            <div className="filter">
                                <input type="checkbox"></input>
                                <h6 classname="check">€ 35 to € 80</h6>
                            </div>

                            <div><hr></hr></div>
                            <div><h5>COLOR</h5></div>

                            <div className="filter">
                                <input type="checkbox"></input>
                                <h6 classname="check">RED</h6>
                            </div>

                            <div className="filter">
                                <input type="checkbox"></input>
                                <h6 classname="check">BLACK</h6>
                            </div>

                            <div className="filter">
                                <input type="checkbox"></input>
                                <h6 classname="check">BLUE</h6>
                            </div>

                            <div className="filter">
                                <input type="checkbox"></input>
                                <h6 classname="check">BROWN</h6>
                            </div>

                            <div className="filter">
                                <input type="checkbox"></input>
                                <h6 classname="check">GREEN</h6>
                            </div>

                            <div className="filter">
                                <input type="checkbox"></input>
                                <h6 classname="check">GREY</h6>
                            </div>

                            <div className="filter">
                                <input type="checkbox"></input>
                                <h6 classname="check">WHITE</h6>
                            </div>

                            <div><hr></hr></div>
                            <div><h5>SORT BY</h5></div>

                            <div className="filter">
                                <input type="radio"></input>
                                <h6 classname="radio">Price: Low to High</h6>
                            </div>

                            <div className="filter">
                                <input type="radio"></input>
                                <h6 classname="radio">Price: High to Low</h6>
                            </div>

                            <div className="filter">
                                <input type="radio"></input>
                                <h6 classname="radio">Popularity</h6>
                            </div>

                            <div className="filter">
                                <input type="radio"></input>
                                <h6 classname="radio">Faster Delivery</h6>
                            </div>

                            </div>
                            
                            
                            <div className="col-10">
                            <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.mproducts.map( mproduct =>{
                                        return <MenProducts key={mproduct.id} mproduct={mproduct}/>;
                                    })
                                }}
                            </ProductConsumer>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
