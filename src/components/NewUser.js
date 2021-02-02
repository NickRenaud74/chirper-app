import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography, Input} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useStyles } from '../styles/cardStyles'


function NewUser() {
    const classes = useStyles()

    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}  >
                <Typography variant='subtitle1' className={classes.centerText}>Create A New Account</Typography>
            </AccordionSummary>
            <AccordionDetails >
                <Input required placeholder='First Name' className={ classes.form}/>
                <Input required placeholder='Last Name' className={classes.form} />
            </AccordionDetails>
            <Typography variant='subtitle1' className={classes.centerText}>Pick An Avatar</Typography>
        </Accordion>
    )
}

export default NewUser