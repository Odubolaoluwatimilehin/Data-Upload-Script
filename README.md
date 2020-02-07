# Data-Upload-Script
A Script to Uploa or Delete data in MongoDB Using CommandLine Interface

###
Connect the script to your database


Replace the model in the require file appropriately.


`````````````
const model = require('{%SET_UP_DIR_TO MODEL_SCHEMS%}');

`````````````

Read file data


`````````````
const data = '{%DATA_YOU_WANT_TO_UPLOAD%}';

`````````````

### Usage

Run the command below to delete data in the database.
`````````````
$ npm node --delete

`````````````

Run the command below to populate data in the database with the file required.

`````````````
$ npm node --import

`````````````

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
