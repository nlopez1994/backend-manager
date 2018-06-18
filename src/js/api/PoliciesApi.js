import ApiUtils from './ApiUtils';

const utils = new ApiUtils();

class PoliciesApi {
    constructor() {
        this.basePath = utils.url + 'policies';
    }

    getPolicyByAccountId(accountId) {
        console.debug('Policy requested for account: ' + accountId);

        return fetch(this.basePath + '?accountId=' + accountId)
        .then(utils.evalResponse)
        .then(res => {return res.json()})
        .then(json => {return Promise.resolve(json[0])});
    }

}

export default PoliciesApi;