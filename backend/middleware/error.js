module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    if (process.env.NODE_ENV == "devolopment") {
        res.status(err.statusCode).json({
            success: false,
            message: err.message,
            stack: err.stack,
            error:err
        })
    }
    if(process.env.NODE_ENV=="production"){
        let message=err.message;
        let error={...err};
        if(err.name=="ValidationError"){
            message=Object.values(err.errors).map(values=>values.message);
            error=new Error(message);
        }
        if(err.code==11000){
            message=`duplicate key ${Object.keys(err.keyValue)}`
        }
        if(err.name=="CastError"){
            message=`Resourse not Found ${err.path}`
            error=new Error(message) 
        }
        // if(err.name="JsonWebTokenError"){
        //     message=`Jwt Token is Invalid`
        //     error=new Error(message) 
        // }
        res.status(err.statusCode).json({
            success: false,
            message: error.message ||"Internal Server Error"
        })
    }
}