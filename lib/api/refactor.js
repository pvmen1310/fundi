import axios from 'axios';

export default class Refactor {
    static launchingGame(query) {
        return axios({
            method: 'post',
            url: axios.defaults.getRefactorAPIURL('wb-game/v1/game/launching-game'),
            data: {query: query},
            headers: {
                "Content-Type": "application/json",
                "cache-control": "no-cache"
            }
        })
            .then(function (res) {
                return res;
            })
            .catch(function (e) {
                return e;
            });
    }

    static transfer(data) {
        return axios({
            method: 'post',
            url: axios.defaults.getRefactorAPIURL('wb-game/v1/game/transfer'),
            data: data,
            headers: {
                "Content-Type": "application/json",
                "cache-control": "no-cache"
            }
        })
            .then(function (res) {
                return res;
            })
            .catch(function (e) {
                return e;
            });
    }

    static depositOnline(data) {
        return axios({
            method: 'post',
            url: axios.defaults.getRefactorAPIURL('wb-payment/v1/deposit/online'),
            data: data
        })
            .then(function (res) {
                return res.data;
            })
            .catch(function (e) {
                return e;
            });
    }

    static uploadBankSlip(data) {
        return axios({
            method: 'post',
            url: axios.defaults.getRefactorAPIURL('wb-payment/v1/deposit/upload-bank-slip'),
            data: data
        })
            .then(function (res) {
                return res.data;
            })
            .catch(function (e) {
                return e;
            });
    }
    static getBankSlip(id) {
        return axios({
            method: 'get',
            url: axios.defaults.getRefactorAPIURL('wb-payment/v1/deposit/bank-slip/' + id),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(function (res) {
                return res.data;
            })
            .catch(function (e) {
                return e;
            });
    }
}
