import fs from 'fs';
import { json } from 'stream/consumers';

const args = process.argv.slice(2);
 
const data = fs.readFileSync('database.json');
const jsonData = JSON.parse(data);
switch (args[0]) {
    case 'add':
        jsonData.push({"description": args[1] ,"id": jsonData.length + 1 , "status": "todo", "createdAt": new Date(), "updatedAt": new Date()});
        fs.writeFileSync('database.json', JSON.stringify(jsonData));
        break;
    case "list":
        if(args[1] == "done"){
            console.log(jsonData.filter(id => id.status == "done"))
        }
        else if (args[1] == "todo"){
            console.log(jsonData.filter(id => id.status == "todo"))

        }
        else if (args[1] == "in-progress"){
            console.log(jsonData.filter(id => id.status == "in progress"))
        }
        else{
        console.log(jsonData)
        }
        break;
    case "delete":
        const deleteId = args[1];
        jsonData.splice(deleteId - 1, 1);
        jsonData.forEach((item, index) => {
            item.id = index + 1;
        });
        fs.writeFileSync('database.json', JSON.stringify(jsonData));
        break;
    case "update":
        const updateId = args[1];
        const updateDescription = args[2];
        jsonData[updateId - 1].description = updateDescription;
        jsonData[updateId - 1].updatedAt = new Date();
        fs.writeFileSync('database.json', JSON.stringify(jsonData));
        break;
    case "mark-in-progress":
        const inPrgressId = args[1];
        jsonData[inPrgressId - 1 ].status = "in progress"
        console.log(jsonData)
        jsonData[inPrgressId - 1].updatedAt = new Date();
        fs.writeFileSync('database.json', JSON.stringify(jsonData));
        break;
    case "mark-done":
        const doneId = args[1];
        jsonData[doneId - 1 ].status = "done"
        jsonData[doneId - 1].updatedAt = new Date();
        fs.writeFileSync('database.json', JSON.stringify(jsonData));
        break;
    }
