import React from 'react'
import { Typography } from '@material-ui/core'
import {useLocation } from 'react-router-dom'

function PageNotFound() {

    const { pathname } = useLocation()
    
    return (
        <div style={{textAlign: 'center'}}>
            <Typography variant='h1'>404</Typography>
            <Typography variant='h6'>The page at { pathname } does not exist.</Typography>
        </div>
    )
}

export default PageNotFound