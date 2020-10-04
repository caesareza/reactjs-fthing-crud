import React, {useEffect, useState} from 'react';
import API from '../../utils/API';

const Loading = _ => (
    <div className="loading">
        Loading ..
    </div>
)

const CustomerContainer = ({data}) => (
    <>
        <div className="customer-list">
            <div className="chead">
                <div>ID</div>
                <div>Name</div>
                <div>Email</div>
                <div>Address</div>
                <div>Gender</div>
                <div>Married</div>
                <div></div>
            </div>
            <div className="cbody">
                {
                    data && (
                        data.map((value, index) => (
                            <div className="cbody-tr" key={index}>
                                <div>{value.id}</div>
                                <div>{value.name}</div>
                                <div>{value.email}</div>
                                <div>{value.address}</div>
                                <div>{value.gender}</div>
                                <div>{value.is_married}</div>
                                <div className="action">
                                    <nav>
                                        <span>edit</span>
                                        <span>detail</span>
                                    </nav>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    </>
)

const CustomerIndex = () => {
    const [cust, setCust] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        async function fetchCustomer(){
            const c = await API.get('/customer', {});
            const data = c.data;
            setCust(data.result.rows)
            setLoading(false)
        }
        fetchCustomer();
    }, [setCust, setLoading]);

    return (
        <div className="customer-home">
            <h1 title="Customer List">Customer List</h1>
            {/*<div className="btn-container"><span className="btn btn-add">Add Customer</span></div>*/}
            {
                loading ? (<Loading />)  : (<CustomerContainer data={cust} />)
            }
        </div>
    )
}


export default CustomerIndex;