
// import file system modeule to read data
const fs = require('fs');

// set up enviroment varibles and connect to database.

const dotenv = require('dotenv');
dotenv.config({
    path: './config.env'
});
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
const mongoose = require('mongoose');
mongoose.connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(
        console.log('DB connection is successful!')

)

// IMPORATNT
// set up connection to your model
const model = require('{%SET_UP_DIR_TO MODEL_SCHEMS%}');
//
//end


//read file data
const data = '{%DATA_YOU_WANT_TO_UPLOAD%}';
const data = JSON.parse(fs.readFileSync(data, 'utf-8'));
//

//IMPORT DATA INTO DB

const importData = async () => {
    try {
        await model.create(data);
        console.log('Data Upload successful!');
        process.exit();
    } catch (err){
        console.log(err);
    }
}


// DELETE DATA FROM DB
const deleteData = async () => {
    try {
        await model.deleteMany();
         console.log('Data Delete successful!');
          process.exit();
    } catch (err){
        console.log(err);
    }
}

//console.log(process.argv);

if(process.argv[2] === '--import'){
    importData();
} else if (process.argv[2] === '--delete'){
    deleteData();
}