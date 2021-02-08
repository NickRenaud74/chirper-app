import React, { useState } from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import { useStyles } from '../../styles/styles'
import { Card, CardHeader, CardMedia } from '@material-ui/core'
import logo from '../../images/react-logo.png'
import NewUser from './NewUser'
import ExistingUser from './ExistingUser'


function Login() {
    const [toDashboard, setToDashboard] = useState(false)
    const [expanded, setExpanded] = useState(false)
    const classes = useStyles()
    const { state } = useLocation()

    if (toDashboard) {
        return <Redirect to={state?.from || '/'} />
    }

    const handleExpand = (panel) => (e, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    };

    return (
        <Card raised className={classes.root}>
            <CardHeader
                title={'Welcome to the Would You Rather App!'}
                className={`${classes.cardHeader} ${classes.centerText}`}
            />
            <CardMedia
                component='img'
                src={logo}
                className={classes.appLogo}
            />
            <ExistingUser
                setToDashboard={setToDashboard}
                handleExpand={handleExpand}
                expanded={expanded}
            />
            <NewUser
                setToDashboard={setToDashboard}
                handleExpand={handleExpand}
                expanded={expanded}
            />
        </Card>
    )
}

export default Login