import fetch from 'node-fetch';
import FileReader from 'filereader';

describe('API Test', function(){
    it('GET image from url', function(){
        const URLtoBase64 = url => fetch(url)
            .then(response => response.blob())
            .then(blob => new Promise((resolve, reject) => {
                const reader = new FileReader()
                reader.onloadend = () => resolve(reader.result)
                reader.onerror = reject
                reader.readAsDataURL(blob)
            }))


        URLtoBase64('http://apimeme.com/meme?meme=Alarm-Clock&top=Top+text&bottom=Bottom+text')
            .then(dataUrl => {
                console.log('RESULT:', dataUrl)
            }).catch(err => console.log(err));  
    });
});