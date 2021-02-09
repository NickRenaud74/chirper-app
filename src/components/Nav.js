import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import { Tab, Tabs, AppBar, Avatar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { useStyles } from '../styles/styles'
import PropTypes from 'prop-types'

function Nav({authedUser}) {
    const [tab, setTab] = useState(0)
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    const history = useHistory()
    const classes = useStyles()

    const loggedIn = authedUser !== null

    function handleChange(e, newValue) {
        setTab(newValue)
    }

    function handleClick() {
        if (loggedIn) {
            dispatch(setAuthedUser(null))
            history.push('/login')
        }
    }

    return (
        <AppBar color='primary' position='static'>
            <Toolbar >
            <Tabs
                variant='standard'
                value={tab}
                    onChange={handleChange}
                style={{flex: 1}}
            >
                <Tab label='Home' component={Link} to='/' />
                <Tab label='New Question' component={Link} to='/add' />
                <Tab label='Leaderboard' component={Link} to='/leaderboard' />
                </Tabs>
                {loggedIn ?
                    <Box style={{display: 'flex'}}>
                        <Avatar className={classes.avatarXs} src={users[authedUser].avatarURL} />
                        <Typography variant='subtitle2'>
                        {`Welcome, ${users[authedUser].name}`}
                    </Typography>
                    </Box>
                    : null
                }
                <Tab label={loggedIn ? `Logout` : 'Login'} onClick={handleClick} />
                </Toolbar>
        </AppBar>
    )
}

Nav.propTypes = {
    authedUser: PropTypes.string
}

export default Nav