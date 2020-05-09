import React, { Component } from 'react';
import Title from './Title';

export default class Checkout extends Component {
    render() {
        return (
            <div className="container">

            <Title name="Check" title="Out"></Title>
                <div className="row">

                    <div className="col-6 mx-auto text-left text-title text-uppercase pt-5">

                        <div><h3 className="font-weight-bold">PERSONAL DETAILS</h3></div>
                        <div><hr></hr></div>
                        <br/>
                        <div className="checkout">
                            <h4>Name: </h4>
                            <input className="textbox" type="text"></input>
                        </div>

                        <br/><br/>

                        <div className="checkout">
                            <h4>Address1: </h4>
                            <input className="textbox" type="text"></input>
                        </div>

                        <br/><br/>

                        <div className="checkout">
                            <h4>Address2: </h4>
                            <input className="textbox" type="text"></input>
                        </div>

                        <br/><br/>

                        <div className="checkout">
                            <h4>DOB: </h4>
                            <input type="date"></input>
                        </div>

                        <br/><br/><br/><br/>

                        <div className="text-title"><h3 className="font-weight-bold">Shipping Address</h3></div>
                        <div><hr></hr></div>
                        <br/>
                        <div className="checkout">
                            <h4>Address1: </h4>
                            <input className="textbox" type="text"></input>
                        </div>

                        <br/><br/>

                        <div className="checkout">
                            <h4>Address2: </h4>
                            <input className="textbox" type="text"></input>
                        </div>

                        <br/><br/>

                        <div className="checkout">
                            <h4>City: </h4>
                            <input className="textbox" type="text"></input>
                        </div>

                        <br/><br/>

                        <div className="checkout">
                            <h4>Pincode: </h4>
                            <input className="textbox" type="text"></input>
                        </div>
                    </div>

                    <div className="col-6 mx-auto text-left text-title text-uppercase pt-5">
                        
                        <div className="text-title"><h3 className="font-weight-bold">PAYMENT INFORMATION</h3></div>
                        <div><hr></hr></div>
                        <br/>
                        <div className="checkout">
                            <h4>Credit Card </h4>
                            <input className="textbox" type="text"></input>
                        </div>

                        <br/><br/>

                        <div className="checkout">
                            <h4>Expiry Month: </h4>
                            <input className="textbox" type="text"></input>

                            <h4>Expiry Year: </h4>
                            <input className="textbox" type="text"></input>
                        </div>

                        <br/><br/>

                        <div className="checkout">
                            <h4>CVV: </h4>
                            <input className="textbox" type="text"></input>
                        </div>

                        <br/><br/>

                        <div className="text-right">
                        <button type="button" className="btn btn-success text-right">Buy Now</button>
                        </div>

                        
                    </div>
                </div>

            </div>
        )
    }
}
