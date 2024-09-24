// functions.js
const axios = require('axios');

const functions = {
    add: (num1, num2, num3) => num1 + num2 + num3,
    isNull: () => null,
    checkvalue: x => x,
    createUser: () => {
        const user = { firstName: 'Brad'};
        user['lastName'] = 'Traversy';
        return user;
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data) 
    .catch(err => 'error')
};

module.exports = functions;
