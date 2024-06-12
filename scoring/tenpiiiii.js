if(level==="Senior" || level==="Executive"){
    console.log("Level is senior or executive");
    const all_experience=resgot.experience;
    const each_experience_score=score.exp/all_experience.length
    // console.log(each_project_score);
    for(let exp in all_experience){
        if(all_experience[exp].duration!=0){
            ats+=100*each_experience_score/2;
        }
        let description=all_experience[exp].description;
        let len_of_description=(description.split(/[ -:'.,!?;_]/g)).length;
        if(20<= len_of_description && len_of_description<=25){
            ats+=100*each_experience_score/2;
        }
    }
}