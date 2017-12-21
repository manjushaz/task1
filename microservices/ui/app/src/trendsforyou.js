import React from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';

const style = {
  maxHeight: '100%',
  width: 290,
  margin: '10px 10px 10px 80px',
  paddingBottom: 20,
  textAlign: 'center',
  backgroundColor: '#EFEBE9',
};

const div1Style = {
  paddingTop: 10,
  paddingLeft: 20,
  textAlign: 'left'
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

const listItemStyle = {
  textAlign: 'left',
  color: '#03A9F4',
  height: 60,
}

const underline = 'underline';
const none = 'none';
const trendsData = [
  {
    name: '#HPDFFellowship',
    tweets: '22k Tweets'
  },
  {
    name: '#MustHaveDevTools',
    tweets: '20k Tweets'
  },
  {
    name: '#Gujarat4Modi',
    tweets: '18.2k Tweets'
  },
  {
    name: '#SaveOurRivers',
    tweets: '12k Tweets'
  },
  {
    name: '#ILuvIndia',
    tweets: '2000k Tweets'
  },
]

export default class TrendsForYou extends React.Component {
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
      <Paper style={style} zDepth={1}>
        <div style={div1Style}>
          <h3 style={headStyle}>Trends for you</h3>
          <span style={span1Style}>.</span>
          <a href="#1"
           style={{textDecoration: this.state.style, fontSize: '14px',
           color: '#00B0FF'}}
           onMouseOver={this.handleMouseOver}
           onMouseOut={this.handleMouseOut}
          >
            Change
          </a>
        </div>
        <div>
          <List>
            {trendsData.map((trend) => (
              <ListItem
                primaryText={trend.name}
                secondaryText={trend.tweets}
                hoverColor='#EFEBE9'
                style={listItemStyle}>
              </ListItem>
            ))}
          </List>
        </div>
      </Paper>
    )
  }
}
