import React, { Fragment } from 'react'
import { useStyles } from '../styles/Questions'
import { Link } from 'react-router-dom'
import { CardContent, CardActions, Button, Typography } from '@material-ui/core'

function QuestionCard({ question }) {

    const classes = useStyles()

    return (
        <Fragment>
            <CardContent className={classes.cardContent} >
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
                    component={Link}
                    to={`/questions/${question.id}`}
                >View Poll</Button>
            </CardActions>
        </Fragment>
    )
}

export default QuestionCard