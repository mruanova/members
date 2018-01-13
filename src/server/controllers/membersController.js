var http = require("http");

module.exports = {
    index: function (request, response) {
        const axios = require("axios");
        const url = "https://api.github.com/orgs/reactjs/members";
        axios.get(url).then(members => {
            let data = [];
            for (var i = 0; i < members.data.length; i++) {
                let member = {};
                member['login'] = members.data[i].login;
                member['avatar_url'] = members.data[i].avatar_url;
                member['html_url'] = members.data[i].html_url;
                data.push(member);
            }
            response.json({ 'data': data });
        }).catch(error => {
            console.log(error);
            response.json({ 'error': url });
        });
    }
};