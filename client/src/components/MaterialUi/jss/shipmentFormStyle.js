import { $dark_blue, $light_blue } from './baseStyle';

export const shipmentFormStyle = theme => ({
  root: {
    width: '90%'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  button: {
    marginRight: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
    textAlign: 'left'
  },
  inputFile: {
    display: 'none'
  },
  shipment: {
    height: '90vh',
    // overflow: 'hidden',
    position: 'relative'
  },
  proceedButton: {
    bottom: 0,
    left: '50%',
    padding: '1rem',
    position: 'absolute',
    transform: ['translate(-50%) !important'],
    '& Button': {
      backgroundColor: $dark_blue,
      '&:hover': {
        backgroundColor: $light_blue
      }
    }
  }
});
