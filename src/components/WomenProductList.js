import React, { Component } from 'react';
import WomenProducts from './WomenProducts'
import Title from './Title';

export default class WomenProductList extends Component {
    state={
        womenproducts:[]
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                    <Title name="women" title="products"></Title>
                        <div className="row">

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
