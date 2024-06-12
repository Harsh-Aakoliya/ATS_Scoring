
import score from "../../score.js";
function mid(gesgot){
    let ats=0;
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
    return ats;
}

export default mid;