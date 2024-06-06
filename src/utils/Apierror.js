class Apierror extends Error{
   constructor(
    stauscode,
    message="no message till"
   ){
    super(message);
     this.stauscode=stauscode,
     this.message=message;
   }
}
module.exports={
    Apierror
}