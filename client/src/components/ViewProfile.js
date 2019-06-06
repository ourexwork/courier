import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {viewProfileStyle} from '../materialstyle/viewprofile.css';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//expansion panel
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//

import {Link } from 'react-router-dom';
//icons used


import {
  Email,
Edit,
Phone,
LocationOn,
DateRange,
TransitEnterexitTwoTone
  } from '@material-ui/icons';

import {Button} from '@material-ui/core'


const styles = (viewProfileStyle)

class  ViewProfile extends React.Component {
    state = {
    value: 0,
     current: true,
     all:false,
    expanded: null,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

handleShowCurrent = (event, value) => {
    this.setState({ current:true, all:false });
  };

  handleShowAll = (event, value) => {
    this.setState({ current:false, all:true });
  };


  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  handlePanelChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

render(){
    const { expanded } = this.state;

    const { classes } = this.props;
  
    return (
    <div className="container mt-5 p-3">
    <Paper className={classes.root} elevation={1}>
    {console.log(this.props.firstName)}
  <div className="row center-view">
  <div className="col">

          <div className="border v p-3 details">
            <div className="display-name"> {this.props.firstName + ' ' + this.props.lastName} </div> 
            <div className="display-items"><Email /> &nbsp; {this.props.email}</div>
            <div className="display-items"><LocationOn /> &nbsp; {this.props.address}</div>
            <div className="display-items"><Phone /> &nbsp; {this.props.phoneNumber}</div>
            <div className="display-items"><DateRange /> &nbsp; {this.props.dateRegistered}</div>
              <div>  <Link to={`/edit/${this.props._id}`} >
            <Button variant="outlined" color="primary">Update Your Profile <Edit /></Button>
            </Link> 
                  </div> 
          </div>
          
  </div>
  <div className="col">
  <div className="border v inherit p-3">
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          // textColor="primary"
          centered
          className={classes.title}
        >
          <Tab label="Current Transactions" onClick={this.handleShowCurrent}  />
          <Tab label="Transaction History" onClick={this.handleShowAll} /> 
        </Tabs>
        <div className="p-3">
        { this.state.current && 
          <span>
          <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handlePanelChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>02/12/12</Typography>
            <Typography className={classes.secondaryHeading}>Shirts</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            NIce Fited Shirts 40 pieces
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        </span>
        }
        {
         this.state.all && 
         <span>
          <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handlePanelChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>08/21/12</Typography>
            <Typography className={classes.secondaryHeading}>Bags and Envelopes</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
              maximus est, id dignissim quam.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handlePanelChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>09/34/56</Typography>
            <Typography className={classes.secondaryHeading}>
              Biros and Books
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
              diam eros in elit. Pellentesque convallis laoreet laoreet.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handlePanelChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>04/45/5</Typography>
            <Typography className={classes.secondaryHeading}>
              Laptops and mouse
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
              eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <div className={classes.seeMore}>
        <Link to="/dashboard/listshipment" color='primary'>
          See all orders
        </Link>
      </div>
        </span>
        }
          
          </div>
          {/*} <div> <Link to={`/edit/${this.props._id}`} >  
             <Button variant="outlined" color="primary">create a shipment order <TransitEnterexitTwoTone /></Button>
                  </Link> 
      </div>*/}
        </div>
  </div>
  
  </div>
  </Paper>
    </div>
  

  );
}

 
}

ViewProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ViewProfile);
