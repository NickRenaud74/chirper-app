import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
    root: {
        margin: '1rem',
    },
    loadingBar: {
        backgroundColor: theme.palette.secondary.main,
        position: 'absolute',
        height: '3px'
    },
    cardHeader: {
        backgroundColor: theme.palette.primary.main,
    },
    avatarLg: {
        margin: 'auto',
        width: '140px',
        height: '140px'
    },
    avatarMed: {
        margin: 'auto',
        width: '100px',
        height: '100px'
    },
    avatarSm: {
        margin: 'auto',
        width: '50px',
        height: '50px',
        backgroundColor: theme.palette.primary.main
    },
    avatarBox: {
        margin: 'auto'
    },
    avatarPicker: {
        margin: 'auto',
        justifyContent: 'center'
    },
    centerText: {
        textAlign: 'center'
    },
    button: {
        backgroundColor: theme.palette.secondary.main,
        width: '-webkit-fill-available',
        '&:hover': {
            backgroundColor: `${theme.palette.secondary.dark} !important`,
        }
    },
    createUser: {
        alignItems: 'center'
    },
    form: {
        margin: '1rem',
        textAlign: 'center'
    },
    paper: {
        padding: '1rem',
        margin: `1rem`,
        textAlign: 'center',
        border: `2px solid ${theme.palette.secondary.dark}`
    },
    bar: {
        height: '1.5rem',
        margin: '10px'
    },
    badge: {
        padding: '8px',
    },
    vote: {
        backgroundColor: '#b8ffef'
    },
    score: {
        textAlign: 'center',
        margin: 'auto'
    },
    selectUser: {
        width: '-webkit-fill-available',
        margin: '15px'
    },
    appLogo: {
        height: '200px',
        width: '200px',
        padding: '2rem',
        margin: 'auto',
        animationName: '$spin',
        animationDuration: '20s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
    },
    '@keyframes spin': {
        '0%': { transform: 'rotate(0deg)'},
        '100%': {transform: 'rotate(360deg)'}
    },
}))