console.log("scoring system");

let commonres={
    "metadata":{
        "noofpages":1,
        "size":"A4",
        "font":[
            
        ],
        "file_name":"fancy.pdf",//it should be in form of "Resume-Harsh-Aakoliya.pdf" or do not leave space
        "file_name_length":9,//it should not be >30, Many computer systems only show the first 24 characters including spaces.
        "buzzwords":[
            "Guru","Ninja","Coder","Highly qualified","Passionate"
        ],
        "noofwords":270
    },
    "Personal Details":{
        "name":{
            "first_name":"Harsh",
            // "iscapital_middle_name":true,
            "last_name":"Aakoliya" 
        },
        "haveContactNo":true,
        "haveEmail":true,
    },
    "summary":{
        "isavailable":true,
        "description":"Software engineer with a proven ability to adapt in both self-starting andcollaborative environments while staying focused on achieving high-quality results under strict deadlines. This quality and results-basedapproach drove me to collaborate with the VP of sales at Squarespace tocreate a digital marketing campaign that tripled average signups in asingle month. Eager to obtain a challenging position at a prestigiouscompany like Dream Version that will expand my learning and build uponmy developer skills"
    },
    "education":[
        {
            "School":true,//school can be consedered as location
            "Degree":false,
            "date":false,
            "date_formated":false,
            "GPA":false,
            "description":"Studled Advanced Soclal Work Practlce Theorles And Evldence-8ased lnterventlons.Completed Fleld Practlcum ln A Speclallzed Area And Knowledge.Conducted Researc"
        }
    ]

}

const Entry={
    "Projects":[
        {
            "duration":6,//bydefault value will be 0
            "description":"Studled Advanced Soclal Work Practlce Theorles And Evldence-8ased lnterventlons.Completed Fleld Practlcum ln A Speclallzed Area, Galnlng Practlcal Skllls And Knowledge.Conducted Researc"
        },{
            "duration":0,
            "description":"Studled Advanced Soclal Work Practlce And Evldence-8ased lnterventlons.Completed Fleld Practlcum ln A Speclallzed Area, Galnlng Practlcal Skllls And Knowledge.Conducted Researc"
        }
    ],
    "skills":[
        'c',
        'cpp',
        'html',
        'css',
        'javascript',
        'python'
    ]
}

const Mid={
    "Internship":{
        "haveDuration":true,
        "start":"january 5 2024",
        "end":"june 5 2024",
        "duration":6,//in terms of no of months
        "Description":""
    },
    "skills":[
        'database',
        "core java",
        "system design",
        "architecture",
        "documentation",
        ".net",
        'Kubernetes',
        'docker',
        "angular",
        "react"
    ],
    "education":{
        "detected":true,
        "date_found":true,
        "date_formate":true,
        "location_found":true,
        "Grade_found":false,
    }
}

const Senior={
    "Experience":{

    },
    "skills":[
        'seo',
        'redis',
        "DevOps",
        "GraphQL",
        "Mentoring",
        "git",
        'testing',
        'cloude computing'
    ]
}
const Executive={
    "Experience":{

    },
    "skills":[
        'leadership',
        'communication',
        'Budgeting',
        'framworks'
    ]
}


const score={
    ////////////////////////// score outof 10 for metadata
    "noofpages":0.01,
    "size":0.01,
    "font":0.01,
    "file_name":0.02,
    "file_name_length":0.01,
    "buzzwords":0.01,
    "noofwords":0.02,
    ///////////////////////// score outof 10 for personaldetails
    "name":0.01,
    "haveContactNo":0.01,
    "haveEmail":0.01,
    //////////////////////// summary
    "summary_isavailable":0.1,
    "summary_description":0.01,
    //////////////////////// Entry
    "Projects":0.5,
    "education":0.02,


    ////////////////////////mid
    "internship":0.5,


    //////////////////////senior or executive
    "experience":0.5
    
}

const resgot={
    "metadata":{
        "noofpages":1,
        "size":"A1",
        "font":[
            "Arial","Monospace"
        ],
        "file_name":"Harsh_Aakoliya.pdf",
        "file_name_length":9,
        "buzzwords":[
            "Guru","Ninja","Coder","Highly qualified","Passionate"
        ],
        "noofwords":239
    },
    "summary":{
        "description":"Software engineer with a proven ability to adapt in both self-starting andcollaborative environments while staying focused on achieving high-quality results under strict deadlines. This quality and results-basedapproach drove me to collaborate with tocreate a digital marketing campaign that tripled average signups in asingle month. Eager to obtain a challenging position at a prestigiouscompany like Dream Version that will expand my learning and build uponmy developer skills"
    },
    "personalDetails":{
        "name":{
            "first_name":"Harsh",
            // "iscapital_middle_name":true,
            "last_name":"Aakoliya" 
        },
        "haveContactNo":true,
        "haveEmail":true,
    },
    "education":[
        {
            "School":true,//school can be consedered as location
            "Degree":false,
            "date":false,
            "date_formated":false,
            "GPA":false,
            "description":"Studled Advanced Soclal Work Practlce Theorles And Evldence-8ased lnterventlons.Completed Fleld Practlcum ln A Speclallzed Area And Knowledge.Conducted Researc"
        }
    ],


    //////////for Entry level

    "Projects":[
        {
            "duration":6,//bydefault value will be 0
            "description":"Studled Advanced Soclal Work Practlce Theorles And Evldence-8ased lnterventlons.Completed Fleld Practlcum ln A Speclallzed Area, Galnlng Practlcal Skllls And Knowledge.Conducted Researc"
        },{
            "duration":0,
            "description":"Studled Advanced Soclal Work Practlce And Evldence-8ased lnterventlons.Completed Fleld Practlcum ln A Speclallzed Area, Galnlng Practlcal Skllls And Knowledge.Conducted Researc"
        }
    ],
    "skills":[
        'c',
        'cpp',
        'html',
        'css',
        'javascript',
        'python'
    ],

/////////////////////////////////// Mid level

    "Internship":[
        {
            "position":"google software engineering",
            "start":"january 5 2024",
            "end":"june 5 2024",
            "duration":6,//in terms of no of months
            "description":"Studled Advanced Soclal Work Practlce And Evldence-8ased lnterventlons.Completed Fleld Practlcum ln A Speclallzed Area, Galnlng Practlcal Skllls And Knowledge.Conducted Researc"
        }
    ],


    //////////////////////senior or executive level
    "experience":[
        {
            "Company":"google software engineering",
            "JobTitle":"",
            "Date":"june 5 2024",
            "duration":6,//in terms of no of months
            "description":"Studled Advanced Soclal Work Practlce And Evldence-8ased lnterventlons.Completed Fleld Practlcum ln A Speclallzed Area, erGalnlng Practlcal Skllls And Knowledge.Conducted Researc"
        }
    ]

}

function getnoofpages(level){
 if(level==="Entry" || level==="Mid") return 1;
 return 2;
}

function checkFileName(file_name,first_name,last_name){
    let temp=file_name.split(/[ -:'.,!?;_]/g);
    let havefirstname=temp.includes(first_name);
    let havelastname=temp.includes(last_name);
    if(havefirstname && havelastname) return 1;
    if(havefirstname) return (0.5);
    // if(havelastname) return (0.5);

    return 0;

}

function fontvalidation(got,have){
    var setA = new Set(got);
  var setB = new Set(have);
  var intersection = new Set([...setA].filter(x => setB.has(x)));
    return (intersection.size/have.length);
}


function validate_noofwords(noofwords_have,level){
    if(level==="Entry"){
        if(200<=noofwords_have && noofwords_have<=250) return 1;
        return 0;
    }
    if(level==="Mid"){
        if(250<=noofwords_have && noofwords_have<=500)
            return 1;

        return 0;
    }
    if(level==="Senior"){
        if(500<=noofwords_have && noofwords_have<=650)
            return 1;

        return 0;
    }
    if(level==="Executive"){
        if(650<=noofwords_have && noofwords_have<=700)
            return 1;

        return 0;
    }
}

function validate_buzzword(got){
    if(got.length <=2) return 0.2;
    if(got.length<=4) return 0.5;
    if(got.length<=5) return 1;
}

function validate_summary(summary){
    let temp=summary.split(/[ -:'.,!?;_]/g);
    // console.log(temp.length);
    if(50<=temp.length && temp.length<=75) return 1;
    return 0;
}

//this are the properties that must satiesfy for given level
let level="Senior";//it would be "Entry","Mid","Senior","Executive"
let idealnoofpages=getnoofpages(level)
let size="A4";
let standerfont=[
    'Arial', 'Cambria', 'Garamond','Times New Roman'
]
let buzzwords=["Results-driven", "Passionate", "Dynamic", "Proactive", "Experienced", "Highly qualified", "Top performer", "Think outside the box", "Value add", "Synergy", "Go-to person", "Thought leadership", "Industry expert", "Bottom line", "Big picture", "Motivated", "Track record", "Effective", "Seasoned", "Action-oriented", "Customer-focused", "Fast-paced", "Strong work ethic", "Leverage", "Cutting-edge", "Groundbreaking", "Hit the ground running", "Game-changer", "Guru", "Ninja", "Rockstar", "World-class", "Paradigm shift", "Robust", "Scalable", "Disruptive", "Innovative", "Holistic approach", "Agile", "Pioneer"]



//extracted information for simplification
let first_name=resgot.personalDetails.name.first_name;
let last_name=resgot.personalDetails.name.last_name;

checkFileName("Resume_Harsh_Aakoliya.pdf",first_name,last_name);




let ats=0;


//////////////////////////////////////////////////////////////////////////////////////////////////// metadata
if(resgot.metadata.noofpages===idealnoofpages) ats+=(score.noofpages)*100;

if(resgot.metadata.size === "A4") ats+=(score.size)*100;

ats+=score.font*fontvalidation(resgot.metadata.font,standerfont)*100;

ats+=score.file_name*checkFileName(resgot.metadata.file_name,first_name,last_name)*100;

ats+=(resgot.metadata.file_name_length<=24)*score.file_name_length*100;

ats-=(validate_buzzword(resgot.metadata.buzzwords));

ats+=(validate_noofwords(resgot.metadata.noofwords,level)*score.noofwords*100);



//////////////////////////////////////////////////////////////////////////////////////////////////// summary
ats+=(validate_summary(resgot.summary.description))*score.summary_description*100;


//////////////////////////////////////////////////////////////////////////////////////////////////// personal details
let c=resgot.personalDetails.name.first_name[0];
if('A'<= c && c<='Z') ats+=(100*score.name/2);
c=resgot.personalDetails.name.last_name;
if('A'<=c && c<='Z') ats+=(100*score.name/2);

if(resgot.personalDetails.haveContactNo) ats+=100*score.haveContactNo;

if(resgot.personalDetails.haveEmail) ats+=100*score.haveEmail;


/////////////////////////////////////////////////////////////////////////////////////////Education
const education=resgot.education;

for(let i in education){
    let ith_education=education[i];
    
    let total_parameter=Object.keys(ith_education).length
    
    Object.entries(ith_education).map(entry => {
        let key = entry[0];
        let value = entry[1];
        // console.log(key, value);
        if(key==="description"){
            let len_of_description=(value.split(/[ -:'.,!?;_]/g)).length;
            // console.log("Length of description of educaiton",len_of_description);
            if(20<=len_of_description && len_of_description<=25){
                // console.log("statiefied for education");
                ats+=((100*score.education)/total_parameter)
            }
        }
        else if(value){
            ats+=((100*score.education)/total_parameter);
        }
    });
}


///////////////////////////////////////////////////////skills









////////////////////////////////////////////////// Entry level



if(level==="Entry"){
    console.log("Level is entry");
    //each project details must be of length 20 to 25
    const all_projects=resgot.Projects;
    const each_project_score=score.Projects/all_projects.length
    // console.log(each_project_score);
    for(let project in all_projects){
        if(all_projects[project].duration!=0){
            ats+=100*each_project_score/2;
        }
        let description=all_projects[project].description;
        let len_of_description=(description.split(/[ -:'.,!?;_]/g)).length;
        // console.log("education description length",len_of_description);
        if(20<= len_of_description && len_of_description<=25){
            // console.log("satiesfied");
            ats+=100*each_project_score/2;
        }
    }
}










///////////////////////////////////////////////////Mid level



if(level==="Mid"){
    console.log("Level is Mid");
    //each project details must be of length 20 to 25
    const all_internship=resgot.Internship;
    const each_internship_score=score.internship/all_internship.length
    // console.log(each_project_score);
    for(let internship in all_internship){
        if(all_internship[internship].duration!=0){
            ats+=100*each_internship_score/2;
        }
        let description=all_internship[internship].description;
        let len_of_description=(description.split(/[ -:'.,!?;_]/g)).length;
        if(20<= len_of_description && len_of_description<=25){
            ats+=100*each_internship_score/2;
        }
    }
}







//////////////////////////////////////////////Senior and Executive level



if(level==="Senior" || level==="Executive"){
    console.log("Level is senior or executive");
    const all_experience=resgot.experience;
    const each_experience_score=score.experience/all_experience.length
    console.log(each_experience_score);
    for(let exp in all_experience){
        if(all_experience[exp].duration!=0){
            ats+=100*each_experience_score/3;
        }
        if(all_experience[exp].JobTitle!==""){
            ats+=100*(each_experience_score/3);
        }
        let description=all_experience[exp].description;
        let len_of_description=(description.split(/[ -:'.,!?;_]/g)).length;
        if(20<= len_of_description && len_of_description<=25){
            ats+=100*each_experience_score/3;
        }
    }
}








console.log("ATS score ",ats);