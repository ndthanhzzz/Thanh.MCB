// Chart configure
const ctx = document.getElementById('myChart').getContext('2d');
const data = {
	labels: [ ],
	datasets: [
		{
			type: 'line',
			label: 'Nhiệt độ',
			data: [],
			borderColor: 'red',
		},
		{
			type: 'line',
			label: 'Độ ẩm',
			data: [],
			borderColor: 'blue',
		},
		{
			type: 'line',
			label: 'Ánh sáng',
			data: [],
			borderColor: 'yellow',
		},
	],
};

const SensorChart = new Chart(ctx, {
	type: 'scatter',
	data: data,
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
});


function random(SensorChart){
  var valtemp = Math.floor(Math.random() * 100);
  var valhum = Math.floor(Math.random() * 100);
  var vallight = Math.floor(Math.random() * 100);
  var time = new Date().toLocaleDateString();

  // Push data to chart
  SensorChart.data.labels.push(time);
  SensorChart.data.datasets[0].data.push(valtemp);
  SensorChart.data.datasets[1].data.push(valhum);
  SensorChart.data.datasets[2].data.push(vallight);
  SensorChart.update();
  
        if (valtemp>=00 && valtemp<10) document.getElementById("Temp").style.backgroundColor="#ffb3b3";
        if (valtemp>=10 && valtemp<20) document.getElementById("Temp").style.backgroundColor="#ff9999";
        if (valtemp>=20 && valtemp<40) document.getElementById("Temp").style.backgroundColor="#ff6666";
        if (valtemp>=40 && valtemp<60) document.getElementById("Temp").style.backgroundColor="#ff4d4d";
        if (valtemp>=60 && valtemp<=100) document.getElementById("Temp").style.backgroundColor="#ff0000";
    document.getElementById("Temp").innerHTML = "Nhiệt độ" + "<br>" + valtemp +"*C";
        if (valhum>=00 && valhum<20) document.getElementById("Hum").style.backgroundColor="#b3d9ff";
        if (valhum>=20 && valhum<40) document.getElementById("Hum").style.backgroundColor="#99ccff";
        if (valhum>=40 && valhum<60) document.getElementById("Hum").style.backgroundColor="#80bfff";
        if (valhum>=60 && valhum<80) document.getElementById("Hum").style.backgroundColor="#4da6ff";
        if (valhum>=80 && valhum<=100) document.getElementById("Hum").style.backgroundColor="#3399ff";
    document.getElementById("Hum").innerHTML = "Độ Ẩm"+ "<br>" + valhum +"%";
        if (vallight>=00 && vallight<20) document.getElementById("Light").style.backgroundColor="#ffffcc";
        if (vallight>=20 && vallight<40) document.getElementById("Light").style.backgroundColor="#ffff99";
        if (vallight>=40 && vallight<60) document.getElementById("Light").style.backgroundColor="#ffff80";
        if (vallight>=60 && vallight<80) document.getElementById("Light").style.backgroundColor="#ffff4d";
        if (vallight>=80 && vallight<=100) document.getElementById("Light").style.backgroundColor="#ffff00";
    document.getElementById("Light").innerHTML = "Ánh sáng" + "<br>" + vallight + " Lux";
}

random(SensorChart);
setInterval(function () {
	random(SensorChart);
}, 5000);

