import '@/index.js' ;

console.log(...Object.keys({
    a:1,
    b:2
})) ;
const a = [1,2,3,4]
a.forEach(element => {
    console.log(element)
});
const b = new Promise(resolve=>{
    setTimeout(() => {
        resolve(333)
    }, 1000);
}) ;
b.then(()=>{
    console.log('success')
}) ;
const c = ()=>{
    console.log('arrow ')
}
c() ;
async function d(){
    const e = await b ;
    console.log(e)
}
d() ;
console.log('end')
