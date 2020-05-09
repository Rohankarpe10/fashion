import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';

export default class MenProducts extends Component {
    render() {

        const {id, title, img, price, inCart} = this.props.mproduct;

        return (

            
            
            <div className="col-13 mx-auto col-md-6 col-lg-3 my-3">
                    <div className="card">
                    <ProductConsumer>
                    {(value) => (

                        <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                        <Link to='/details'>
                            <img src={img} alt="MenProduct" className="card-img-top" />
                        </Link>

                        <button className="store-btn" onClick={() => {
                            value.openStoreModal(id);
                        }}>
                            <i className="fas fa-store" />
                        </button>

                        <button className="cart-btn" disabled={inCart ? true : false} 
                        onClick={() => {
                            value.addToCart(id);
                            value.openModal(id);
                        }}>
                            {inCart?(<p className="text-capitalize mb-0" disabled> in cart</p> ):(<i className="fas fa-shopping-cart" />)}
                        </button>
                    </div>
                    )}

                    </ProductConsumer>

                { /* Card Footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="Greyblue mb-0">
                        <span className="mr-3">€</span>
                            {price}
                        </h5>   
                    </div>
                </div>
            </div>

        )
    }
}

ProductConsumer.propTypes={
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
};

// const ProductWrapper = styled.div`
// .card{
//     border-color:transparent;
//     transition:all 0.8s linear;
// }

// .card-footer{
//     background:transparent;
//     border-top:transparent;
//     transition:all 0.7s linear;
// }

// &:hover{
//     .card{
//         border:0.05rem solid rgba(0,0,0,0.2);
//         box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2)
//     }

//     .card-footer{
//         background:#263238;
//         color:var(--mainWhite);
        
//     }
// }

// .img-container{
//     position:relative;
//     overflow:hidden;
// }

// .card-img-top{
//     transition: all 0.3s linear;
// }

// .img-container:hover .card-img-top{
//     transform: scale(1.3);
// }

// .cart-btn{
//     position:absolute;
//     bottom:0;
//     right: 0;
//     padding: 0.2rem 0.4rem;
//     background: var(--mainBlack);
//     border: none;
//     color: var(--mainWhite);
//     font-size:2rem;
//     border-radius: 1.2rem 0 0 0;
//     transform:translate(100%, 100%);
//     transition: all 0.8s linear;
// }

// .store-btn{
//     position:absolute;
//     bottom:0;
//     left: 0;
//     padding: 0.2rem 0.4rem;
//     background: var(--mainBlack);
//     border: none;
//     color: var(--mainWhite);
//     font-size:2rem;
//     border-radius: 0 1.2rem 0 0;
//     transform:translate(-100%, 100%);
//     transition: all 0.8s linear;
// }

// .img-container:hover .cart-btn{
//     transform: translate(0,0);
// }

// .img-container:hover .store-btn{
//     transform: translate(0,0);
// }

// .cart-btn:hover{
//     background:#b2ff59 !important;
//     color:var(--mainBlack) !important;
//     font-size:2rem; 
//     border:none;
//     cursor:pointer; 
// }

// .store-btn:hover{
//     background:#b2ff59 !important;
//     color:var(--mainBlack) !important;
//     font-size:2rem; 
//     border:none;
//     cursor:pointer; 
// }
// `;