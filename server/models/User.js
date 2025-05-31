const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

      username: {
        type: String,
        required: true,
        trim: true
      },

      email:    {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
      },

      password: {
        type: String,
        required: true
      },

      bod: {
        type: Date,
        required: true,

      },

      gender:   {
        type: String,
        enum: ['Male', 'Female', ' Other'],
        required: true
      },

      address:  {
        type: String,
        required: true

      }

        },{

            timestamp: true


});

module.exports = mongoose.model('User', UserSchema);
