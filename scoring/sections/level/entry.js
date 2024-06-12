
import score from "../../score.js";

function entry(resgot){
    let ats=0;
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
    
    return ats;
}

export default entry;