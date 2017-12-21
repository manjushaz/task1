import React from 'react';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const imageProfile= require('./images/profile.png');

const comp1Style = {
  height: 100,
  width: '100%',
  margin: 0,
  backgroundColor: '#2196F3',
  backgroundImage: 'linear-gradient(to right, #673AB7, #9C27B0 50%, #E91E63)',
  textAlign: 'center',
  display: 'inline-block',
};

const profileBtnStyle = {
    margin: '80px 50px -100px 20px',
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    color: 'white',
    border: '2px solid',
    display: 'static'
}

const listStyle = {
    tableLayout: 'fixed',
    boxSizing: 'border-box',
    display: 'table',
    margin: 0,
    marginTop: 20,
    minWidth: '100%',
    padding: 0,
    listStyle: 'none',
    color: '#14171a',
    fontSize: '14px',
    lineHeight: '20px'
}

const liStyle = {
  width: '1%',
  verticalAlign: 'bottom',
  display: 'table-cell',
  padding: 0,
  lineHeight: 1
}

const liaStyle = {
  cursor: 'pointer',
  textDecoration: 'none'
}

const span1Style = {
    color: '#657786',
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: '.02em',
    lineHeight: '16px',
    overflow: 'hidden',
}

const span2Style = {
    display: 'block',
    fontSize: '16 px',
    fontWeight: 'bold',
    paddingTop: '3px',
    color: '#657786',
}

const underline = 'underline';
const none = 'none';

export default class DashBoard extends React.Component {
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
       <Paper style={this.props.style} zDepth={1} >
         <Paper style={comp1Style} >
            <FloatingActionButton
                style={profileBtnStyle}
                backgroundColor='#2196F3'>
                <img src={imageProfile} width='50px' height='50px' alt='avatar'/>
            </FloatingActionButton>
         </Paper>
         <a href='#1' id='name'
            style={{textDecoration: this.state.style, fontSize: '20px',
                    color: 'black'}}
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}>
            {this.props.name}
         </a>
         <br/>
         <a href='#1' id='hashTag'
            style={{textDecoration: this.state.style,fontSize: '15px',
                    color: '#607D8B'}}
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}>
           {this.props.hashTag}
         </a>
          <ul style={listStyle}>
            <li style={liStyle}>
               <a href='#2' style={liaStyle}>
                 <span style={span1Style}>Tweets</span>
                 <span style={span2Style}>2</span>
               </a>
            </li>
            <li style={liStyle}>
               <a href='#2' style={liaStyle}>
                 <span style={span1Style}>Following</span>
                 <span style={span2Style}>87</span>
               </a>
            </li>
            <li style={liStyle}>
              <a href='#2' style={liaStyle}>
                 <span style={span1Style}>Followers</span>
                 <span style={span2Style}>1</span>
              </a>
            </li>
          </ul>
       </Paper>
    )
  }
}
