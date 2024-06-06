const asynccronunsfunc=(func)=>{
  return async (req,res,next)=>{
try {
    await func(req,res,next)
} catch (error) {
    res.staus(500).json({
        success:false,
        message:" failed util "+error
    })
}
    }
}
module.exports={
    asynccronunsfunc
}