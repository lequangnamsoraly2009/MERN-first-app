const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) =>{
    const authHeader = req.header('Authorization');
    //Thang token trong header se co dang Bearer token -> De lay duoc token ta lam nhu sau:
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({success:false,message:"Access token not found"});
    }

    // Neu co token - kiem tra token nay co verify voi token minh phat hanh cho no hay khong 

    try {
        //Kiem tra token voi accesstokensecret 
        const decoded = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        //decoded se~ kiem tra neu dung thi se tra ve 1 object chua userId da ki' ban dau

        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.log(error);
        return res.status(403).json({success:false,message:"Invalid token"});
    }
}

module.exports = verifyToken;