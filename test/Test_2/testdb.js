const sqlite3 = require('sqlite3').verbose();
const assert = require('assert');

describe('Countries DB testing', () => {
    let db;
    before(() => {
        db = new sqlite3.Database( __dirname + '/DB/countries.db', sqlite3.OPEN_READONLY, (err) => {
            if (err) console.log(err.message);
        });
    });

    it('Сhecks that the population density is below 50 people/sq.km. only in the USA', async () =>{
        var readAllRecordsFromTable = () => {
            var countries = [];
                db.each(`SELECT Name as name, Population as population, Area as area FROM countries`, (err, country) => {
                    if (country.population / country.area < 50) {
                        countries.push(country.name);
                    }
                }, function() {
                    assert.strictEqual(true, (countries.length === 1 && countries[0] === 'USA'));
                });
        }
        readAllRecordsFromTable()
    });

    it('Checks that the sum of the population of all 4 countries is less than 2 billion people', async () => {
        db.get(`SELECT SUM(Population) as population FROM Countries`, (err, result) => {
            assert.strictEqual(result.population < 2000000000, true)
        });
    });

    after(() => {
        db.close();
    });
});