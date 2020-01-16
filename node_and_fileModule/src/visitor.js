"use strict";

const fs = require('fs');

const Visitor = class {
    constructor(fullName, age, date, time, comments, person) {
        this.fullName = fullName;
        this.age = age;
        this.date = date;
        this.time = time;
        this.comments = comments;
        this.person = person;
    }
    /*
     *Create a function called save that saves the visitor's data to a JSON file.
     *The file name should be named like this visitor_{their_full_name}.json
    */
    async save() {
        let name = this.fullName.replace('_',' ');
        fs.writeFile('visitor_' + name + '.json', JSON.stringify(this, null, 4), (err) => {
            if (err) {
                throw err;
            }
                console.log(name + ' file has been created');
        });
    
        return this;
    }
    
}

/*
 *Create a function called load that takes in a name and then grabs a Visitor object from file.
 *It should simply console.log the visitor.
*/
function load(fullName) {
    let name = fullName.replace(' ', '_')
    fs.readFile('visitor_' + name +'.json', 'utf8', (err, data) => {
        if(err){
            throw err;
        }else{
             console.log(data);
        }
    })    
}

let alice = new Visitor('Alice_Smith', 21, '13/01/2020', '12:00', 'amazing', 'Sbonelo');
let bob = new Visitor('Bob_Sola', 24, '14/01/2020', '13:00', "he seems alright", 'Sbonelo');
let charlie = new Visitor('Charlie_Zondi', 19, '14/01/2020', '14:00', 'Interesting', 'Sbonelo');
alice.save();
bob.save();
charlie.save();

load('Alice Smith')
load('Bob Sola');
load('Charlie Zondi');

module.exports = {
    Visitor,
    load
}
