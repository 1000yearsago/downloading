const https = require('https');
const fs = require('fs');

const text = fs.createWriteStream('downloading/text.txt');
const req = https.get('https://raw.githubusercontent.com/4nth0nyl1MHC/UK-Scanning-Directory-2019/77136ccadea675af2345a40a0287f93ebe40e51f/UK%20Scanning%20Directory%20-%20January%202019/Various%20Misc%20Files/UK%20Airports%202019%20(VHF%20%26%20UHF)/London%20Swanwick%20Control%202017.txt', (res) => {
    res.pipe(text);

    text.on('finish', () => {
        fs.readFile('downloading/text.txt', 'utf-8', (err, data) => {
            if (err) {
                console.error(err);
            } else {
                const rows = data.split('\n').length - 1;
                console.log(rows);
            }
        });
        text.close()
    });
});