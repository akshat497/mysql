import jwt from 'jsonwebtoken'
const JwtSecreat="bookingByAkshat"
export function authorization(req,res,next){

    try {
        const token= req.headers['authorization'];
        const response=jwt.verify(token,JwtSecreat);
        req.user=response.userId
        next()
    } catch (error) {   
        res.json({success:false})
        
    }
}