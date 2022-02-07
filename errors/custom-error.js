

class CustomerAPIError extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode;
    };
};

const createCustomError = (msg,statusCode) => {
    return new CustomerAPIError(msg,statusCode);
};


module.exports = {
    CustomerAPIError,
    createCustomError
};
