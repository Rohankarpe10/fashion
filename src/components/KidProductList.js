import React, { Component } from 'react';
import KidProducts from './KidProducts';
import Title from './Title';

export default class KidProductList extends Component {
    state={
        kidproducts:[]
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                    <Title name="kid" title="products"></Title>
                        <div className="row">

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
