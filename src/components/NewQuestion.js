import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Card, CardHeader, Typography, TextField, Button } from '@material-ui/core'
import { useStyles } from '../styles/cardStyles'
import { saveQuestion } from '../actions/questions'

function NewQuestion() {
    const [optionOne, setOptionOne] = useState('')
    const [optionTwo, setOptionTwo] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    function handleChange(e) {
        const { name, value } = e.target
        if (name === 'optionOne') {
            setOptionOne(value)
        } else if (name === 'optionTwo') {
            setOptionTwo(value)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(saveQuestion({ optionOneText: optionOne, optionTwoText: optionTwo }))
        history.push('/')
    }
    
    const classes = useStyles()
    return (
        <Card raised className={classes.root}>
            <CardHeader
                title='Create A New Question'
                className={classes.cardHeader}
            />
            <Typography variant='h6' style={{margin: '1rem'}}>Would you rather ... </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    required 
                    fullWidth
                    variant='outlined'
                    label='Option One'
                    name='optionOne'
                    value={optionOne}
                    size='small'
                    margin='normal'
                    onChange={handleChange}
                />
                <Typography variant='subtitle2'>OR</Typography>
                <TextField
                    required
                    fullWidth
                    variant='outlined'
                    label='Option Two'
                    name='optionTwo'
                    value={optionTwo}
                    size='small'
                    margin='normal'
                    onChange={handleChange}
                />
                <Button type="submit" variant='contained' className={classes.button}>
                    Submit
                </Button>
            </form>
        </Card>

    )
}

export default NewQuestion