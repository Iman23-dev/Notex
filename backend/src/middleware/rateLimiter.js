import ratelimit from "../config/upstash.js"

const rateLimiter = async (req, res, next) => {
    
    try{

        const identifier = req.ip || "127.0.0.1"
        const result = await ratelimit.limit(identifier)
        console.log(result)
        const {success} = result ;
      

        if(!success){
           return res.status(429).json({message : "Too many requests , please try again later"})
        }

    next();
    }catch(error){
        console.log("Rate limit error", error)
        next()
    }
    
}


export default rateLimiter