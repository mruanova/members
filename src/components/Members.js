import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Members.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Members extends Component {
  constructor(props) {
    super(props);
    const url = "https://api.github.com/orgs/reactjs/members";
    fetch(url).then(response => {return response.json();}).then(data => {
      let output = '';
      data.forEach(function(contact){
        output += `<div class="member">
        <a href="${contact.html_url}" target="_blank">
        <img src='${contact.avatar_url}' alt='avatar' class='avatar'>
        <button type="button" class="btn btn-warning name">${contact.login}</button>
        </a>
        </div>`;
      });

      document.getElementById('root').innerHTML = output;
    }).catch(err => {console.log("error", err);});
  }
  render() {
    return null;
  }
}

ReactDOM.render(<Members />, document.getElementById("root"));

export default Members;
