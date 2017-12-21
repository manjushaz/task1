import React from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {grey400} from 'material-ui/styles/colors';
import ContentClear from 'material-ui/svg-icons/content/clear';
import FlatButton from 'material-ui/FlatButton';
import ActionSupervisorAccount from 'material-ui/svg-icons/action/supervisor-account';

const imageSupervisorAccount = <ActionSupervisorAccount color='#00B0FF' />

const imgTI = require('./images/ti.jpg');
const imgBI = require('./images/bi.jpg');
const imgTed = require('./images/ted.jpg');

const div1Style = {
  paddingTop: 10,
  paddingLeft: 20,
  textAlign: 'left',
  backgroundColor: '#EFEBE9'
}

const headStyle = {
  marginTop: 10,
  color: '#424242',
  display: 'inline-block',
  letterSpacing: 1,
}

const span1Style = {
  marginLeft: 5,
  marginRight: 5
}

const refreshBtnStyle = {
  border: '0px solid',
  backgroundColor: '#EFEBE9',
  fontSize: 16  ,
  color: '#00B0FF',
  cursor: 'pointer'
}

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="close"
    tooltipPosition="bottom-left"
  >
    <ContentClear color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

const btnLabelStyle = {
  textTransform: 'none',
  color: '#00B0FF',
  backgroundColor: '#EFEBE9',
}

const underline = 'underline';
const none = 'none';

export default class WhoToFollow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {style: none}
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }
  handleMouseOver() {
    this.setState({style: underline});
  }
  handleMouseOut() {
    const newState = this.state.style === none ? underline : none;
    this.setState({style: newState});
  }
  render() {
    return(
      <Paper style={this.props.style} zDepth={1}>
        <div style={div1Style}>
          <h3 style={headStyle}>Who to follow</h3>
          <span style={span1Style}>.</span>
          <button type="button" style={refreshBtnStyle}><small>Refresh</small></button>
          <span style={span1Style}>.</span>
          <a href="#1" style={{textDecoration: this.state.style, fontSize: '16  px',
          color: '#00B0FF'}}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}><small>View all</small></a>
        </div>
        <div>
          <List style={{position: 'static', backgroundColor: '#EFEBE9'}}>
            <ListItem
              leftAvatar={<Avatar src={imgBI} />}
              rightIconButton={iconButtonElement}
              primaryText={
                <p style={{fontSize: 14 , padding: 0, margin: 0, textAlign: 'left'}}>
                  Business Insider @businessinsider
                </p>}
              secondaryText={
                <p style={{textAlign: 'left'}}>
                  <button type="button"
                    style={{borderRadius: 20,
                      width: 100,
                      height: 30,
                      backgroundColor: 'white',
                      border: '2px solid #0288D1',
                      color: 'white',
                      cursor: 'pointer',
                      backgroundImage: 'linear-gradient(to right, #673AB7, #9C27B0 50%, #E91E63)',
                    }}>
                    Follow
                  </button>
                </p>
              }
              hoverColor='#EFEBE9'
              style={{cursor: 'auto', position: 'staric'}}
              secondaryTextLines={2}
            />
            <Divider />
            <ListItem
              leftAvatar={<Avatar src={imgTI} />}
              rightIconButton={rightIconMenu}
              primaryText={
                <p style={{fontSize: 14 , padding: 0, margin: 0, textAlign: 'left'}}>
                  Tech Insider @techinsider
                </p>}
              secondaryText={
                <p style={{textAlign: 'left'}}>
                  <button type="button"
                    style={{borderRadius: 20,
                      width: 100,
                      height: 30,
                      backgroundColor: 'white',
                      border: '2px solid #0288D1',
                      color: 'white',
                      backgroundImage: 'linear-gradient(to right, #673AB7, #9C27B0 50%, #E91E63)',
                    }}>
                    Follow
                  </button>
                </p>
              }
              hoverColor='#EFEBE9'
              secondaryTextLines={2}
            />
            <Divider />
            <ListItem
              leftAvatar={<Avatar src={imgTed} />}
              rightIconButton={rightIconMenu}
              primaryText={
                <p style={{fontSize: 14 , padding: 0, margin: 0, textAlign: 'left'}}>
                  TED Talks @TEDTalks
                </p>}
              secondaryText={
                <p style={{textAlign: 'left'}}>
                  <button type="button"
                    style={{borderRadius: 20,
                      width: 100,
                      height: 30,
                      backgroundColor: 'white',
                      border: '2px solid #0288D1',
                      color: 'white',
                      backgroundImage: 'linear-gradient(to right, #673AB7, #9C27B0 50%, #E91E63)',
                    }}>
                    Follow
                  </button>
                </p>
              }
              hoverColor='#EFEBE9'
              secondaryTextLines={2}
            />
          </List>
        </div>
        <Divider />
        <FlatButton labelStyle={btnLabelStyle}
          style={{backgroundColor: '#EFEBE9'}}
          label="Find people you know"
          fullWidth={true}
          hoverColor='white'
           icon={imageSupervisorAccount} />
      </Paper>
    )
  }
}
