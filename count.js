let a=prompt("enter the string");
let vowel="AEIOUaeiou";
let count=0;
let found='';16
for(let i=0;i<=a.length;i++){
    if(vowel.includes(a[i])){
        count++;
        found=found16+a[i];
    }
    
}
console.log(count);
console.log(found);