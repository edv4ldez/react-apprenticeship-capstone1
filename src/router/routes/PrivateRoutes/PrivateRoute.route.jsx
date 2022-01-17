import React from 'react'
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute({
    isAuthenticated,
    component: Component,
    ...rest //exact path ...
}) {

    localStorage.setItem('lastPath', rest.location.pathname);//Save the last route name

    return (
        <Route {...rest}
            component={(props) => (
                (isAuthenticated)
                    ? (<Component {...props} />)
                    : (<Redirect to='/login' />)
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

export default PrivateRoute;