import React from 'react'

export default function CartItem({item,value}) {

    const{id,title,img,price,total,count} = item;
    const{increment, decrement, removeItem} = value;
    return (
        <div className="row my-5 border border-light text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
            <img src = {img} style={{width:"6rem", height:"8rem"}} className="img-fluid" alt="product" />
        </div>
        
        <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">product : </span>
            {title}
        </div>

        <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">price : </span>
            {price}
        </div>

        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
            <div className="d-flex justify-content-center">
                <div>
                    <span className="btn btn-cyan mx-1" onClick={() => decrement(id)}>
                    -
                    </span>

                    <span className="btn btn-count mx-1" >{count}</span>

                    <span className="btn btn-cyan mx-1" onClick={() => increment(id)}>
                    +
                    </span>

                </div>
            
            </div>
        </div>

        <div className="col-10 mx-auto col-lg-2">
            <div className="trash-icon" onClick={() => removeItem(id)}>
                <i className="fas fa-trash" />
            </div>          
        </div>

        <div className="col-10 mx-auto col-lg-2">
            <strong>Item Total : € {total}</strong>           
        </div>

        

        </div>
    )
}
