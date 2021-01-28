import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { CardContent, Typography } from '@material-ui/core'
import Result from './Result'

function QuestionResults({ question }) {
    const [userAnswer, setUserAnswer] = useState('')
    const [showBadge, setShowBadge] = useState(false)
    const authedUser = useSelector(state => state.authedUser)
    const users = useSelector(state => state.users)

    console.log('rendered', userAnswer)

    useEffect(() => {
        setUserAnswer(users[authedUser].answers[question.id])
        if (userAnswer === 'optionTwo') {
            setShowBadge(true)
        }
    }, [authedUser, question.id, userAnswer, users])

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
            <Result
                option={question.optionOne.text}
                percentage={optionOnePercent}
                votes={optionOneVotes}
                showBadge={showBadge}
            />
            <Result
                option={question.optionTwo.text}
                percentage={optionTwoPercent}
                votes={optionTwoVotes}
                showBadge={!showBadge}
            />
        </CardContent >
    )
}

export default QuestionResults