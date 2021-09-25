let db = require('../db/db');

exports.list = (req, res) => {
    console.log('GET /record');

    // issue the query; SELECT word FROM words_amanda
    // and process the result
    // if there is an error respond back with 500
    // if there is no error
    // 0. Instantiate an empty array
    // 1. loop through the results
    // 2. add every word that comes back to an array
    // 3. send the array back on the response

    let sql = 'SELECT word FROM words_amanda';
    
    
    db.query(sql, (error, rows) => {
        if(error) {
            // If there is an error respond back with 500
            console.log('There was an error');
            res.sendStatus(500);
        } else {
            // If there is no error respond back with 204
            let responseArray = [];
            let results = rows;

            results.forEach(result => {
                responseArray.push(result.word);
            });

            res.json(responseArray);
        }
    })
}

exports.create = (req, res) => {
    console.log('POST /record', req.body);
    // Get the word from the request
    let word = req.body.word;

    // Send the word as an insert statement to the db
    // insert into words_amanda (word) values ('elephant');
    let sql  = `INSERT INTO words_amanda(word) values ('${word}')`;
    db.query(sql, (error, rows) => {
        if (error) {
            // return a response of 500 if the query fails
            res.sendStatus(500);
        } else {
            // return a response of 204 if the query is successful
            res.sendStatus(204);
        }
    });
}