import React, {useState} from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography, Input, IconButton, Avatar, Button, TextField, Tooltip } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useStyles } from '../styles/cardStyles'
import { saveCreateUser } from '../actions/users'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'


function NewUser() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [avatarUrl, setAvatarUrl] = useState('')
    const [toDashboard, setToDashboard] = useState(false)
    const classes = useStyles()
    const dispatch = useDispatch()
    

    function handleChange(e) {
        const { name, value } = e.target
        if (name === 'firstName') return setFirstName(value)
        else if (name === 'lastName') return setLastName(value)
        else if (name === 'avatarUrl') {
            const reader = new FileReader()
            const file = e.target.files[0]
            reader.onloadend = event => setAvatarUrl(event.target.result)
            reader.readAsDataURL(file)
        } 
    }

    function formatUser(fName, lName) {
        const name = `${fName[0].toUpperCase() + fName.slice(1)} ${lName[0].toUpperCase() + lName.slice(1)}`
        const id = (fName + lName).toLowerCase()
        return {name, id}
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const { name, id } = formatUser(firstName, lastName)
        await dispatch(saveCreateUser({ name, id, avatarUrl }))
        await dispatch(setAuthedUser(id))
        setToDashboard(true)
    }

    toDashboard && <Redirect to='/' />
        
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}  >
                <Typography variant='subtitle1' className={classes.centerText}>Create A New Account</Typography>
            </AccordionSummary>
            <form onSubmit={handleSubmit}>
                <AccordionDetails className={classes.createUser}>
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
                        name='avatarUrl'
                        onChange={handleChange}
                    />
                    <label htmlFor='avatar-button-file'>
                        <Tooltip title='Upload your avatar' arrow placement='top-end'>
                            <IconButton aria-label='upload picture' component='span'>
                                <Avatar src={avatarUrl} className={classes.avatarMed}></Avatar>
                            </IconButton>
                        </Tooltip>
                    </label>
                </AccordionDetails>
                <Button type='submit' className={classes.button}>Create User</Button>
            </form>
        </Accordion>
    )
}

export default NewUser