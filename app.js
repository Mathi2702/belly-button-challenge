const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


function buildCharts(id_no){
    d3.json(url).then(function(data) {
        console.log(data)

        let name = data.names;
        //create a dropdown using ids in names in json file
        let dropdown =d3.select("#selDataset");
    
        //create the dropdownlist
        for(let i in name){
           let option =dropdown.append("option")
           .text(name[i])
           .attr("value",name[i]);
        }
        let panel =d3.select("#sample-metadata")
       
        let metaData = data.metadata.filter(x => x.id == id_no)[0];
        panel.html("")
        Object.entries(metaData).forEach(([key, value]) => {
            panel.append('p').text(`${key}: ${value}`)   
        });


        //Horizontal BarChart  
        let sample = data.samples.filter(x => x.id == id_no)[0];
        console.log(sample)
        let sampleValues = sample.sample_values.slice(0,10).reverse();
        console.log(sampleValues)
        let otuIds = sample.otu_ids.slice(0,10).reverse().map(x=>`OTU ${x}`);
        
        console.log()
        console.log(otuIds)
        var data = [{
            type: 'bar',
            x: sampleValues,
            y: otuIds,
            orientation: 'h'
          }];
          
          Plotly.newPlot("bar", data);


        //Bubble Chart
        var trace1 = {
            x: sample.otu_ids,
            y: sample.sample_values,
            text: sample.otu_labels,
            mode: 'markers',
            marker: {
              size: sample.sample_Values,
              sizemode: 'diameter',
              color: sample.otu_ids,
              colorscale: 'RdBu',
            }
          };
          
          var data = [trace1];
          
          var layout = {
            title: "OTU ID",
            showlegend: false,
            height: 600,
            width: 1000
          };
          
          Plotly.newPlot('bubble', data, layout);


        //Guage Chart


    });
}


function optionChanged(id_no){
    buildCharts(id_no)
}

buildCharts(940)