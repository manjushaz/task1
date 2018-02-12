import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import DashBoard from './dashboard';
import MainContent from './maincontent';
import TrendsForYou from './trendsforyou';
import WhoToFollow from './whotofollow';

const imageDisplayName = require('./images/aadhaar.jpg');
const imageAadhaar4 = require('./images/aadhaar4.png');
const imageAadhaar1 = require('./images/aadhaar1.jpg');
const imageAadhaar2 = require('./images/aadhaar2.jpg');
const imageAadhaar3 = require('./images/aadhaar3.jpg');

const searchHeadStyle = {
  marginTop: 50,
  width: '100%',
  height: 50,
  position: 'static',
  backgroundColor: '#00BCD4',
  color: 'white'
}

const btnStyle = {
  textTransform: 'none',
}

const comp1Style = {
  marginTop: 10,
  marginLeft: 80,
  width: 290,
  height: 50,
}

const comp2Style = {
  marginTop: 10,
  marginLeft: 80,
  width: 290,
  height: 300,
  backgroundColor: '#EFEBE9',
}

const comp3Style = {
  marginTop: 10,
  marginLeft: 50,
  width: 590,
  height: 550,
  backgroundColor: '#EFEBE9',
}

const listItemStyle = {
  textAlign: 'left',
  color: '#03A9F4'
}

const displayImageStyle = {
  height: 300,
  width: '100%',
  margin: 0,
  textAlign: 'center',
  display: 'inline-block',
  backgroundImage: {imageDisplayName}
};

const comp4Style = {
  marginTop: 10,
  marginLeft: 50,
  width: 590,
  height: 40,
  backgroundColor: '#EFEBE9',
}
const fullBtnStyle = {
  textTransform: 'none',
  color: '#2196F3',
  position: 'static',
}

const dash1Style = {
  height: 250,
  width: 290,
  marginLeft: 50,
  marginBottom: 10,
  textAlign: 'center',
  backgroundColor: '#EFEBE9',
};

const dash2Style = {
  height: 250,
  width: 290,
  marginLeft: 10,
  marginBottom: 10,
  textAlign: 'center',
  backgroundColor: '#EFEBE9',
};

const whoStyle = {
  maxHeight: 1000,
  width: 290,
  marginLeft: 80,
  textAlign: 'center',
  position: 'static'
};

const underline = 'underline';
const none = 'none';

const trendsData = [ 'kapil sibal', 'bombay high court', '#aadhaar', '#chaupal', '#nandos195']

export default class SearchArea extends React.Component {
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
      <div>
        <Paper style={searchHeadStyle} rounded={false} zDepth={1}>
         <p style={{
          paddingTop: 10, paddingLeft: 50, fontSize: 25
           }}><strong>aadhaar</strong></p>
        </Paper>


         <Toolbar>
           <ToolbarGroup>
             <FlatButton label="Top" labelStyle={btnStyle} />
             <FlatButton label="Latest" labelStyle={btnStyle} />
             <FlatButton label="People" labelStyle={btnStyle} />
             <FlatButton label="Photos" labelStyle={btnStyle} />
             <FlatButton label="Videos" labelStyle={btnStyle} />
             <FlatButton label="News" labelStyle={btnStyle} />
             <FlatButton label="Broadcasts" labelStyle={btnStyle} />
           </ToolbarGroup>
           <IconMenu
             iconButtonElement={<IconButton><NavigationMoreVert /></IconButton>}
             anchorOrigin={{horizontal: 'middle', vertical: 'center'}}
             targetOrigin={{horizontal: 'left', vertical: 'top'}}
             style={{marginLeft: 100}}
           >
               <ListItem value={1} primaryText="Search setting" secondaryText="Hidding sensitive content"/>
               <Divider />
               <MenuItem value={2} primaryText="save this Search" />
               <MenuItem value={3} primaryText="Embed this search" />
            </IconMenu>
         </Toolbar>
         <div  style={{display: 'flex'}}>
           <div>
             <Paper style={comp1Style} rounded={false} zDepth={1}>
                 <div style={{
                   paddingTop: 10,
                   paddingLeft: 20,
                   textAlign: 'left',
                   backgroundColor: '#EFEBE9'
                 }}>
                   <h3 style={{
                     marginTop: 10,
                     color: '#424242',
                     display: 'inline-block',
                     letterSpacing: 1,
                   }}>Search filters</h3>
                   <span style={{
                     marginLeft: 5,
                     marginRight: 5
                   }}>.</span>
                   <a href="#1" style={{textDecoration: this.state.style, fontSize: '14px',
                   color: '#00B0FF'}}
                   onMouseOver={this.handleMouseOver}
                   onMouseOut={this.handleMouseOut}>Show</a>
                 </div>
             </Paper>
             <Paper style={comp2Style} rounded={false} zDepth={1}>
               <div>
                 <h3 style={{paddingTop: 20, marginLeft: 10}}>Related Searches </h3>
                 <List>
                   {trendsData.map((trend) => (
                     <ListItem
                       primaryText={trend}
                       hoverColor='white'
                       style={listItemStyle}>
                     </ListItem>
                   ))}
                 </List>
               </div>
             </Paper>
             <TrendsForYou />
             <WhoToFollow style={whoStyle}/>

           </div>
           <div>
              <Paper style={comp3Style} rounded={false} zDepth={1}>
                <div style={{
                  paddingTop: 10,
                  paddingLeft: 20,
                  textAlign: 'left'
                }}>
                  <h3 style={{
                    marginTop: 10,
                    color: '#424242',
                    display: 'inline-block',
                    letterSpacing: 1,
                  }}>Top News</h3>
                  <a href="#1" style={{textDecoration: this.state.style, fontSize: '14px',
                  color: '#00B0FF', float: 'right', marginRight: 20}}
                  onMouseOver={this.handleMouseOver}
                  onMouseOut={this.handleMouseOut}>View all</a>
                </div>
                <Paper style={displayImageStyle}  zDepth={1}>
                  <img src={imageDisplayName} style={{width: '100%', height: '100%'}} alt='aa'/>
                </Paper>
                <div style={{marginLeft:10, marginRight:10}}>
                  <a href="#1" style={{fontSize:20, color:'black'}}>Do you know where your Aadhaar has been used?
                    This is how you can find out</a>
                  <p>
                    <a href="#1" style={{fontSize:20, color:'#BDBDBD', textDecoration: 'none'}}><small>If you find something suspicious,
                       you can even lock your Aadhaar information online and unlock it
                       whenever you want to use it.</small></a>

                  </p>
                  <p><a href="#2">EconomicTimes</a><a href="#2" style={{float: 'right'}}>Dec 09, 2017</a></p>
                </div>
              </Paper>
              <Paper style={comp4Style} zDepth={1}>
                <FlatButton label="See new tweets"
                     labelStyle={fullBtnStyle}
                     fullWidth={true}
                      style={{backgroundColor: '#EFEBE9', position: 'static'}} />
              </Paper>

                <div style={{
                  paddingTop: 10,
                  paddingLeft: 80,
                  textAlign: 'left'
                }}>
                  <h3 style={{
                    marginTop: 10,
                    color: '#424242',
                    display: 'inline-block',
                    letterSpacing: 1,
                  }}>People</h3>
                  <a href="#1" style={{textDecoration: this.state.style, fontSize: '14px',
                  color: '#00B0FF', float: 'right', marginRight: 20, paddingRight: 50}}
                  onMouseOver={this.handleMouseOver}
                  onMouseOut={this.handleMouseOut}>View all</a>
                </div>


              <div style={{display: 'flex',
                          padding:0,
                          margin: 0,
                       }}>
                <DashBoard name='Aadhaar' hashTag='@UIDAI' style={dash1Style}/>
                <DashBoard name='Nandan Nilekani' hashTag='@NandanNilekani' style={dash2Style}/>
              </div>
              <Paper style={comp4Style} zDepth={1}>
                <MainContent ppic={imageAadhaar4}
                     name='Aadhaar'
                     hashTag='@UIDAI'
                     time='.20m'
                     dpic={imageAadhaar1}
                     content="Link your Aadhaar card to mobile." />
                <MainContent ppic={imageAadhaar4}
                     name='Aadhaar'
                     hashTag='@UIDAI'
                     time='.2hr'
                     dpic={imageAadhaar2}
                     content="A 12 digit unique identity for every individuaval." />
                <MainContent ppic={imageAadhaar4}
                     name='Aadhaar'
                     hashTag='@UIDAI'
                     time='.5hr'
                     dpic={imageAadhaar3}
                     content="Aadhaar for everyone and every purpose." />
              </Paper>
          </div>
        </div>
     </div>
    )
  }
}
