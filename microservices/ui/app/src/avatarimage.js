import React from 'react';
import Avatar from 'material-ui/Avatar';

const imageName = require('./images/profile.png');

export default class AvatarImage extends React.Component {
  render() {
    return(
      <Avatar src={imageName}
        size={this.props.size}
        style={{marginTop: 5, marginRight: 5}} />
    )
  }
};
