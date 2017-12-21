import React from 'react';
import Paper from 'material-ui/Paper';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import HardwareKeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import ActionCached from 'material-ui/svg-icons/action/cached';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import CommunicationChatBubbleOutline from 'material-ui/svg-icons/communication/chat-bubble-outline';
import CommunicationMailOutline from 'material-ui/svg-icons/communication/mail-outline';

const iconMessage = <CommunicationMailOutline />;
const iconFavorite = <ActionFavoriteBorder />;
const iconComment = <CommunicationChatBubbleOutline />;
const iconLike = <ActionCached />

const iconArrow = <HardwareKeyboardArrowDown />

const imageDisplayName = require('./images/wefcontent.jpg');

const style = {
  height: 400,
  width: '100%',
  margin: 0,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: '#EFEBE9',
};


const imgStyle = {
  float: 'left',
  margin: 5,
  textDecoration: 'none',
  borderRadius: '50%'
};

const aStyle = {
  textDecoration: 'none',
  margin: 20
};

const span1Style = {
  textDecoration: 'none',
  color: 'black',
  marginRight: 5,
  textAlign: 'left'
};

const span2Style = {
  textDecoration: 'none',
  color: '#657786',
  marginRight: 10,
  textAlign: 'left'
};

const div1Style = {
  margin: 0,
  textAlign: 'left'
};

const div2Style = {
  display: 'inline-block',
  marginLeft: 180
};

const div3Style = {
  marginLeft: 80,
  marginTop:  0,
  marginRight: 10
};

export default class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      value: 3,
      selectedIndex: 0
    };
  }
  handleChange = (event, index, value) => this.setState({value});
  select = (index) => this.setState({selectedIndex: index});
  render() {
    const ddown1 = "Mute " + this.props.hashTag;
    const ddown2 = "Block " + this.props.hashTag;
    return(
      <Paper style={style} rounded={false} zDepth={1}>
        <div style={div1Style}>
         <a href="#3" style={aStyle}>
           <img style={imgStyle}
             src={this.props.ppic} width='50px' height='50px' alt='avatar'/>
           <span style={span1Style}><strong>{this.props.name}</strong></span>
           <span style={span2Style}>{this.props.hashTag}</span>
           <span style={span2Style}>{this.props.time}</span>
         </a>
         <div style={div2Style}>
           <IconMenu
             iconButtonElement={<IconButton>{iconArrow}</IconButton>}
             anchorOrigin={{horizontal: 'middle', vertical: 'center'}}
             targetOrigin={{horizontal: 'left', vertical: 'top'}}
           >
             <MenuItem primaryText="Copy link to Tweet" />
             <MenuItem primaryText="Embed Tweet" />
             <MenuItem primaryText= {ddown1} />
             <MenuItem primaryText= {ddown2} />
             <MenuItem primaryText="Report Tweet" />
             <MenuItem primaryText="I don't like this Tweet" />
             <Divider />
             <MenuItem primaryText="Add to new Moment" />
           </IconMenu>
         </div>
         <div style={div3Style}>
            <p>{this.props.content}</p>
         </div>
         <div>
           <img src={this.props.dpic}  style={{width: 400, height: 250, marginLeft: 100}} alt='aa'/>
         </div>
         <div>
            <BottomNavigation style={{position:'static'}} selectedIndex={this.state.selectedIndex}>
              <BottomNavigationItem
               label="2"
               icon={iconComment}
               onClick={() => this.select(0)}
               style={{position:'static', backgroundColor: '#EFEBE9'}}
            />
            <BottomNavigationItem
              label="28"
              icon={iconLike}
              onClick={() => this.select(1)}
              style={{position:'static', backgroundColor: '#EFEBE9'}}
            />
            <BottomNavigationItem
              label="42"
              icon={iconFavorite}
              onClick={() => this.select(2)}
              style={{position:'static', backgroundColor: '#EFEBE9'}}
            />
            <BottomNavigationItem
              label=""
              icon={iconMessage}
              onClick={() => this.select(3)}
              style={{position:'static', backgroundColor: '#EFEBE9'}}
            />
          </BottomNavigation>
        </div>
       </div>
      </Paper>
    )
  }
};
