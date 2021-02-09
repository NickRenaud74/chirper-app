import React, { useState } from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography, Input, IconButton, Avatar, Button, TextField, Tooltip } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useStyles } from '../../styles/styles'
import { saveCreateUser } from '../../actions/users'
import { setAuthedUser } from '../../actions/authedUser'
import PropTypes from 'prop-types'


function NewUser({ setToDashboard, handleExpand, expanded }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [avatarURL, setAvatarURL] = useState('')
    const classes = useStyles()
    const dispatch = useDispatch()


    function handleChange(e) {
        const { name, value } = e.target
        if (name === 'firstName') return setFirstName(value)
        else if (name === 'lastName') return setLastName(value)
        else if (name === 'avatarURL') {
            const reader = new FileReader()
            const file = e.target.files[0]
            reader.onloadend = event => setAvatarURL(event.target.result)
            reader.readAsDataURL(file)
        }
    }

    function formatUser(fName, lName) {
        const name = `${fName[0].toUpperCase() + fName.slice(1)} ${lName[0].toUpperCase() + lName.slice(1)}`
        const id = (fName + lName).toLowerCase()
        return { name, id }
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const { name, id } = formatUser(firstName, lastName)
        await dispatch(saveCreateUser({ name, id, avatarURL }))
        await dispatch(setAuthedUser(id))
        setToDashboard(true)
    }


    return (
        <Accordion expanded={expanded === 'panel2'} onChange={handleExpand('panel2')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}  >
                <Typography variant='h6' className={classes.centerText}>Create A New Account</Typography>
            </AccordionSummary>
            <form onSubmit={handleSubmit}>
                <AccordionDetails style={{ alignItems: 'center' }}>
                    <TextField
                        required
                        placeholder='First Name'
                        className={classes.form}
                        name='firstName'
                        value={firstName}
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        placeholder='Last Name'
                        className={classes.form}
                        name='lastName'
                        value={lastName}
                        onChange={handleChange}
                    />
                    <Input
                        accept='image/*'
                        type='file'
                        id='avatar-button-file'
                        style={{ display: 'none' }}
                        name='avatarURL'
                        onChange={handleChange}
                    />
                    <label htmlFor='avatar-button-file'>
                        <Tooltip title='Upload your avatar' arrow placement='top-end'>
                            <IconButton aria-label='upload picture' component='span'>
                                <Avatar src={avatarURL} className={classes.avatarMed}></Avatar>
                            </IconButton>
                        </Tooltip>
                    </label>
                </AccordionDetails>
                <Button type='submit' className={`${classes.loginForm} ${classes.button}`}>Create User</Button>
            </form>
        </Accordion>
    )
}

NewUser.propTypes = {
    setToDashboard: PropTypes.func,
    handleExpand: PropTypes.func,
    expanded: PropTypes.bool
}

export default NewUser