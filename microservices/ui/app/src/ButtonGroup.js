import React from 'react';
import FlatButton from 'material-ui/FlatButton';
const styles = {

}

const ButtonGroup = () => (
<div>
    <FlatButton label="Home" style={styles}/>
    <FlatButton label="Notifications" style={styles} />
    <FlatButton label="Mesage"  style={styles}/>
</div>
);

export default ButtonGroup;
