import React from 'react';

const CustomerIndex = () => {
    return(
        <div className="customer-home">
            <h1 title="Customer List">Customer List</h1>
            {/*<div className="btn-container"><span className="btn btn-add">Add Customer</span></div>*/}
            <div className="customer-list">
                <div className="chead">
                    <div>ID</div>
                    <div>Name</div>
                    <div>Email</div>
                    <div>Address</div>
                    <div>Created at</div>
                    <div></div>
                </div>
                <div className="cbody">
                    <div className="cbody-tr">
                        <div>1</div>
                        <div>Nisa</div>
                        <div>nisa@local.fr</div>
                        <div>Jakarta Barat</div>
                        <div>12 September 2020</div>
                        <div className="action">
                            <nav>
                                <span>edit</span>
                                <span>detail</span>
                            </nav>
                        </div>
                    </div>
                    <div className="cbody-tr">
                        <div>2</div>
                        <div>Lala</div>
                        <div>nisa@local.fr</div>
                        <div>Jakarta Barat</div>
                        <div>12 September 2020</div>
                        <div className="action">
                            <nav>
                                <span>edit</span>
                                <span>detail</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CustomerIndex;