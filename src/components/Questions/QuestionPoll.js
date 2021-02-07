import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button } from '@material-ui/core'
import { useStyles } from '../../styles/styles'
import { saveQuestionAnswer } from '../../actions/questions'
import { useHistory } from 'react-router-dom'

function QuestionPoll({ question }) {
    const [answer, setAnswer] = useState('')
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    function handleChange(e) {
        setAnswer(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(saveQuestionAnswer({ answer, qid: question.id }))
        history.push(`/questions/${question.id}/results`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormControl className={classes.form} required >
                <FormLabel>Would You Rather ... </FormLabel>
                <RadioGroup>
                    <FormControlLabel value='optionOne' onChange={handleChange} control={<Radio />} label={`${question.optionOne.text}`} />
                    <FormControlLabel value='optionTwo' onChange={handleChange} control={<Radio />} label={`${question.optionTwo.text}`} />
                </RadioGroup>
                <Button type="submit" variant='contained' className={classes.button}>
                    Submit
                </Button>
            </FormControl>
        </form>
    )
}

export default QuestionPoll