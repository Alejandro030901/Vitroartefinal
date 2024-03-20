function switchWindow(windowId) {
    const window1 = document.getElementById("window1");
    const window2 = document.getElementById("window2");
  
    if (windowId === "window1") {
      window1.style.display = "block";
      window2.style.display = "none";
    } else if (windowId === "window2") {
      window1.style.display = "none";
      window2.style.display = "block";
    }
  }
  
  document.getElementById("switchWindow").addEventListener("click", function () {
    switchWindow("window2");
  });
  
  document.getElementById("switchWindowBack").addEventListener("click", function () {
    switchWindow("window1");
  });


var usersChart = new Chart(document.getElementById('usersChart'), {
  type: 'doughnut',
  data: {
      labels: ['Nuevos', 'Registrados'],
      datasets: [{
          data: [30, 65],
          backgroundColor: ['#00F0FF', '#8B8B8D'],
      }]
  },
  options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
          position: 'bottom' // Ubicar la leyenda debajo del círculo
      }
  }
});



var commercesChart = new Chart(document.getElementById('commercesChart'), {
  type: 'doughnut',
  data: {
      labels: ['Nuevos', 'Registrados'],
      datasets: [{
          data: [60, 40],
          backgroundColor: ['#FEC500', '#8B8B8D'],
      }]
  },
  options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
          position: 'bottom' // Ubicar la leyenda debajo del círculo
      }
  }
});
Template.dashboard.onRendered(() => {
    Meteor.call("getUsersStats", (err, res) => {
        if (!err){
            usersChart.data.datasets[0].data = [res.new_count, res.registered_count];
            usersChart.update();
        } else {
            console.log(err);
        }
    });

    Meteor.subscribe("commercePublications");
    Meteor.call("getCommerceCounts", function(error, result){
        if(!error){
            comercioCantidad.set(result.comercios);
            usuarioCantidad.set(  result.usuarios); 
            }else{
                console.log(error.reason);
         }
     });
});

usersChart = usersChart || usersGraph;
function usersGraph(){
    let ctx = document.getElementById("users-chart").getContext("2d");
    return new Chart(ctx, usersChart.options);
}