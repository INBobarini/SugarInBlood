import fs from 'fs';
import axios from 'axios';
import { parse } from 'node-html-parser';
import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'foodsCollection.json').replace(/^\\([a-z]:\\)/i, '$1');

//-fetching the foodcollection table
const URLLINK = 'https://glycemic-index.net/glycemic-index-chart/';
const response = await axios.get(URLLINK);
if (response.status !== 200) {
    throw new Error(`HTTP error! Status: ${response.status}`);
}
const htmlContent = response.data;
const root = parse(htmlContent);
if (!root.querySelector('.tftable')) {
    throw new Error("table element not found");
}
const table = root.querySelector('.tftable');
//probably move it to models
class Food {
    constructor(photo, name, GI, GL, singleUrl) {
        this.photo = photo;
        this.name = name,
        this.GI = GI,
        this.GL = GL
    }
}
//manipulating the fetched  html to get a json file
const tableData = table.querySelectorAll('tr').slice(1); //removes headers row 
const rows = Array.from(tableData);
const foodsCollection = [];
for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].querySelectorAll('td');
    let rowData = [];
    for (let j = 0; j < cells.length; j++) {
        if (cells[j].text === '\n') {
            let img = cells[0].querySelector('img');
            rowData.push(img?.getAttribute('src') || ' ');
        }
        else
            rowData.push(cells[j].text);
    }
    const food = new Food(...rowData);
    foodsCollection.push(food);
}
const foodsDataCollection = JSON.stringify(foodsCollection);
fs.writeFileSync(filePath, foodsDataCollection);
