const fs = require('fs');
const pdf = require('pdf-parse');
 
let dataBuffer = fs.readFileSync('./Harsh_Aakoliya.pdf');
// let dataBuffer = fs.readFileSync('./Harsh_Aakoliya (1).pdf');
// let dataBuffer = fs.readFileSync('./Harsh_Aakoliya (2).pdf');
// let dataBuffer = fs.readFileSync('./resume.pdf');
// let dataBuffer = fs.readFileSync('./minimal-resume.pdf');
 
pdf(dataBuffer).then(function(data) {
 
    // number of pages
    console.log("No of pages",data.numpages);
    // number of rendered pages
    console.log("No of rendered pages",data.numrender);
    // PDF info
    console.log("Information about PDF",data.info);
    // PDF metadata
    console.log("Meta data",data.metadata); 
    // PDF.js version
    // check https://mozilla.github.io/pdf.js/getting_started/
    console.log("PDF version",data.version);
    // PDF text
    console.log("Extracted Text",data.text); 

    let res={};
    let entireText=data.text;
    console.log((entireText));
    let sections=[
        "personal details",
        "skills",
        "links",
        "hobbies",
        "language",
        "profile",
        "experience",
        "projects",
        "education",
        "certification",
        "reference",
        ////////////////////////////add another secitons
    ]

    // Splitting the entireText into lines using newline character '\n'
    entireText = entireText.split('\n').filter(line => line.trim() !== ''); // filter out empty lines
    console.log(entireText);
    console.log(entireText.length);

    let curSectionContent=[];
    let curSection="unidentified";
    for(let ithLine of entireText){
        ithLine=ithLine.toLowerCase();
        if(sections.includes(ithLine)){
            res[curSection]=curSectionContent
            curSection=ithLine;
            curSectionContent=[];
            console.log(curSection);
        }
        else{
            curSectionContent.push(ithLine);
        }
    }
    
    let newSkillSet=[];
    for(let skill of res["skills"] || []){
        newSkillSet=newSkillSet.concat(skill.split(","));
    }
    res["skills"]=newSkillSet;
    

    console.log(res);
});