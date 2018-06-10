
class ApiUtils {
    constructor(){
        this.url = 'https://api.iunigo.com/';
    }

    evalResponse(response) {
        console.debug('first instance of response: ');
        console.debug(response);
    
        if (!response.ok) {
            var data = '';
            response.text().then(text => {data = text}).catch();

            throw {
                'errorUrl': response.url,
                'errorCode': response.status,
                'errorText': response.statusText,
                'errorData': data
            };
        }
    
        return response;
    }
}

export default ApiUtils;