import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useStyles } from '../styles/styles'
import { Card, CardHeader, Avatar, Grid } from '@material-ui/core'
import PageNotFound from './PageNotFound'
import PropTypes from 'prop-types'

function CardTemplate({ id, component }) {
    const { question_id } = useParams()

    if (!id) {
        id = question_id
    }

    const questions = useSelector(state => state.questions)
    const users = useSelector(state => state.users)
    const question = questions[id]
    const Component = component
    const classes = useStyles()

    if (!question) {
       return <PageNotFound />
    }

    return (
        <Card raised className={classes.root}>
            <CardHeader
                title={`${question.author} asks: `}
                className={classes.cardHeader}
            />
            <Grid container>
                <Grid item xs={4} className={classes.avatarBox} >
                    <Avatar className={classes.avatarLg} src={users[question.author].avatarURL}></Avatar>
                </Grid>
                <Grid item xs={8}>
                    <Component question={question} />
                </Grid>
            </Grid>
        </Card>

    )
}
CardTemplate.propTypes = {
    id: PropTypes.string,
    component: PropTypes.func
}

export default CardTemplate
