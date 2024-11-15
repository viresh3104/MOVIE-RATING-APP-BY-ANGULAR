var UserService = require("./registerService");

var registerUserControllerFn = async (request, response) => {
  try 
  {
    console.log(request.body);

    var status = await UserService.registerUserDBservice(request.body);
    console.log(status);

    if (status) 
    {
      response.send({ status: true, message: "Registration Successfull" });
    } 
    else 
    {
      response.send({ status: false, message: "Error While Registaring User" });
    }
  } 
   
  catch (err) 
  {
    console.log(err);
  }
};


module.exports = {registerUserControllerFn};