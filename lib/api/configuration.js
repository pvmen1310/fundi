import axios from 'axios';

export default class Configuration {
    /**
     * Global http request configuration
     */
    static initialize() {
        axios.interceptors.request.use(
            (config)=>{
                // Do something before request is sent
                return config;
            },
            ()=> {
                // Do something with request error
                console.log(error)
                return Promise.reject(error);
            }
        );

        axios.interceptors.response.use(
            response => {
                console.log(response);
                // Do something with response data
                return response;
            },
            error =>  {
                return Promise.reject(error);
            }
        );
    }

    static clientSessionId(){
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 11; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    static setHeader(key, value) {
        axios.defaults.headers.common[key] = value;
    }
}