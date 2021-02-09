import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import QuestionPoll from './QuestionPoll'
import QuestionResults from './QuestionResults'


function QuestionDetails() {
    const authedUser = useSelector(state => state.authedUser)
    const users = useSelector(state => state.users)
    const questions = useSelector(state => state.questions)
    const { question_id } = useParams()
    const question = questions[question_id]

    const userAnswers = Object.keys(users[authedUser].answers)

    return (
        userAnswers.includes(question_id)
            ? <QuestionResults question={question} />
            : <QuestionPoll question={question} />
    )
}

export default QuestionDetails