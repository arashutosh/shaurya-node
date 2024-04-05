let resDocCreated = (res, data) => {
    return res.status(200).send({
      statusCode: "200",
      statusMessage: "Document created successfully!",
      data,
    });
  };
  
  let resDocUpdated = (res, data) => {
    return res.status(200).send({
      statusCode: "200",
      statusMessage: "Document updated successfully!",
      data,
    });
  };
  
  let resDuplicateEmail = (res, data) => {
    return res
      .status(404)
      .send({ statuscode: "404", statusMessage: "email already exist", data });
  };
  
  let resAlreadyExists = (res, data) => {
    return res
      .status(409)
      .send({ statusCode: "409", statusMessage: "already exists!", data });
  };
  
  let resDocDeleted = (res) => {
    return res.status(200).send({
      statusCode: "200",
      statusMessage: "Document deleted successfully!",
    });
  };
  
  let resFound = (res, data) => {
    return res
      .status(200)
      .send({ statusCode: "200", statusMessage: "Document Found!", data });
  };
  let resPaymentVerification = (res, statusCode = 200, msg, data = null) => {
    return res.status(statusCode).send({
      statusCode: String(statusCode),
      statusMessage: msg ? msg : "Document Found!",
      data,
    });
  };
  let resSuccess = (res, data) => {
    return res
      .status(200)
      .send({ statusCode: "200", statusMessage: "login successful", data });
  };
  
  let resUnauthorized = (res, error) => {
    return res
      .status(401)
      .send({ statusCode: "401", statusMessage: "unauthorized ", error });
  };
  
  let resPaginationDoc = (res, data, paginate) => {
    return res.status(200).send({
      statusCode: "200",
      statusMessage: "Document Found!",
      data,
      paginate,
    });
  };
  
  let resNotFound = (res, error) => {
    return res
      .status(203)
      .send({ statusCode: "203", statusMessage: "Document Not Found!", error });
  };
  
  let resErrorOccurred = (res, error) => {
    return res
      .status(203)
      .send({ statusCode: "203", statusMessage: "Error Occurred!", error });
  };
  
  let resMustBeUnique = (res, msg) => {
    return res
      .status(409)
      .send({ statusCode: "409", statusMessage: msg, data: null });
  };
  
  let resAllInputsRequired = (res, error) => {
    return res
      .status(400)
      .send({ statusCode: "400", statusMessage: "All Inputs Required", error });
  };
  
  let resInvalidToken = (res, error) => {
    return res
      .status(401)
      .send({ statusCode: "401", statusMessage: "Invalid token", error });
  };
  
  let resValidationError = (res, error) => {
    return res
      .status(403)
      .send({ statusCode: "403", statusMessage: "Validation Error", error });
  };
  
  let resServerError = (res, error) => {
    if (error.errors) {
      if (error.errors[0].validatorKey === "not_unique") {
        let errMsg = String(error.errors[0].message);
        return resErrorOccurred(res, errMsg.replace("_u1", ""));
      }
    }
  
    return res.status(500).send({
      statusCode: "500",
      statusMessage: "Internal Server Error!",
      error,
    });
  };
  
  let paramNotFound = (res, error) => {
    return res.status(203).send({
      statusCode: "203",
      statusMessage: "Paramenet not specified!",
      error,
    });
  };
  
  const resPasswordMismatch = (res) => {
    return res
      .status(400)
      .json({ error: "Password and confirm password fields should be the same" });
  };
  
  const resDataNotFound = (res, error) => {
    return res
      .status(400)
      .send({ statusCode: "400", statusMessage: "Not getting any Data", error });
  };
  
  const resArrayNotFound = (res, error) => {
    return res.status(400).send({
      statusCode: "400",
      statusMessage: "Please give the questions in array",
      error,
    });
  };
  
  const lengthNotExceed = (res, error) => {
    return res.status(400).send({
      statusCode: "400",
      statusMessage: "Length limit exceeded",
      error,
    });
  };
  
  const noDataAvailable = (res, error) => {
    return res.status(204).send({
      statusCode: "204",
      statusMessage: "No data is available to show",
      error,
    });
  };
  
  const generateUniqueNumber = () => {
    const timestamp = Date.now();
    const randomPart = Math.floor(Math.random() * 9999999);
    const uniqueNumber = `${timestamp}${randomPart}`.slice(0, 16);
    return uniqueNumber;
  };
  
  module.exports = {
    resNotFound,
    noDataAvailable,
    lengthNotExceed,
    resServerError,
    resDocCreated,
    resDocUpdated,
    resUnauthorized,
    resAlreadyExists,
    resErrorOccurred,
    resFound,
    resDocDeleted,
    resPaginationDoc,
    resMustBeUnique,
    resInvalidToken,
    resAllInputsRequired,
    resPasswordMismatch,
    resValidationError,
    paramNotFound,
    resSuccess,
    resDuplicateEmail,
    generateUniqueNumber,
    resDataNotFound,
    resArrayNotFound,
    resPaymentVerification,
  };