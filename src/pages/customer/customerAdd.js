import React, {useEffect, useState} from 'react';
import API from '../../utils/API';

const Loading = () => (
    <div className="loading">
        Loading ..
    </div>
)

const CustomerAdd = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState(0);
    const [married, setMarried] = useState(0);
    const [address, setAddress] = useState('');

    const [submitStatus, setSubmitStatus] = useState(false);
    const [customerForm, setCustomerForm] =  useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();

        setSubmitStatus(true);

        const newCustomer = {
            name,
            email,
            password,
            gender,
            is_married: married,
            address
        };

        async function addCustomer(){
            const res = await API.post('/customer', newCustomer);
            const data = await res.data;
            console.log(data);
            setSubmitStatus(false);
            setCustomerForm(true);
        }
        addCustomer();
    }

    return(
        <>
            {
                customerForm ?
                    (
                        <div className="notif notif-success">
                            Success Added New Customer
                        </div>
                    ) :
                    (
                        <div className="customer-add">
                            <h1 title="Customer Add">Customer Add</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <label>Name</label>
                                    <input type="text" name="name" required="required" value={name} onChange={e => setName(e.target.value)} />
                                </div>
                                <div className="row">
                                    <label>Email</label>
                                    <input type="text" name="email" required="required" value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="row">
                                    <label>Password</label>
                                    <input type="password" name="password" required="required" value={password} onChange={e => setPassword(e.target.value)} />
                                </div>
                                <div className="row">
                                    <label>Gender</label>
                                    <select name="gender" value={gender} onChange={e => setGender(e.target.value)}>
                                        <option value="0">Female</option>
                                        <option value="1">Male</option>
                                    </select>
                                </div>
                                <div className="row">
                                    <label>Married Status</label>
                                    <select name="is_married" value={married} onChange={e => setMarried(e.target.value)}>
                                        <option value="0">Single</option>
                                        <option value="1">Married</option>
                                    </select>
                                </div>
                                <div className="row">
                                    <label>Address</label>
                                    <textarea required="required" value={address} onChange={e => setAddress(e.target.value)}></textarea>
                                </div>
                                <input type="submit" value={submitStatus ? 'Saving..' : 'Submit'} />
                            </form>
                        </div>
                    )
            }
        </>
    )
}

export default CustomerAdd;