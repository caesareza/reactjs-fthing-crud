import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import API from '../../utils/API';

const Loading = _ => <>Loading</>

const CustomerDetailContainer = ({data}) => {
    return(
        <>
            <h2 title={data.name}>{data.name}</h2>
            <span>{data.email}</span>
            <span>{data.address}</span>
        </>
    );
}

const CustomerDetail = () => {
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        async function fetchDetailCustomer(){
            const res = await API.get(`/customer/${id}`, {});
            const detailcustomer = res.data.result;
            setDetail(detailcustomer);
            setLoading(false);
        }
        fetchDetailCustomer();

        document.title = 'Detail Customer - ReactJSHookCustomer';
    }, [id, setLoading, setDetail])

    return(
        <div className="customer-detail">
            {/*<h1 title="Customer Detail">Customer Detail</h1>*/}
            {
                loading ? (
                    <Loading />
                ) : (
                    detail && (<CustomerDetailContainer data={detail} />)
                )
            }
        </div>
    )
}

export default CustomerDetail;