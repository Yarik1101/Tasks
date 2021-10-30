const sqlite3 = require('sqlite3').verbose();
const assert = require('assert');

describe('DB Testing', function(){
    before(function(){
        global.db = new sqlite3.Database("C:/Users/User/Desktop/Test tasks/Test_2/DB/countries.db", sqlite3.OPEN_READONLY, (err) => {
            if (err) {
                console.error(err.message);
            };
            console.log('Connected to the database.');
        });
    });

    it('Сhecks that the population density is below 50 people/sq.km. only in the USA', async function(){
        var countries = [];
        db.serialize(() => {
            db.each(`SELECT Name as name, Population as pop, Area as area FROM countries`, (err, row) => {
                if (err) {
                    console.error(err.message);
                };
                if (row.pop/row.area < 50){
                    countries.push(row.name);
                };
            });
        });
        assert.equal(true, (countries.length === 1 && countries[0] === 'USA'));
    });

    it('Checks that the sum of the population of all 4 countries is less than 2 billion people', function(){
        let sum = 0;
        db.serialize(() => {
            db.each(`SELECT Population as pop FROM countries`), (err, row) => {
                if (err){
                  console.log(err.message);
                };
                sum += row.pop;
                console.log(sum);
            }
            console.log(sum);
            assert.equal(true, sum < 2000000000);
        });
    });
});
