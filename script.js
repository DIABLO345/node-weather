console.log("hello world");

const getcurdate= () =>{
var month_arr=["JAN","FEB","MAR","APR","MAY","JUNE","JULY","AUG","SEPT","OCT","NOV","DEC"];
var days_arr=["SUN","MON","TUES","WED","THUS","FRI","SAT"];
{/* <p>WED|OCT 23|10:05 AM</p> */}
let curdate=new Date();
var day=days_arr[curdate.getDay()];
var month=month_arr[curdate.getMonth()];
var date=curdate.getDate();
return `${day} | ${month}  ${date}`
};

const getcurtime= () =>{
    let curtime=new Date();
var hour=curtime.getHours();
var minute=curtime.getMinutes();
var timeline="AM";
if(hour>12){
    hour=hour-12;
    timeline="PM";
}
return `${hour}:${minute} ${timeline}`
};
document.getElementById("date").innerHTML= getcurdate() +"|"+ getcurtime();

// const background = () =>{
//     if(document.getElementById("degree").innerHTML>23){
//   document.body.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkKMkJ8POG_HmwzOE5pqLfIq2cakh27fCrHw&usqp=CAU)";
//     }
// };
// setTimeout(background,2000);
