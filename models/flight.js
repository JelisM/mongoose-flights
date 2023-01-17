const mongoose = require('mongoose');
//optional shortcut to the moongose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema ({

airport: {
    type: String,
    enum:['AUS','DFW','LAX','SAN'],

},

arrival: {
    type: Date,
   
},



}, {
    timestamps: true

})
const  flightSchema = new Schema ({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        
    
    },

    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN','LAX','SAN'],
        default: 'DEN',
        required: true,
    
    },
    
    
    flightNo: {
        type: Number,
        min:[10, ""],
        max:[9999, ""],
        required: true,

    },

    departs: {
        type: Date,
        default: () => Date.now() + 365*24*60*60000, // add 1 year from now 

    },
    destinations: [destinationSchema]
    }, {
        timestamps: true
});



// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);