import React from 'react'

import {Redirect, Route} from 'react-router-dom'

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

export default PrivateRoute