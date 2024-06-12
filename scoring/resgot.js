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

export default resgot;