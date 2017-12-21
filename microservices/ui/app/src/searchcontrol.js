import React from 'react';

export default class SearchControl extends React.Component {
  constuctor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = { isSearchRequest : false };
  }

  handleSearch() {
    this.setState({ isSearchRequest: true });
  }

  render() {
     return(
       <div>
         <
       </div>
     )
  }
}
