const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

//Promise
const dataPromise = d3.json(url);
console.log("Data Promise:", dataPromise);

//Get the JSON data 
d3.json(url).then(function(data) {
  console.log(data);

  //create an array of each data
  let names = obeject.values(data.names);
  let metaData = object.values(data.metadata);
  let smaplesData = object.values(data.samples)

  //creating a dropdown list
//   for(var i= 0; i<names.length;i++){
//     var optn =names[i];
//     var el = document.createElement("option");
//     el.textContent = optn;
//     el.value=optn;
//     Selection.appendChild(el);
//   }
  let dropdown =d3.select("#selDataset");
  for(let i in names){
    let option =dropdown.append("option")
    .text(names[i])
    .attr("values",names[i]);
  }
 }
