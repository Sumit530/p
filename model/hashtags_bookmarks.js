const mongoose = require("mongoose")

const Schema = new  mongoose.Schema({
    user_id : {
        type:mongoose.Schema.Types.ObjectId,
        ref : 'Users',
        require:true
    },
    hashtag_id : {
        type:mongoose.Schema.Types.ObjectId,
        ref : 'hashtags',
        require:true
    },
    status : {
        type : Boolean,
        default:true
    },
    created_at : {
        type:Date,
        default:Date.now()
        
    },
    updated_at : {
        type:Date,
        default:null
        
    }

})
const hashtags_bookmarks = new mongoose.model("hashtags_bookmarks",Schema)
module.exports = hashtags_bookmarks;