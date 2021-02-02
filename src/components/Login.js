import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useHistory } from 'react-router-dom'
import {useStyles } from '../styles/cardStyles'
import { Card, CardHeader, Button, Select, MenuItem, CardMedia, Typography, ListItemText } from '@material-ui/core'
import { setAuthedUser } from '../actions/authedUser'
import logo from '../utils/react-logo.png'
import NewUser from './NewUser'


function Login() {
    const [user, setUser] = useState('')
    const users = useSelector(state => state.users)
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    dispatch(setAuthedUser(null))

    function handleChange(e) {
        setUser(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(setAuthedUser(user))
        history.push('/')
    }

    return (
        <Card raised className={classes.root}>
            <CardHeader
                title={'Welcome to Would You Rather!'}
                className={`${classes.cardHeader} ${classes.centerText}`}
            />
            <CardMedia
                component='img'
                src={logo}
                className={classes.appLogo}
            />
            <form onSubmit={handleSubmit}>
                <Typography variant='h6' className={classes.centerText}>Sign in as existing user</Typography>
                <Select displayEmpty value={user} onChange={handleChange} style={{ width: '-webkit-fill-available', margin: '15px' }}>
                    <MenuItem value='' disabled>Select User</MenuItem>
                    {Object.keys(users).map(user => (
                        <MenuItem key={user} value={users[user].id}>
                            <ListItemText>{users[user].name}</ListItemText>
                        </MenuItem>
                    ))}
                </Select>
                <Typography variant='h6' className={classes.centerText}>OR</Typography>
                <NewUser />
                <Button type="submit" variant='contained' className={classes.button}>
                    Submit
                </Button>
            </form>

        </Card>
    )
}

export default Login