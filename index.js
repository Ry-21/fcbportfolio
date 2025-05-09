console.log("Hello World!");

// Current date for the title
const date_element = document.getElementById('date'); // This grabs the element with the id="date"
console.log(date_element); // check if we are targeting the span tag

let current_date = new Date(); // JS Date object representing current date and time
console.log(current_date); // check the current date

// Change the date_element with the current date
date_element.innerHTML = current_date;

let date_options = {year: 'numeric', month: 'long', day: 'numeric'};

date_element.innerHTML = current_date.toLocaleDateString('en-US', date_options);


// Rapid API Code Start
const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': 'c99b127fe1msh62fb4a3de73d5c9p1fde17jsnb9d72753a942',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com',
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	body: new URLSearchParams({woeid: '23424934'})
};
// Rapid API Code End

let graphData = [];

fetch(url, options).then(res => res.json())
				   .then(data => {
	console.log(data);
	console.log(graphData.length);

  for (let i = 0; i < 25; i++) {
        

    	graphData.push(
	    	{
	    		"name":data.trends[i].name,
	    		"volume":data.trends[i].volume
	    	}
    	)

    }

   
    let topics = graphData.map(object => {
        console.log(object);
        console.log(object.name);
        return object.name
    })

    console.log(topics);

   
    let volumes = graphData.map(object => {
        return object.volume
    })

    console.log(volumes);


  const myChart = document.getElementById('my_chart');

  let barChart = new Chart(myChart, {
    type: 'bar',
    data: {
      labels: topics,
      datasets: [{
        label: '# of tweets/xeets',
        data: volumes,
        borderWidth: 2,

        backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            hoverBackgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ]


      }]
    },
    options: {
    	indexAxis:'y',
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

})

