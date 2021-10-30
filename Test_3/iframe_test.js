const {Builder, By, Key} = require('selenium-webdriver');
const driver = new Builder().forBrowser('chrome').build();

describe('iFrame test', function(){

    beforeEach(async function(){
        await driver.get('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe');
    })

    it('', async function(){
        await driver.executeScript("document.getElementsByClassName(\"cm-m-xml cm-string\")[0].textContent='\"https://www.bing.com\"';");
        //await driver.findElement(By.id('runbtn')).click();
    });
});

