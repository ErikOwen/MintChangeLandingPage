$(document).ready(function() {
       var myGraph = initGraph();
       $( "#spinner" ).change(function() {
         changeGraph(myGraph, this.value);
       });
     });
     function initGraph() {
       var ctx = $("#myChart").get(0).getContext("2d");
       // This will get the first returned node in the jQuery collection.
       var data = {
         labels: ["0"],
         datasets: [
           {
             label: "Money Saved ($)",
             xAxisLabel: "Number of Transactions",
             yAxisLabel: "Money Saved",
             fillColor: "rgba(151,187,205,0.2)",
             strokeColor: "rgba(151,187,205,1)",
             pointColor: "rgba(151,187,205,1)",
             pointStrokeColor: "#fff",
             pointHighlightFill: "#fff",
             pointHighlightStroke: "rgba(151,187,205,1)",
             data: [0]
           }
         ]
       };
       return new Chart(ctx).Bar(data);
     }
     function changeGraph(myGraph, numTransactions) {
       var end = 182.5 * numTransactions;
       // This will get the first returned node in the jQuery collection.
       myGraph.addData([end], numTransactions);
     }