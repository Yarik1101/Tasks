const {Builder, By, Key} = require('selenium-chromedriver');
const driver = new Builder().forBrowser('chrome').build();

describe('iFrame test', () => {

    beforeEach(async () => {
        await driver.get('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe');
    })

    it('Test of www.w3schools.com', async () => {
        let htmlBody = `
            <!DOCTYPE html>
            <html>
            <body>
            <h1>The iframe element</h1>
            <iframe src="https://www.bing.com" title="W3Schools Free Online Web Tutorials">
            </iframe>
            </body>
            </html>
        `

        codeTextArea = await driver.findElement(By.className('CodeMirror-scroll'));
        await codeTextArea.click();
        await codeTextArea.sendKeys(Key.CONTROL + "a");
        await codeTextArea.sendKeys(Key.DELETE);
        await codeTextArea.sendKeys(htmlBody);

        await driver.executeScript("document.getElementsByClassName(\"cm-m-xml cm-string\")[0].innerHTML='\"https://www.bing.com\"';");

        let runButton = await driver.findElement(By.id('runbtn'));
        runButton.click();
    });
});

