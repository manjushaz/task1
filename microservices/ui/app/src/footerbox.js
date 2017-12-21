import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import ActionLaunch from 'material-ui/svg-icons/action/launch';

const imageLaunch = <ActionLaunch color='#00B0FF' size={2}/>
const style = {
  maxHeight: 200,
  width: 290,
  margin: '50px 80px 20px 20px',
  textAlign: 'left',
  backgroundColor: '#EFEBE9'
};

const divStyle = {
  padding: 5,
  marginLeft: 10,
}

const btnLabelStyle = {
  textTransform: 'none',
  color: '#00B0FF',
}

const underline = 'underline';
const none = 'none';

export default class FooterBox extends React.Component {
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
        <div style={divStyle}>
          <p>
            <small>
              ©2017 Twitter
              <a href="#1" style={{textDecoration: this.state.style,fontSize: '15px',
                      color: '#607D8B', display: 'inline-block',
                        marginLeft: 5,}}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}>About</a>
              <a href="#1" style={{textDecoration: this.state.style,fontSize: '15px',
                      color: '#607D8B', display: 'inline-block',
                        marginLeft: 5,}}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}>Help</a>
              <a href="#1" style={{textDecoration: this.state.style,fontSize: '15px',
                      color: '#607D8B',display: 'inline-block',
                        marginLeft: 5,}}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}>Center</a>
              <a href="#1" style={{textDecoration: this.state.style,fontSize: '15px',
                      color: '#607D8B', display: 'inline-block',
                        marginLeft: 5,}}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}>Terms</a>
              <a href="#1" style={{textDecoration: this.state.style,fontSize: '15px',
                      color: '#607D8B', display: 'inline-block',
                        marginLeft: 5,}}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}>Privacy policy</a>
              <a href="#1" style={{textDecoration: this.state.style,fontSize: '15px',
                      color: '#607D8B', display: 'inline-block',
                        marginLeft: 5,}}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}>Cookies</a>
              <a href="#1" style={{textDecoration: this.state.style,fontSize: '15px',
                      color: '#607D8B', display: 'inline-block',
                        marginLeft: 5,}}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}>Ads info</a>
              <a href="#1" style={{textDecoration: this.state.style,fontSize: '15px',
                      color: '#607D8B', display: 'inline-block',
                        marginLeft: 5,}}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}>Brand</a>
              <a href="#1" style={{textDecoration: this.state.style,fontSize: '15px',
                      color: '#607D8B', display: 'inline-block',
                        marginLeft: 5,}}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}>Blog</a>
              <a href="#1" style={{textDecoration: this.state.style,fontSize: '15px',
                      color: '#607D8B', display: 'inline-block',
                        marginLeft: 5,}}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}>Status</a>
              <a href="#1" style={{textDecoration: this.state.style,fontSize: '15px',
                      color: '#607D8B', display: 'inline-block',
                        marginLeft: 5,}}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}>Apps</a>
              <a href="#1" style={{textDecoration: this.state.style,fontSize: '15px',
                      color: '#607D8B', display: 'inline-block',
                        marginLeft: 5,}}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}>Jobs</a>
              <a href="#1" style={{textDecoration: this.state.style,fontSize: '15px',
                      color: '#607D8B', display: 'inline-block',
                        marginLeft: 5,}}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}>Marketing</a>
              <a href="#1" style={{textDecoration: this.state.style,fontSize: '15px',
                      color: '#607D8B', display: 'inline-block',
                        marginLeft: 5,}}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}>Businesses</a>
              <a href="#1" style={{textDecoration: this.state.style,fontSize: '15px',
                      color: '#607D8B', display: 'inline-block',
                        marginLeft: 5,}}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}>Developers</a>
            </small>
          </p>
        </div>
        <Divider />
        <FlatButton labelStyle={btnLabelStyle}
          label="Advertise with Twitter"
          fullWidth={true}
          hoverColor='white'
           icon={imageLaunch} />
      </Paper>
    )
  }
}
