import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ButtonContainer, ButtonContainer1} from './Button';
import {Link} from 'react-router-dom';


export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;
                    
                    if(!modalOpen){
                        return null;
                    }
                    else{

                        return(
                            <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                        <h2 className="font-weight-bold">Item Added to Cart</h2>
                                        <img src={img} className="img-fluid" alt="product" />
                                        <h3>{title}</h3>
                                        <h4 className="text-muted">Price: € {price}</h4>

                                        <Link to="/men">
                                            <ButtonContainer1 store onClick={() => closeModal()}>
                                                Continue Shopping
                                            </ButtonContainer1>
                                        </Link>

                                        <Link to="/cart">
                                            <ButtonContainer cart onClick={() => closeModal()}>
                                                Go to Cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        )
                        
                    }
                    
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background:var(--mainWhite);
}
`;
