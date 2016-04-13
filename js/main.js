$(document).ready(function() {

	function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
	}


	var values = [];
	function addValue(val) {
		values.push(val);
	}

	// if user presses enter
	$('#diskMainInput').keypress(function(e) {
		if(e.which == 13) {
	        // generate span inside input
	        var inputValue = $('#diskMainInput').val();

					addValue(inputValue);

	        $('.disk-values-for-chart').append('<button class="button large-button">' + inputValue + '</button>');
	        $('#diskMainInput').val('');
	    }
	})

	// if user generates charts
	$('#generateResults').click(function() {
		var startCilinders = $('#startCilinders').val();
		var endCilinders = $('#endCilinders').val();
		var randomColor = getRandomColor();

		data.datasets.push({
				label: "My sece dataset",
				fillColor: 'transparent',
				strokeColor: randomColor,
				pointColor: randomColor,
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: randomColor,
				data: values
		});

		var ctx = document.getElementById("myChart").getContext("2d");
		var myLineChart = new Chart(ctx).Line(data, options);


		$('.disk-values-for-chart button').each(function() {

			console.log($(this).text());
		})
	})

	var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
	};

	var options = {

	    ///Boolean - Whether grid lines are shown across the chart
	    scaleShowGridLines : true,

	    //String - Colour of the grid lines
	    scaleGridLineColor : "rgba(0,0,0,.05)",

	    //Number - Width of the grid lines
	    scaleGridLineWidth : 1,

	    //Boolean - Whether to show horizontal lines (except X axis)
	    scaleShowHorizontalLines: true,

	    responsive: true,

	    //Boolean - Whether to show vertical lines (except Y axis)
	    scaleShowVerticalLines: true,

	    //Boolean - Whether the line is curved between points
	    bezierCurve : true,

	    //Number - Tension of the bezier curve between points
	    bezierCurveTension : 0.4,

	    //Boolean - Whether to show a dot for each point
	    pointDot : true,

	    //Number - Radius of each point dot in pixels
	    pointDotRadius : 4,

	    //Number - Pixel width of point dot stroke
	    pointDotStrokeWidth : 1,

	    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
	    pointHitDetectionRadius : 20,

	    //Boolean - Whether to show a stroke for datasets
	    datasetStroke : true,

	    //Number - Pixel width of dataset stroke
	    datasetStrokeWidth : 2,

	    //Boolean - Whether to fill the dataset with a colour
	    datasetFill : true,

	    //String - A legend template
	    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

	};
})
