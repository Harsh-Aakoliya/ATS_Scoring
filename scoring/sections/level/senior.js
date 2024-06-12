import score from "../../score.js";

function senior(resgot){
    let ats=0;
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
    return ats;
}

export default senior;