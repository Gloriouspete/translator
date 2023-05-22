const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const port = process.env.PORT || 3000;
 
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended: true }));
const filePath = path.join(__dirname, 'public', 'index.html');
const filelath = path.join(__dirname, 'public', 'translate.html');


 
app.get('/',(req,res)=>{
  res.sendFile(filePath)
});
app.get('/translapp',(req,res)=>{
  res.sendFile(filelath)
})

app.post('/translate',(req,res)=>{
const {sourcelanguage, targetlanguage,inputtext} = req.body;

const encodedParams = new URLSearchParams();
encodedParams.set('source_language', sourcelanguage);
encodedParams.set('target_language', targetlanguage);
encodedParams.set('text', inputtext);

const options = {
  method: 'POST',
  url: 'https://text-translator2.p.rapidapi.com/translate',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'ddff5fe929msh407424abdd1e0f5p1366f0jsn0fb18f4d9c55',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
  },
  data: encodedParams,
};

axios.request(options)
.then(response => {
  const transalated = response.data.data.translatedText;
  const readmy =`
  <div class="alert">${transalated}</div>
  `
  const mydata = fs.readFileSync(filelath, 'utf8');
  const text = mydata.replace('{{answer}}', readmy);
  res.send(text);
   console.log(transalated);

  })
 .catch(error => {
	console.error(error);
})
})

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
 

 