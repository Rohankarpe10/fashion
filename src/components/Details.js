import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer, ButtonContainer1} from './Button';
import styled from 'styled-components';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id,company,img,info,price,title,inCart, size} = value.mProductsDetail;

                    return(
                        <div className="container py-5">
                        {/*Title*/}
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-title my-5">
                                <h1>{title}</h1>
                            </div>
                        </div>
                        
                        {/*Product Info*/}
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <img src={img} className="img-fluid" alt="product" />
                            </div>

                            {/*Product Text*/}
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h1 className="font-weight-bold">{company}</h1>
                                
                                <h2>{title}</h2>
                                
                                <br/><br/>

                                <h3 className="text-title text-uppercase text-muted mt-3 mb-2">
                                Made By: <span className="text-uppercase">{company}</span>
                                </h3>

                                <br/><br/>

                                <h3 className="text-Greyblue">
                                <strong>
                                    Size: <span></span>{size}
                                </strong>
                                </h3>

                                <br/>

                                <h3 className="text-Greyblue">
                                <strong>
                                    Price: <span>€</span>{price}
                                </strong>
                                </h3>

                                <p className="text-capitalize font-weight-bold mt-5 mb-0">
                                    Some info about product:
                                </p>
                                <p className="text-muted lead">
                                    {info}
                                </p>

                                <br/><br/><br/><br/>

                                {/*Buttons*/}
                                <div>
                                    <Link to="/men">
                                        <ButtonContainer1 BTP>Back to Products</ButtonContainer1>
                                    </Link>

                                    <ButtonContainer cart disabled={inCart?true:false} onClick={() => {
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}>
                                        {inCart? "inCart":"Add to Cart"}
                                    </ButtonContainer>
                                </div>

                            </div>
                        </div>

                        </div>
                    )
                }} 
            </ProductConsumer>
        )
    }
}

