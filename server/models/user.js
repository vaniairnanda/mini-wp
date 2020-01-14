var mongoose = require('mongoose')
var Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

var userSchema = new Schema({
    username: String,
    email: {
        type : String, 
        trim : true,
        required: 'Email address is required', 
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: String
})



userSchema.pre('save', function(next){
    let password = this.password
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    this.password = hash
    next()
})

userSchema.path('email').validate(function(input, done){
   this.model('User').count({email: input}), function (err, done){
     if(err) {
       return done(err.msg)
     }
     if (count > 0 ) {
       this.invalidate('email')
     } else {
       done(!count)
     }
   }
 }, 'email has been registered, use another email')


var User = mongoose.model('User', userSchema)

module.exports = User

