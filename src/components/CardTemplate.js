import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useStyles } from '../styles/cardStyles'
import { Card, CardHeader, Avatar, Grid } from '@material-ui/core'

function CardTemplate({ id, component }) {
    const { questionId } = useParams()

    if (!id) {
        id = questionId
    }

    const questions = useSelector(state => state.questions)
    const question = questions[id]
    const Component = component
    const classes = useStyles()

    return (
        <Card raised className={classes.root}>
            <CardHeader
                title={`${question.author} asks: `}
                className={classes.cardHeader}
            />
            <Grid container>
                <Grid item xs={4} className={classes.avatarBox} >
                    <Avatar className={classes.avatarLg}>NR</Avatar>
                </Grid>
                <Grid item xs={8}>
                    <Component question={question} />
                </Grid>
            </Grid>
        </Card>

    )
}

export default CardTemplate
