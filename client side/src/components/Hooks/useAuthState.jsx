import React, { useContext } from 'react';
import { Authconext } from '../Usercontext/Usercontext';

const useAuthState = () => {
    const  all=useContext(Authconext)
    return all;
};

export default useAuthState;