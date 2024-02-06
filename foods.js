import foodsNoMacros from './foodsCollection.js';
import fs from 'fs';
import axios from 'axios';
import { parse } from 'node-html-parser';
import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'foodsWithMacros.json').replace(/^\\([a-z]:\\)/i, '$1');

async function fetchFromUrlandGetHtml(Url){
    const URLLINK = Url;
    const response = await axios.get(URLLINK);
    if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const htmlContent = response.data;
    const root = parse(htmlContent);
    
    return root
}

async function fetchFoodByNameAndGetMacrosObj(foodName){
    let searchName = foodName
        .replaceAll(" ","-")
        .replaceAll("(","")
        .replaceAll(")","")
        .replaceAll(",","")
        .replaceAll("+","")
        .replaceAll("%","")

    let html
    try {
        html = await fetchFromUrlandGetHtml(`https://glycemic-index.net/${searchName}/`)
    } catch (error) {
        return {name:foodName}
    }
    
    let str = html.querySelectorAll('p')[4].textContent
    let obj = {}
    obj.name = foodName

    let matchCalories = str.match(/(\d+)\s*kcal/)
    let matchProteins = str.match(/(\d+\.\d+)\s*grams\s*of\s*proteins/)
    let matchCarbohydrates = str.match(/(\d+\.\d+)\s*grams\s*of\s*carbohydrates/)
    let matchFats = str.match(/(\d+\.\d+)\s*grams\s*of\s*fats/)

    obj.calories = matchCalories? matchCalories[1]: null
    obj.proteins = matchProteins? matchProteins[1] : null
    obj.carbohydrates = matchCarbohydrates? matchCarbohydrates[1] : null
    obj.fats = matchFats? matchFats[1] : null
    
    return obj
}

let foodsWithMacros = []
let result = {}
for (let i=0; i<foodsNoMacros.length;i++){
    result = await fetchFoodByNameAndGetMacrosObj(foodsNoMacros[i].name)
    foodsWithMacros.push(result)
    console.log(result)
}

const foodsDataCollection = JSON.stringify(foodsWithMacros);
fs.writeFileSync(filePath, foodsDataCollection);


    


