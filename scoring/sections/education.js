
import score from "../score.js";

function education(resgot){
    let ats=0;
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

    console.log(ats,"after education");

    return ats;
}

export default education;