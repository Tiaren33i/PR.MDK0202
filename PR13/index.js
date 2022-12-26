let x = 7
let y = 4
let z = 7

let t = 0
let u = 0
let v = 0

v=x-y;
w=y-z;

if (v<=w) {
t=w%2;
}else u=v*2;
if (u<=t) {
    w=Math.cos(t);
}else w=Math.sin(u)

console.log(w)