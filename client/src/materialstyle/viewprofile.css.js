import { $dark_blue, } from './baseStyle/baseStyle';


export const viewProfileStyle = theme => ({
    root: {
        ...theme.mixins.gutters(),
        borderRadius: '0.5rem',
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        flexGrow: 1
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        color: $dark_blue
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: $dark_blue
    },
    title: {
        color: $dark_blue
    },
    seeMore: {
        margin: '10px'
    }

});