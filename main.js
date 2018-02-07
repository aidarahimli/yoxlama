var a,b,c,x,y,t;
a=34; //numbers
b=23; //numbers
c=true; // boolean
x=salam; //string
y=[23,45,'aref',216,'cem']; // array
document.write(y[2]);
z= Math.abs(-45);
t= Math.sqrt(49);
n_1=Math.random();
var n_1=Math.round(n_1*10);
var n_1=Math.floor(n_1*10+1);
document.write('<hr>' + n_1);

// string functions
 var str ='nihad \'bura\' bax';
 console.log(str.length);
 // tarix funksiyalari

var str = new String();  //'';
var boo= new Boolean();
var num= new Number();
var tarix= new Date();

document.write('<hr>' );
document.write('<hr>' + tarix.getDay() );
document.write('<hr>' + tarix.getDate() );
document.write('<hr>' + tarix.getMinutes() );
document.write('<hr>' + tarix.getHours() );
document.write('<hr>' );

var saat, deqiqe, saniye,salise;
saat=tarix.getHours();
deqiqe=tarix.getMinutes();
saniye=tarix.getSeconds();
salise=tarix.getMilliseconds();

document.write(saat+':'+deqiqe+':'+saniye+':'+salise+);











