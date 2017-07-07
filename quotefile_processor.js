var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('wiki_quotes.txt')
});

var interested = false;

lineReader.on('line', function (line) {
  if (line.startsWith('=')) {
    if (line.trim() === '===Letters===' | line.trim() === '===Works===') {
      interested = true;
    } else {
      interested = false;
    }
  }
  if (interested) {
    if (line.startsWith('*') && !line.startsWith('**')) {
      console.log('"'+line.slice(1).trim().replace('[','').replace(']','').replace('"','\"').replace("'",'\'')+'",');
    }
  }
});
