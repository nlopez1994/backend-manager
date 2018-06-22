import ApiUtils from './ApiUtils';

const utils = new ApiUtils();

class AccountsApi {
    constructor(){
        this.basePath = utils.url + 'accounts_vehicles';
    }

    getAccountById(accountId){
        console.debug('account requested by id: ' + accountId);

        return fetch(this.basePath + '/' + accountId)
            .then(utils.evalResponse)
            .then(res => {return res.json()})
            .then(json => {return Promise.resolve(json)});
    }

    getVehicleByAccountId(accountId){
        console.debug('vehicle requested by accountId: ' + accountId);

        return fetch(this.basePath + '/' + accountId + '/vehicles')
            .then(utils.evalResponse)
            .then(res => {return res.json()})
            .then(json => {return Promise.resolve(json[0])});
    }
}

export default AccountsApi;