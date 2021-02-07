import React from 'react'
import { useSelector } from 'react-redux'
import { useStyles } from '../styles/styles'
import { Container, Card, Typography, Grid, Avatar, CardHeader, Table, TableBody, TableRow, TableCell } from '@material-ui/core'
import LooksOneIcon from '@material-ui/icons/LooksOne'
import LooksTwoIcon from '@material-ui/icons/LooksTwo'
import Looks3Icon from '@material-ui/icons/Looks3'

function Leaderboard() {
    const users = useSelector(state => state.users)
    const classes = useStyles()

    const leaders = Object.keys(users).sort((a, b) => {
        const scoreB = users[b].questions.length + Object.keys(users[b].answers).length
        const scoreA = users[a].questions.length + Object.keys(users[a].answers).length
        return scoreB - scoreA
    })

    const getPosition = index => {
        switch (index) {
            case 0:
                return <LooksOneIcon/>
            case 1:
                return <LooksTwoIcon />
            case 2:
                return <Looks3Icon />
            default: 
                return null
        }
    }

    return (
        <Container maxWidth='sm'>
            <Typography variant='h2' className={classes.centerText}>Leaderboard</Typography>

            {leaders.map((user, index) => (
                <Card className={`${classes.root}`} raised key={users[user].id}>
                    <Grid container>
                        <Grid item xs={4} className={classes.avatarBox}>
                            {getPosition(index)}
                            <Avatar className={classes.avatarMed} src={users[user].avatarURL}></Avatar>
                        </Grid>
                        <Grid item xs={6}>
                            <CardHeader title={users[user].name} />
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <Typography variant='subtitle2'>
                                                Answered Questions:
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            {Object.keys(users[user].answers).length}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Typography variant='subtitle2'>
                                                Created Questions:
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            {users[user].questions.length}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Grid>
                        <Grid item xs={2} className={classes.score}>
                            <Avatar className={classes.avatarSm}>
                                {users[user].questions.length + Object.keys(users[user].answers).length}
                            </Avatar>
                        </Grid>
                    </Grid>
                </Card>
            ))}

        </Container>
    )
}

export default Leaderboard