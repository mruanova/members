import { Component } from 'react';
import './Members.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Members extends Component {
  constructor(props) {
    super(props);
    fetch(this.props.url).then(response => { return response.json(); }).then(members => {
      let output = '';
      members.data.forEach(function (member) {
        output += `<div class="member">
        <a href="${member.html_url}" target="_blank">
        <img src='${member.avatar_url}' alt='avatar' class='avatar'>
        <button type="button" class="btn btn-warning name">${member.login}</button>
        </a>
        </div>`;
      });

      document.getElementById('root').innerHTML = output;
    }).catch(err => { console.log("error", err); });
  }
  render() {
    return null;
  }
}

export default Members;
