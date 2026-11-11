const getCurrentUser = async (req,res)=>{
    try{
        if(!req.user){
            return res.json({user:null})
        }
        return res.json(req.user)
    }catch(error){
        res.status(500).json({msg: `Get current user error ${error}`})
    }
}

module.exports = getCurrentUser;