import React, { Fragment } from 'react'
import {useSelector} from 'react-redux'
import { useStyles } from '../../styles/styles'
import { useHistory } from 'react-router-dom'
import { CardContent, CardActions, Button, Typography } from '@material-ui/core'

function QuestionCard({ question }) {
    const authedUser = useSelector(state => state.authedUser)
    const classes = useStyles()
    const history = useHistory()

    const getAllVotes = question.optionOne.votes.concat(question.optionTwo.votes)

    function handleClick() {
        if (getAllVotes.includes(authedUser)) {
            history.push(`/questions/${question.id}/results`)
        } else {
            history.push(`/questions/${question.id}`)
        }
    }

    return (
        <Fragment>
            <CardContent className={classes.centerText} >
                <Typography variant='h6'>Would you rather </Typography>
                <Typography variant='body2'>{question.optionOne.text}</Typography>
                <br />
                <Typography variant='body2'>OR</Typography>
                <br />
                <Typography variant='body2'>{question.optionTwo.text}</Typography>
            </CardContent>
            <CardActions>
                <Button
                    className={classes.button}
                    variant='contained'
                    onClick={handleClick}
                >
                    View Poll
                </Button>
            </CardActions>
        </Fragment>
    )
}

export default QuestionCard