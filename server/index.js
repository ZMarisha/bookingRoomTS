import express from 'express';
import cors from 'cors';
import { readFile } from 'fs/promises'


const DATA_PATH = './data/db.backup.json';


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('data'));

app.get('/', (req, res) => {
  console.log('get response')
})

const readData = () => {
  readFile(DATA_PATH, 'utf-8')
    .then((dataFile) => {
      return JSON.parse(dataFile)
    });
}
  
/*eslint-env browser*/
app.listen('8000', () => {
  console.log('Server is starting');
});
