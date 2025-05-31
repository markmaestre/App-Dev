const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader ||!authHeader.startWith("Bearer")){
        return res.status (401).json({message: 'Access denied. No token provided'});

    } 

    const token = authHeader.split(" ")[1];

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        res.status(400).json({ message: 'invalid token.'});

    }
}

module.exports = authMiddleware;