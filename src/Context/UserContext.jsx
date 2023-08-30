import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [formData, setFormData] = useState([]);

    return (
        <UserContext.Provider value={{ formData, setFormData }}>
            {children}
        </UserContext.Provider>
    );
};
