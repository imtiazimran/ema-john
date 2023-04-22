import React, { useContext } from 'react';
import { AuthContext } from '../firebase/AuthProvider';
import { Navigate } from 'react-router-dom';

const PriveteRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)

        if(loading){
            return <div>Loading.......</div>
        }
        if(user){
            return children
        }
    return <Navigate to="/login"></Navigate>
};

export default PriveteRoute;