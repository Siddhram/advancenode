const { t } = require("tar");

class Apiresponce{
    constructor(
        statuscode,
        data,
        message='succsess'
    ){
  this.statuscode=statuscode,

  this.data=data,
  this.message=message
    }
}
module.exports={
    Apiresponce
}