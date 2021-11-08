//import fetch from 'node-fetch';
//import FileReader from 'filereader';
const imageToBase64 = require('image-to-base64');
const assert = require('assert');

describe('API Test. Comparison of local and loaded images', () =>{
    // This code doesn't work, but I don't understand why

    /*it('GET image from url', function(){          
        async function get_blob (url){
            let blob = await fetch(url, {mode: 'no-cors'}).then(function(response){
                return response.blob();
            }).catch(function(error){
                console.log(error);
            });
            const getBase64 = new Promise(function(resolve, reject){
                let reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = () => {
                    resolve(reader.result);
                }
                reader.onerror = () => {
                    reject(reader.error);
                }
            }).then(function(value){
                console.log(value);
            }).catch(function(error){
                console.log(error);
            });
        }
        
        get_blob('http://apimeme.com/meme?meme=Alarm-Clock&top=Top+text&bottom=Bottom+text')
    });*/ 

    const downloadURL = 'http://apimeme.com/meme?meme=Alarm-Clock&top=Top+text&bottom=Bottom+text';
    const localFileName = '/example.jpeg';

    before(async () => {
        const downloadedImage = await imageToBase64(downloadURL);
        assert.strictEqual(downloadedImage !== null, true);
    })

    it('The base64 code of loaded image is equal to local image', async () => {
        const downloadedImage = await imageToBase64(downloadURL);
        const localImage = await imageToBase64(__dirname + localFileName);
        assert.strictEqual(downloadedImage, localImage);
    })

});