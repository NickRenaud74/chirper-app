import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Container, List, Tab, Tabs } from '@material-ui/core'
import CardTemplate from './CardTemplate'
import QuestionCard from './QuestionCard'

function Dashboard() {
    const [tab, setTab] = useState(0)
    const authedUser = useSelector(state => state.authedUser)
    const users = useSelector(state => state.users)
    const questionIds = useSelector(state => (
        Object.keys(state.questions).sort((a, b) => state.questions[b].timestamp - state.questions[a].timestamp)
    ))
    const answeredIds = authedUser ? Object.keys(users[authedUser].answers) : []

    function getUnansweredIds(questionIds, answeredIds) {
        const unanswered = questionIds.filter(id => answeredIds.indexOf(id) === -1)
        return unanswered
    }

    function handleChange(e, newValue) {
        setTab(newValue)
    }

    const unansweredIds = getUnansweredIds(questionIds, answeredIds)
    const ids = tab === 0 ? unansweredIds : answeredIds

    return (
        <Container maxWidth='sm'>
            <Tabs value={tab} onChange={handleChange} centered>
                <Tab label='Unanswered Questions' />
                <Tab label='Answered Questions' />
            </Tabs>
            <List>
                {ids.map(id =>
                    <CardTemplate key={id} id={id} component={QuestionCard} />
                )}
            </List>
        </Container>
    )
}

export default Dashboard