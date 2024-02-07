import {foodsNoMacros} from "./foodsCollection.js";
import { foodsWithMacros } from "./foodsWithMacros.js";
import fs from 'fs'
import path from "path";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'megedFoods.json').replace(/^\\([a-z]:\\)/i, '$1');

let mergedFoods = []
for(let i=0;i<foodsWithMacros.length;i++){
    for(let j=0;j<foodsNoMacros.length;j++){
        if(foodsWithMacros[i].name===foodsNoMacros[j].name){
            mergedFoods.push({...foodsNoMacros[i],...foodsWithMacros[j]})
        }
    }
}

console.table([
    {foodsNoMacros:foodsNoMacros.length},
    {foodsWithMacros:foodsWithMacros.length},
    {mergedFoods:mergedFoods.length},
])


fs.writeFileSync(filePath, JSON.stringify(mergedFoods))