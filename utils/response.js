let docCreated = (res,data) => {
    return res.status(200)
        .send({
            statusCode: '200',
            statusMessage:"Document Created Successfully",
            data
        })
}

let docUpdated = (res,data) => {
    return res.status(200)
    .send({
        statusCode:'200',
        statusMessage:"Document Updated Successfully",
        data
    })
}
let resFound = (res,data) => {
    return res.status(200)
    .send({
        statusCode:'200',
        statusMessage:"Document Found Successfully",
        data
    })
}

let docDeleted = (res,data) => {
    return res.status(200)
    .send({
        statusCode:'200',
        statusMessage:"Document Deleted Successfully",
        data
    })
}

let  resNotFound =(res,error)=>{
    return res.status(404)
    .send({
        statusCode:'404',
        statusMessage:"Document Not Found",
        error
    })
}
let serverError = (res,error) => {
    return res.status(500)
    .send({
        statusCode:'500',
        statusMessage:"Server Error",
        error
    })
}

module.exports ={
    docCreated,
    docUpdated,
    docDeleted,
    serverError,
    resFound,
    resNotFound
}