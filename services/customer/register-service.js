var async = require('async');
const registerModel = require('../../models/customer/register-model');

module.exports = {
    customerRegister: (data, callBack) => {
        async.waterfall([
            function(nextCb) {
                registerModel.customerRegistration(data, function(result) {
                    nextCb(null, result);
                })
            }
        ], function(err, result) {
            if (err) {
                callBack({
                    success: false,
                    STATUSCODE: 403,
                    message: 'Request Forbidden',
                    response_data: {}
                })
            } else {
                callBack(result);
            }
        });
    },

    customerLogin: (data, callBack) => {
        async.waterfall([
            function(nextCb) {
                registerModel.customerLogin(data, function(result) {
                    nextCb(null, result);
                })
            }
        ], function(err, result) {
            if (err) {
                callBack({
                    success: false,
                    STATUSCODE: 403,
                    message: 'Request Forbidden',
                    response_data: {}
                })
            } else {
                callBack(result);
            }
        });
    },

    forgotPassword: (data, callBack) => {
        async.waterfall([
            function(nextCb) {
                registerModel.forgotPassword(data, function(result) {
                    nextCb(null, result);
                });
            }
        ], function(err, result) {
            if (err) {
                callBack({
                    success: false,
                    STATUSCODE: 403,
                    message: 'Request Forbidden',
                    response_data: {}
                })
            } else {
                callBack(result);
            }
        });
    },

    resetPassword: (data, callBack) => {
        async.waterfall([
            function(nextCb) {
                registerModel.resetPassword(data, function(result) {
                    nextCb(null, result);
                });
            }
        ], function(err, result) {
            if (err) {
                callBack({
                    success: false,
                    STATUSCODE: 403,
                    message: 'Request Forbidden',
                    response_data: {}
                })
            } else {
                callBack(result);
            }
        });
    },

    resendForgotPassordOtp: (data, callBack) => {
        async.waterfall([
            function(nextCb) {
                registerModel.resendForgotPasswordOtp(data, function(result) {
                    nextCb(null, result);
                });
            }
        ], function(err, result) {
            if (err) {
                callBack({
                    success: false,
                    STATUSCODE: 403,
                    message: 'Request Forbidden',
                    response_data: {}
                })
            } else {
                callBack(result);
            }
        });
    }
}