import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3004',
    // timeout: 3000,
    headers: {
        'X-Custom-Header': 'nisa',
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
});
