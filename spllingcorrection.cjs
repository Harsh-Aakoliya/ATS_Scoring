var Typo = require("typo-js");
var dictionary = new Typo("en_US");


// let exp="I have extensve experince in web devlopment, spcializing in both front-end and back-end technologies. My skils include HTML, CSS, JavaScript, and React for creating resposive and interactiv user interfaces. On the server side, I am proficent with Node.js, Express, and MongoDB. I have worked on several projects, ranging from simple websites to complex web aplications, always ensuring high preformance and scalbility. I am also familir with version control systems like Git, which I use to manage code effeciently and colaborate with other developers."
let exp="I studdied web devlopment at the Univrsity of Computr Science, where I lerned the fundmentals of HTML, CSS, and JavaScript. I also took advnced courses in React, Node.js, and databse managment. My eduaction included practical projects that invloved building resposive websites and dynamic web aplications. I particpated in various hackathons and group projects, which helped me develop strong problm-solving and colaboration skils."

let temp=exp.split(/[ -:'.,!?;]/g)


console.log(temp);


for(let wrd of temp){
    if(wrd!=''){
        var is_spelled_correctly = dictionary.check(wrd);

        if(!is_spelled_correctly){
            var array_of_suggestions = dictionary.suggest(wrd);

            console.log("suggestion for ",wrd,array_of_suggestions)
        }

        
    }
}

var is_spelled_correctly = dictionary.check("mispelled");

console.log(is_spelled_correctly)

var array_of_suggestions = dictionary.suggest("mispeling");

console.log(array_of_suggestions)