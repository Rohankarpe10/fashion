import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row border mx-auto border-info">
                <div className="col-10 mx-auto col-lg-2">
                    <h5 className="text-uppercase font-weight-bold">products</h5>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <h5 className="text-uppercase font-weight-bold">Name of the Product</h5>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <h5 className="text-uppercase font-weight-bold">Price</h5>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <h5 className="text-uppercase font-weight-bold">Quantity</h5>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <h5 className="text-uppercase font-weight-bold">Remove</h5>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <h5 className="text-uppercase font-weight-bold">Total</h5>
                </div>
            </div>
        </div>
    )
}
