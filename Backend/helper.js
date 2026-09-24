//koi bhi value ko safe text bana deta hai.
// agar value text nahi hai (jaise koi object) to  "" milta hai. isee hackeing se bachav hota hai.

export function text(value){
    return typeof value=== "string"? value.trim():"";
}
// Error ka jawab bhejta hai.Frontend "message"/ error pdhta hai.
// status -> 400=galat data 401- login nhi hai, 409- phele se hai, 
//500- server error 
// error

export function sendError(res, status, message, errors){
    res.status(status).json({success: false, message, errors})
}