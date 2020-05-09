import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ButtonContainer, ButtonContainer1} from './Button';
import {Link} from 'react-router-dom';


export default class StoreModal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {storeModalOpen, closeStoreModal} = value;
                    const {img, address1, address2} = value.storeModalProduct;
                    
                    if(!storeModalOpen){
                        return null;
                    }
                    else{

                        return(
                            <ModalContainer1>
                            <div className="container">
                                <div className="row">
                                    <div id="storemodal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                        <h2 className="font-weight-bold">Nearby Store</h2>
                                        <img src={img} className="img-fluid" alt="product" />
                                        <h5>Available in Store:</h5>
                                        <h3 className="font-weight-bold">{address1}</h3>
                                        <h4 className="font-weight-bold">{address2}</h4>

                                        <Link to="/men">
                                            <ButtonContainer1 store onClick={() => closeStoreModal()}>
                                                Continue Shopping
                                            </ButtonContainer1>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </ModalContainer1>
                        )
                        
                    }
                    
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer1 = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#storemodal{
    background:var(--mainWhite);
}
`;
