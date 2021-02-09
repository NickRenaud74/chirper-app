import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

function PrivateRoute({children, authedUser, ...rest}) {
    return (
        <Route
            {...rest}
            render={({location}) => {
                return authedUser !== null
                    ? children
                    : <Redirect to={{
                        pathname: '/login',
                        state: { from: location }
                    }} />
            }}
        />
    )
}

PrivateRoute.propTypes = {
    children: PropTypes.node,
    authedUser: PropTypes.string
}
export default PrivateRoute