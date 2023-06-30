import React from 'react'
import { Navigate } from 'react-router';

function PrivateRoute(props) {
    return props.user ? props.children : <Navigate to='/signin' />
}

export default PrivateRoute
