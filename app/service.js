const axios = require('axios');

class Service {

    apiUrl = 'http://localhost:3000';

    get(command) {
        axios.get(`${this.apiUrl}/${command}`)
            .catch(error => {
                console.log(error);
            });
    }

    confirm() {
        this.get('confirm');
    }

    next() {
        this.get('next');
    }
}

const service = new Service();

module.exports = {
    confirm: () => service.confirm(),
    next: () => service.next()
}
