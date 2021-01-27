import React from 'react'
import { useSelector } from 'react-redux'
import { CardContent, Typography, Paper, LinearProgress, Badge } from '@material-ui/core'
import { useStyles } from '../styles/cardStyles'

function QuestionResults({ question }) {
    const classes = useStyles()
    const authedUser = useSelector(state => state.authedUser)
    const users = useSelector(state => state.users)

    const userAnswer = users[authedUser].answers[question.id]

    console.log(userAnswer)

    function calculatePercentage(option) {
        const total = question.optionOne.votes.length + question.optionTwo.votes.length
        return Math.floor(option / total * 100)
    }

    const optionOneVotes = question.optionOne.votes.length
    const optionTwoVotes = question.optionTwo.votes.length
    const optionOnePercent = calculatePercentage(optionOneVotes)
    const optionTwoPercent = calculatePercentage(optionTwoVotes)

    return (
        <CardContent>
            <Typography variant='h5'>Results: </Typography>
            <Badge color='error' badgeContent={'Your vote'} overlap='circle' invisible>
                <Paper variant='outlined' className={classes.paper}>
                    <Typography variant='subtitle2'> {`Would you rather ${question.optionOne.text}?`}</Typography>
                    <LinearProgress className={classes.bar} variant='determinate' value={optionOnePercent} />
                    <Typography variant='subtitle2' >
                        {`${optionOnePercent}% - ${optionOneVotes} ${optionOneVotes === 1 ? 'vote' : 'votes'}`}
                    </Typography>
                </Paper>
            </Badge>

            <Badge color='error' badgeContent={'Your vote'} overlap='circle'>
                <Paper variant='outlined' className={classes.paper}>
                    <Typography variant='subtitle2'> {`Would you rather ${question.optionTwo.text}?`}</Typography>
                    <LinearProgress className={classes.bar} variant='determinate' value={optionTwoPercent} />
                    <Typography variant='subtitle2'>
                        {`${optionTwoPercent}% - ${optionTwoVotes} ${optionTwoVotes === 1 ? 'vote' : 'votes'}`}
                    </Typography>
                </Paper>
            </Badge>
        </CardContent >
    )
}

export default QuestionResults