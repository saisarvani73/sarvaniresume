/*function getfile(file,callback){
var xhr = new XMLHttpRequest();
xhr.overrideMimeType("application/json" );
xhr.open("GET",file,true);
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4 && xhr.status == "200"){
    callback(xhr.responseText);
  }
};
xhr.send(null);
}


getfile("myproject.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
})*/
function loadJSON(file){
  return new Promise((resolve,reject)=>{
  return  fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }
      else
      {
        reject(new Error('error'));
      }
    })
  })
    }
var newFile=loadJSON("myproject.json");
newFile.then(data=>{
console.log(data);
career(data.career);
education(data.education);
})
var childTwo=document.querySelector(".child2");
function career(careerObj)
{
  var careerHeading=document.createElement("h2");
  careerHeading.textContent="career objective";
  childTwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
  careerHeading.appendChild(hr);
  var p1=document.createElement("p");
  p1.textContent=careerObj.info;
  childTwo.appendChild(p1);
}
function education(edu)
{
var careerHeading1=document.createElement("h2");
careerHeading1.textContent="eductional qualification";
childTwo.appendChild(careerHeading1);
var hr1=document.createElement("hr");
careerHeading1.appendChild(hr1);
for (var i=0;i<edu.length;i++){
  var eduH3=document.createElement("h3");
  eduH3.textContent=edu[i].degree;
  childTwo.appendChild(eduH3);
  var eduUl=document.createElement("ul");
  var eduLi=document.createElement("li");
  eduLi.textContent=edu[i].institute;
  eduUl.appendChild(eduLi);
  childTwo.appendChild(eduUl);
  var eduLi1=document.createElement("li");
  eduLi1.textContent=edu[i].data;
  eduUl.appendChild(eduLi1);
  childTwo.appendChild(eduUl);
}
}
