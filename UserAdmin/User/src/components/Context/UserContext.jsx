import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
    const url = "https://frauddetection-uywd.onrender.com";
    const [user, setUser] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [cardRequests, setCardRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setLoading(false);
            return;
        }
        axios.get(`${url}/users/profile`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => {
            setUser(res.data.user);
            setAccounts(res.data.accounts || []);
            setCardRequests(res.data.cardRequests || []);
            setLoading(false);
        })
        .catch(() => setLoading(false));
    }, []);


    return (
        <UserDataContext.Provider value={{ user, accounts, cardRequests, loading }}>
            {children}
        </UserDataContext.Provider>
    );
};

export default UserContext;