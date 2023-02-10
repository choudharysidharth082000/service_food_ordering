module .exports = class Response {
    constructor (status, message, response, statusCode, Data){
        this.status = status;
        this.message = message;
        this.response = response;
        this.statusCode = statusCode, 
        this.Data = Data;
    }
}