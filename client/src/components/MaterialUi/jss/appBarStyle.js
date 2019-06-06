// import { makeStyles } from '@material-ui/core/styles';

import { drawerWidth, $dark_blue } from '../../../materialstyle/baseStyle/baseStyle';

export const useAppBarStyle = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },

    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },

    menuButton: {
        marginRight: 36
    },

    menuButtonHidden: {
        display: 'none'
    },

    title: {
        flexGrow: 1
    },
    toolbar: {
        backgroundColor: `${$dark_blue} !important`,
        paddingRight: 24 // keep right padding when drawer closed
    }
});