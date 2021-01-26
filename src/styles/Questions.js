import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
    root: {
        margin: '1rem',
    },
    cardHeader: {
        backgroundColor: theme.palette.primary.main,
    },
    avatar: {
        margin: 'auto',
        width: '90px',
        height: '90px'
    },
    avatarBox: {
        margin: 'auto'
    },
    cardContent: {
        textAlign: 'center'
    },
    button: {
        backgroundColor: theme.palette.secondary.main,
        width: '-webkit-fill-available',
        '&:hover': {
            backgroundColor: `${theme.palette.secondary.dark} !important`,
        }
    },
    form: {
        margin: '1rem',
        textAlign: 'center'
    }
}))

