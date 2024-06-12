import score from "../score.js";
let level;
let idealsize="A4";
let standerfont=[
    'Arial', 'Cambria', 'Garamond','Times New Roman'
]
let buzzwords=["Results-driven", "Passionate", "Dynamic", "Proactive", "Experienced", "Highly qualified", "Top performer", "Think outside the box", "Value add", "Synergy", "Go-to person", "Thought leadership", "Industry expert", "Bottom line", "Big picture", "Motivated", "Track record", "Effective", "Seasoned", "Action-oriented", "Customer-focused", "Fast-paced", "Strong work ethic", "Leverage", "Cutting-edge", "Groundbreaking", "Hit the ground running", "Game-changer", "Guru", "Ninja", "Rockstar", "World-class", "Paradigm shift", "Robust", "Scalable", "Disruptive", "Innovative", "Holistic approach", "Agile", "Pioneer"]

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

function getnoofpages(level){
    if(level==="Entry" || level==="Mid") return 1;
    return 2;
   }
function metadata(resgot,level){
    let ats=0;
    let idealnoofpages=getnoofpages(level)
    let first_name=resgot.personalDetails.name.first_name;
    let last_name=resgot.personalDetails.name.last_name;

    if(resgot.metadata.noofpages===idealnoofpages) ats+=(score.noofpages)*100;

    if(resgot.metadata.size === idealsize) ats+=(score.size)*100;

    ats+=score.font*fontvalidation(resgot.metadata.font,standerfont)*100;

    ats+=score.file_name*checkFileName(resgot.metadata.file_name,first_name,last_name)*100;

    ats+=(resgot.metadata.file_name_length<=24)*score.file_name_length*100;

    ats-=(validate_buzzword(resgot.metadata.buzzwords));

    ats+=(validate_noofwords(resgot.metadata.noofwords,level)*score.noofwords*100);

    console.log(ats,"after metadata");
    return ats;

}

export default metadata;