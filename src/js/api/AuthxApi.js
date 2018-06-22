import ApiUtils from './ApiUtils';

const utils = new ApiUtils();

class AuthxApi {
    constructor(){
        this.basePath = utils.url + 'auth_tokens';
    }

    getTokenByEmail(userEmail) {
        console.debug('email user in request: ' + userEmail);

        return fetch(this.basePath, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: userEmail
            })
        })
        .then(utils.evalResponse)
        .then(res => {return res.json()})
        .then(json => {return Promise.resolve(json.token)});
    }
}

export default AuthxApi;