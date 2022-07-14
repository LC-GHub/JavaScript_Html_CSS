let contents = [];

let input = prompt("please enter instruction");

while(input !== 'quit'){  
    switch(input){
        case "add":
            let toAdd = prompt("Enter task to add");
            contents.push(toAdd);
            console.log(`${toAdd} added into list`)
            break;
        case "del":
            let toDel = prompt("Enter index to delete")
            console.log(`${contents[toDel]} removed from list`)
            contents.splice(toDel, 1);
            
            break;
        case "list":
            console.log("=============")
            for(let i = 0; i<contents.length; i++){
                console.log(`${i} ${contents[i]}`)
            }
            console.log("=============")
            break;
        default:
            console.log("Intruction not recognised.")

    }
    input = prompt("please enter instruction");

}

console.log("Thanks for using todo list")