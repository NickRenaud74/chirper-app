import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAuthedUser } from '../../actions/authedUser'
import { Accordion, AccordionDetails, AccordionSummary, Typography, Select, MenuItem, ListItemText, Button } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useStyles } from '../../styles/styles'
import PropTypes from 'prop-types'

function ExistingUser({ setToDashboard, handleExpand, expanded }) {
    const [userId, setUserId] = useState('')
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    const classes = useStyles()

    function handleChange(e) {
        setUserId(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        await dispatch(setAuthedUser(userId))
        setToDashboard(true)
    }

    return (
        <Accordion expanded={expanded === 'panel1'} onChange={handleExpand('panel1')} >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant='h6' className={classes.centerText}>Sign In As Existing User</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ justifyContent: 'center' }} >
                <form onSubmit={handleSubmit} className={classes.loginForm}>
                    <Select
                        displayEmpty
                        required
                        value={userId}
                        onChange={handleChange}
                        className={classes.loginForm}
                    >
                        <MenuItem value='' disabled>Select User</MenuItem>
                        {Object.keys(users).map(user => (
                            <MenuItem key={user} value={users[user].id}>
                                <ListItemText>{users[user].name}</ListItemText>
                            </MenuItem>
                        ))}
                    </Select>
                    <Button type='submit' className={classes.button}>
                        Login
                    </Button>
                </form>
            </AccordionDetails>
        </Accordion>
    )
}

ExistingUser.propTypes = {
    setToDashboard: PropTypes.func,
    handleExpand: PropTypes.func,
    expanded: PropTypes.bool
}

export default ExistingUser