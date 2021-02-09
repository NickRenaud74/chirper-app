import React from 'react'
import { Typography, Paper, LinearProgress, Badge } from '@material-ui/core'
import { useStyles } from '../../styles/styles'
import PropTypes from 'prop-types'

function Result({ option, percentage, votes, showBadge }) {
    const classes = useStyles()
    return (
        <Badge color='error' badgeContent={'Your vote'} overlap='circle' invisible={showBadge}>
            <Paper variant='outlined' className={`${classes.paper} ${showBadge === false ? classes.vote : null}`}>
                <Typography variant='subtitle2'> {`Would you rather ${option}?`}</Typography>
                <LinearProgress className={classes.bar} variant='determinate' value={percentage} />
                <Typography variant='subtitle2' >
                    {`${percentage}% - ${votes} ${votes === 1 ? 'vote' : 'votes'}`}
                </Typography>
            </Paper>
        </Badge>
    )
}

Result.propTypes = {
    option: PropTypes.string,
    percentage: PropTypes.number,
    votes: PropTypes.number,
    showBadge: PropTypes.bool
}
export default Result