import React, { Component } from 'react'

export default class Default extends Component {
    render() {

        console.log(this.props);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1 className="display-3 text-danger">404</h1>
                        <h2>Page Not Found</h2>

                        <h3>The page <span className="text-danger">{this.props.location.pathname}</span>{""} you are tring to access was not found</h3>
                    </div>
                </div>
            </div>
        )
    }
}
