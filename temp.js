function intersect(a, b) {
    var setA = new Set(a);
    var setB = new Set(b);
    var intersection = new Set([...setA].filter(x => setB.has(x)));
    // console.log( Array.from(intersection))
    return Array.from(intersection);
}

function setParameter(level){
    //entry, mid, senior, executive
    if(level==="Entry") return [100,100,100,100];
    if(level==="Mid") return [80,100,100,100];
    if(level==="Senior") return [60,80,100,100];
    if(level==="Executive") return [40,60,80,100];

}

let entry=['a','b','c','d']
let mid=['e','f','g']
let senior=['h','i','j','k']
let executive=['l','m','n','o'];
let whole = [...new Set([...entry, ...mid, ...senior, ...executive])];
    console.log("Whole skill set" + whole);

// let got=['l','m','h','i','j','f','x','y','z','w']
// let got=['l','m','n','i','j','f','x','y','z','w']
let got=['l','m','n','o','h','i','j','f','z','w']

let found_in_db=intersect(whole,got);

let entry_found=intersect(got,entry);
let mid_found=intersect(got,mid);
let senior_found=intersect(got,senior);
let executive_found=intersect(got,executive);
let first=new Set(got);
let second=new Set(whole);
let not_found=['x','y','z','w'];


console.log("Entry level found in DB",entry_found);
console.log("Mid level found in DB",mid_found);
console.log("Senior level found in DB",senior_found);
console.log("executive level found in DB",executive_found);
console.log("Not found in DB",not_found);

let level="Executive";
let parameter=setParameter(level);

let total=parameter[0]*entry_found.length +
          parameter[1]*mid_found.length+
        parameter[2]*senior_found.length+
        parameter[3]*executive_found.length;

console.log(total/got.length);
