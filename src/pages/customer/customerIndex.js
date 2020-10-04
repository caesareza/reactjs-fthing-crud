import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import API from '../../utils/API';

const Loading = _ => (
    <div className="loading">
        Loading ..
    </div>
)

const CustomerDeleteContainer = ({btnHapus, btnBatalkan}) => {
    return(
        <div className="customer-delete">
            <div className="dialog">
                <h3>Hapus Customer ..? </h3>
                <nav className="btn-container">
                    <span className="btn btn-delete" onClick={btnHapus}>Hapus</span>
                    <span className="btn btn-cancel" onClick={btnBatalkan}>Batalkan</span>
                </nav>
            </div>
        </div>
    )
}

const CustomerContainer = ({data}) => {
    const [hapusDialog, setHapusDialog] = useState(false);
    const [customerYangAkanDihapus, setCustomerYangAkanDihapus] = useState(null);
    let history = useHistory();

    const handleDetailCustomer = (id) => {
        history.push(`/customer/${id}`);
    }

    const handleEditCustomer = (id) => {
        history.push(`/customer/edit/${id}`);
    }

    const handleHapusCustomer = (id) => {
        setHapusDialog(true);
        setCustomerYangAkanDihapus(id);
    }

    const handleHapusBatalkan = () => {
        setHapusDialog(false);
    }

    const handleHapusYes = () => {
        async function hapusCustomer(){
            const res = await API.delete(`/customer/${customerYangAkanDihapus}`);
            const data = await res.data;
            console.log(data);
        }
        hapusCustomer();
        setTimeout(() => {
            setHapusDialog(false);
            window.location.reload(false)
        }, 2000);
    }

    return(
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
                                            <span onClick={() => handleDetailCustomer(value.id)}>Detail</span>
                                            <span>Edit</span>
                                            <span onClick={() => handleHapusCustomer(value.id)}>Hapus</span>
                                        </nav>
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>

            {
                hapusDialog && (<CustomerDeleteContainer btnHapus={handleHapusYes} btnBatalkan={handleHapusBatalkan} />)
            }

        </>
    )
}

const CustomerIndex = () => {
    const [cust, setCust] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        async function fetchCustomer(){
            const c = await API.get('/customer', {});
            const data = await c.data;
            setCust(data.result.rows)
            setLoading(false)
        }
        fetchCustomer();

        document.title = 'ReactJS Customer CRUD - ReactJSHookCustomer';
    }, [setCust, setLoading]);

    return (
        <div className="customer-home">
            <h1 title="Customer List">Customer List</h1>
            {/*<div className="btn-container"><span className="btn btn-add">Add Customer</span></div>*/}
            {
                loading ?
                    (<Loading />)  :
                    (<CustomerContainer data={cust} />)
            }
        </div>
    )
}


export default CustomerIndex;