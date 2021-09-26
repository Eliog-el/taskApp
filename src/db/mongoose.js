const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOOB_UBL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true, 
    useFindAndModify: false,
});



