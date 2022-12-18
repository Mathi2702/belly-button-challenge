const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

//Promise
const dataPromise = d3.json(url);
console.log("Data Promise:", dataPromise);

//Get the JSON data 
d3.json(url).then(function(data) {
  console.log(data);

  //create an array of each data
  let name = Object.values(data.names);
  let metaData = Object.values(data.metadata);
  let smaplesData = Object.values(data.samples)
  //create a dropdown
  let dropdown =d3.select("#selDataset");

  for(let i in name){
    let option =dropdown.append("option")
    .text(name[i])
    .attr("values",name[i]);
  }
 })
