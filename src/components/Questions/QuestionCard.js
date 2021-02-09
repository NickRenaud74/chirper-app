import React, { Fragment } from 'react'
import { useStyles } from '../../styles/styles'
import { useHistory } from 'react-router-dom'
import { CardContent, CardActions, Button, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

function QuestionCard({ question }) {
    const classes = useStyles()
    const history = useHistory()

    function handleClick() {
        history.push(`/questions/${question.id}`)
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

QuestionCard.propTypes = {
    question: PropTypes.object.isRequired
}

export default QuestionCard