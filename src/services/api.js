import axios from 'axios';

const API_URL = 'http://localhost:9000/'

export default {
    getBooks: function () {
        return axios.get(API_URL + "books", {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }).then(res => {
            return res.data;
        });
    }
}