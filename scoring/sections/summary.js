import score from "../score.js";
function validate_summary(summary){
    let temp=summary.split(/[ -:'.,!?;_]/g);
    // console.log(temp.length);
    if(50<=temp.length && temp.length<=75) return 1;
    return 0;
}
function summary(resgot){
    let ats=0;
    ats+=(validate_summary(resgot.summary.description))*score.summary_description*100;

    return ats;
}

export default summary;