import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import SearchBar from 'material-ui-search-bar'
import ActionHome from 'material-ui/svg-icons/action/home';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import CommunicationMailOutline from 'material-ui/svg-icons/communication/mail-outline';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import Divider from 'material-ui/Divider';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MainArea from './mainarea';
import SearchArea from './searcharea';

const iconHome = <ActionHome />
const iconNotification = <NotificationsIcon />
const iconMessage = <CommunicationMailOutline />
const iconAccount = <ActionAccountCircle color='#757575' />

const styles = {
    borderRadius: '30px',
    backgroundColor: '#2196F3',
    color: 'white',
    backgroundImage: 'linear-gradient(to right, #673AB7, #9C27B0 50%, #E91E63)',
    marginTop: 5
}
const btnStyle = {
  textTransform: 'none',

}
const imageName = require('./twittericon.png')

const style = {
    top: 0,
    left: 0,
    zIndex: 9999,
    height: '50px',
    width: '100%',
    margin: 0,
    backgroundColor: '#EFEBE9',
    borderBottom  : '1px solid #BDBDBD',
    fontSize: '10px',
    boxShadow: '1px 1px #BDBDBD ',
    position: 'fixed',
}

export default class NavBarFixed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3,
      issearch: true
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange = (event, index, value) => this.setState({value});
  handleSearch(e) {
      const newSearch = this.state.isSearch === false ? true : false;
      this.setState({ isSearch: newSearch});
  }

  render() {
    const isSearch = this.state.isSearch;
    let button = null;
    if (isSearch) {
      button = <SearchArea />;
    } else {
      button = <MainArea />;
    }
    return (
      <div>
      <Toolbar style={style}>
        <ToolbarGroup>
          <FlatButton label="Home" labelStyle={btnStyle} icon={iconHome} />
          <FlatButton label="Notifications" labelStyle={btnStyle} icon={iconNotification} />
          <FlatButton label="Message"  labelStyle={btnStyle} icon={iconMessage} />
        </ToolbarGroup>
        <ToolbarGroup>
          <div className='tweetBtn'>
            <input type="image"
              src={imageName}
              alt='test'
              width='40px'
              height='40px'
              style={{marginLeft: 100}}/>
          </div>
        </ToolbarGroup>

        <ToolbarGroup>
             <SearchBar
               onChange={() => console.log('onChange')}
               onRequestSearch={this.handleSearch}
               style={{
                 marginLeft: 100,
                 maxWidth: 800,
                 borderRadius: 30
               }}
             />
             <IconMenu
               iconButtonElement={<IconButton>{iconAccount}</IconButton>}
               anchorOrigin={{horizontal: 'middle', vertical: 'center'}}
               targetOrigin={{horizontal: 'left', vertical: 'top'}}
               style={{marginLeft: 100}}
             >
                 <MenuItem value={1} primaryText="Manjusha Z" />
                 <MenuItem value={2} primaryText="@ManjuZM" />
                 <Divider />
                 <MenuItem value={3} leftIcon={iconMessage} primaryText="Profile" />
                 <MenuItem value={4} primaryText="Lists" />
                 <MenuItem value={5} primaryText="Moments" />
                 <Divider />
                 <MenuItem value={6} primaryText="Twitter Ads" />
                 <MenuItem value={7} primaryText="Analytics" />
                 <Divider />
                 <MenuItem value={8} primaryText="Settings and Privacy" />
                 <MenuItem value={9} primaryText="Help center" />
                 <MenuItem value={10} primaryText="Keyboard Shortcuts" />
                 <MenuItem value={11} primaryText="Logout" />
                 <Divider />
                 <MenuItem value={12} primaryText="Night Mode" />
              </IconMenu>
           </ToolbarGroup>
           <FlatButton label="Tweet" primary={true} style={styles} labelStyle={btnStyle} />
      </Toolbar>
      {button}
    </div>
    );
  }
}
