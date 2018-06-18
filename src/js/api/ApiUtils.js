
class ApiUtils {
    constructor(){
        this.url = 'https://api.iunigo.com/';
    }

    async evalResponse(response) {
        console.debug('first instance of response: ');
        console.debug(response);
    
        if (!response.ok) {
            var body = await response.text().then(text => {return text});

            throw {
                'errorUrl': response.url,
                'errorCode': response.status,
                'errorText': response.statusText,
                'errorBody': body
            };
        }
    
        return response;
    }
}

export default ApiUtils;