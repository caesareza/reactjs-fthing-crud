import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import API from '../../utils/API';

const CustomerEdit = () => {
    const {id} = useParams();
    const [idCustomer, setIdCustomer] = useState(id);
    const [submitStatus, setSubmitStatus] = useState(false);
    const [customerForm, setCustomerForm] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState({
        name: '',
        email: '',
        gender: '',
        is_married: '',
        address: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        async function updateCustomer() {
            const res = await API.patch(`/customer/${idCustomer}`, selectedCustomer);
            const data = await res.data;
            console.log(data);
            setSubmitStatus(false);
            setCustomerForm(true);
        }

        updateCustomer();
    }

    const handleOnChange = (key, value) => setSelectedCustomer({...selectedCustomer, [key]: value})

    useEffect(() => {
        async function fetchDetailCustomer() {
            const res = await API.get(`/customer/${id}`, {});
            const detailcustomer = res.data.result;
            setSelectedCustomer({
                name: detailcustomer.name,
                email: detailcustomer.email,
                gender: detailcustomer.gender,
                is_married: detailcustomer.is_married,
                address: detailcustomer.address
            });
        }

        fetchDetailCustomer();
    }, [id])

    return (
        <>
            {
                customerForm ? (
                    <div className="notif notif-success">
                        Success Update Customer
                    </div>
                ) : (
                    <div className="customer-add">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <label>Name</label>
                                <input type="text" name="name" required="required" value={selectedCustomer.name}
                                       onChange={e => handleOnChange('name', e.target.value)}/>
                            </div>
                            <div className="row">
                                <label>Email</label>
                                <input type="text" name="email" required="required" value={selectedCustomer.email}
                                       onChange={e => handleOnChange('email', e.target.value)}/>
                            </div>
                            <div className="row">
                                <label>Gender</label>
                                <select name="gender" value={selectedCustomer.gender}
                                        onChange={e => handleOnChange('gender', e.target.value)}>
                                    <option value="0">Female</option>
                                    <option value="1">Male</option>
                                </select>
                            </div>
                            <div className="row">
                                <label>Married Status</label>
                                <select name="is_married" value={selectedCustomer.is_married}
                                        onChange={e => handleOnChange('is_married', e.target.value)}>
                                    <option value="0">Single</option>
                                    <option value="1">Married</option>
                                </select>
                            </div>
                            <div className="row">
                                <label>Address</label>
                                <textarea rows="7" required="required" value={selectedCustomer.address}
                                          onChange={e => handleOnChange('address', e.target.value)}></textarea>
                            </div>
                            <input type="submit" value={submitStatus ? 'Saving..' : 'Submit Changes'}/>
                        </form>
                    </div>
                )
            }
        </>
    )
}

export default CustomerEdit;