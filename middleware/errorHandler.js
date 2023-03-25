const {constants} = require("../constants")
const errorhandler = (err,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    switch (statusCode){
        case constants.Validation_Error:
            res.json({
                title : "Validation Failed",
                message : err.message,
                stackTrace : err.stack
            })
            break
        case constants.Not_Found:
            res.json({
                title : "Not Found",
                message : err.message,
                stackTrace : err.stack
            })
            break
        case constants.UnAuthorized:
            res.json({
                title : "UnAuthorized",
                message : err.message,
                stackTrace : err.stack
            })
            break
        case constants.ForBidden:
            res.json({
                title : "For Bidden",
                message : err.message,
                stackTrace : err.stack
            })
            break
        default:
            console.log("No Err All good")
            break
    }
    res.json({title:"Not Found",message : err.message, stackTrace:err.stack});
    res.json({title: "Validation Failed", message : err.message, stackTrace: err.stack})
};

module.exports = errorhandler