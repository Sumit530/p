const mongoose = require("mongoose")

const Schema = new  mongoose.Schema({
    user_id : {
        type:mongoose.Schema.Types.ObjectId,
        ref : 'User',
    },
    
    client_id : {
        type:mongoose.Schema.Types.ObjectId,
        ref : 'User',
        require:true
    },
    name: {
        type:String,
        require:true
    },
    scopes : {
        type:String
    },
    revoked : {
        type:Number,
        require:true
    },
    expires_at : {
        type:Date,
        default:null
        
    }
},
{timestamps:true})
const oauth_access_tokens = new mongoose.model("oauth_access_tokens",Schema)
module.exports = oauth_access_tokens;