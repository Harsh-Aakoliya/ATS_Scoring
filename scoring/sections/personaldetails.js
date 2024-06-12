import score from "../score.js";

function personaldetails(resgot){
    let ats=0;
    console.log("Finding ats for personal details");
    let c=resgot.personalDetails.name.first_name[0];
    if('A'<= c && c<='Z') ats+=(100*score.name/2);
    c=resgot.personalDetails.name.last_name;
    if('A'<=c && c<='Z') ats+=(100*score.name/2);

    if(resgot.personalDetails.haveContactNo) ats+=100*score.haveContactNo;

    if(resgot.personalDetails.haveEmail) ats+=100*score.haveEmail;

    console.log(ats,"after personal details");
    return ats;
}

export default personaldetails;