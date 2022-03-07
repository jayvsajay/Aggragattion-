var s="sureshuyuhgj hjkfly"
var vowels=['a','e','i','o','u']
 var count=0;
 var co=0;
 var k=0;
function rev(s){
// var a=s.split("");
//display only vowles
// a.forEach(i => {
//     v.forEach(j=>{
    
//         if(i==j){
//             console.log(i);
//             count+=1;
//         }
//     })   
// });
// var b=a.reverse("")
// var c=b.join("")
// console.log(c)
// console.log(count)
for(let v of s) {
    if(vowels.includes(v)){
        console.log(v);
        count+=1;
    }
        
}
for(let v of s) {
    if(!vowels.includes(v)){
        console.log(v);
        co+=1;
}}

for(let c of s){
    if(c!==null && c!==" "){
    k+=1;
    }
}
}
rev(s);
var h="s"
console.log(count);
console.log(co);
console.log(k)
console.log(s.toUpperCase(),s.toLowerCase(h))

