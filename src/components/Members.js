import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Members.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Members extends Component {
  constructor(props) {
    super(props);
    const url = 'http://localhost:3001/api/members';
    fetch(url).then(response => {return response.json();}).then(members => {
      let output = '';
      members.data.forEach(function(member){
        output += `<div class="member">
        <a href="${member.html_url}" target="_blank">
        <img src='${member.avatar_url}' alt='avatar' class='avatar'>
        <button type="button" class="btn btn-warning name">${member.login}</button>
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
