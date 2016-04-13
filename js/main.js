$(document).ready(function() {

	Array.min = function( array ){
	    return Math.min.apply( Math, array );
	};

	function closest(array,num){
    var i=0;
    var minDiff=1000;
    var ans;
    for(i in array){
				 if (array[i] != num) {
	         var m=Math.abs(num-array[i]);
	         if(m<minDiff){
	                minDiff=m;
	                ans=array[i];
	            }
					}
      }
    return ans;
}

function addLegend(color, text, result) {
	$('.legendContainer').append('<span style="display: inline-block; width: 20px; height: 20px; background-color: ' + color + '"></span><h3 style="display: inline-block; margin: 0; padding: 0; margin-left: 10px; margin-right: 20px">' + text + '(' + result + ')</h3>');
}

function addTheBest() {
	var value = Array.min(mainResults);
	$('.legendContainer').append('<h2>The best: <strong>' + value + '</strong></h2>');
}

function diffAbs(a, b) {
	return Math.abs(a - b);
}

var mainResults = [];
function addMainResults(val) {
	mainResults.push(val);
}

function calculateTime(values) {
	// var values = [100, 23, 89, 132, 42, 187];
	var resultedAbs = [];
	for (var i = 0; i < values.length; i++) {
		if (i+1 != values.length) {
			resultedAbs.push(diffAbs(values[i], values[i + 1]));
		}
	}

	var total = 0;
	$.each(resultedAbs,function() {
	    total += this;
	});

	addMainResults(total);
	return total;
}

	function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
	}

	function copyArray(array) {
		var copy = [];
		for (var i = 0; i < array.length; i++) {
			copy.push(array[i]);
		}

		return copy;
	}

	function sortAscending(array) {
		return array.sort(function(a, b) {return a - b});
	}

	function sortDescending(array) {
		return array.sort(function(a, b) {return b - a});
	}

	function orderSCAN(values) {
		var ascendingValues = copyArray(values);
		var descendingValues = copyArray(values);
		var result = [];

		ascendingValues = sortAscending(ascendingValues)
		descendingValues = sortDescending(descendingValues);
		var initialValue = values[0];

		result.push(closest(values, initialValue));

		for (var i = descendingValues.indexOf(result[0]) + 1; i < descendingValues.length; i++) {
			result.push(descendingValues[i]);
		}

		result.push(0);

		for (var i = ascendingValues.indexOf(result[0]) + 1; i < ascendingValues.length; i++) {
			if(initialValue != ascendingValues[i]) result.push(ascendingValues[i]);
		}

		result.unshift(initialValue);

		// console.log(result);
		// console.log(values);
		// console.log(ascendingValues);
		// console.log(descendingValues);
		// console.log(descendingValues.indexOf(values[0]));

		console.log('SCAN:' + result);
		return result;
	}

	function orderCSCAN(values, max) {
		var ascendingValues = copyArray(values);
		var descendingValues = copyArray(values);
		var result = [];

		ascendingValues = sortAscending(ascendingValues)
		descendingValues = sortDescending(descendingValues);
		var initialValue = values[0];

		result.push(closest(values, initialValue));

		for (var i = descendingValues.indexOf(result[0]) + 1; i < descendingValues.length; i++) {
			result.push(descendingValues[i]);
		}

		result.push(0);
		result.push(max);

		for (var i = 0; i < descendingValues.indexOf(result[0]); i++) {
			if(initialValue != descendingValues[i]) result.push(descendingValues[i]);
		}

		result.unshift(initialValue);

		// console.log(result);
		// console.log(values);
		// console.log(ascendingValues);
		// console.log(descendingValues);
		// console.log(descendingValues.indexOf(values[0]));

		console.log('C-SCAN:' + result);
		return result;
	}

	function orderCLOOK(values) {
		var ascendingValues = copyArray(values);
		var descendingValues = copyArray(values);
		var result = [];

		ascendingValues = sortAscending(ascendingValues)
		descendingValues = sortDescending(descendingValues);
		var initialValue = values[0];

		result.push(closest(values, initialValue));

		for (var i = descendingValues.indexOf(result[0]) + 1; i < descendingValues.length; i++) {
			result.push(descendingValues[i]);
		}

		result.push(0);

		for (var i = 0; i < descendingValues.indexOf(result[0]); i++) {
			if(initialValue != descendingValues[i]) result.push(descendingValues[i]);
		}

		result.unshift(initialValue);

		// console.log(result);
		// console.log(values);
		// console.log(ascendingValues);
		// console.log(descendingValues);
		// console.log(descendingValues.indexOf(values[0]));

		console.log('C-SCAN:' + result);
		return result;
	}

	function orderLOOK(values) {
		var ascendingValues = copyArray(values);
		var descendingValues = copyArray(values);
		var result = [];

		ascendingValues = sortAscending(ascendingValues)
		descendingValues = sortDescending(descendingValues);
		var initialValue = values[0];

		result.push(closest(values, initialValue));

		for (var i = descendingValues.indexOf(result[0]) + 1; i < descendingValues.length; i++) {
			result.push(descendingValues[i]);
		}

		for (var i = ascendingValues.indexOf(result[0]) + 1; i < ascendingValues.length; i++) {
			if(initialValue != ascendingValues[i]) result.push(ascendingValues[i]);
		}

		result.unshift(initialValue);

		// console.log(result);
		// console.log(values);
		// console.log(ascendingValues);
		// console.log(descendingValues);
		// console.log(descendingValues.indexOf(values[0]));

		console.log('LOOK:' + result);
		return result;
	}

	var values = [];

	function addValue(val) {
		values.push(val);
	}

	function unshiftValue(val) {
		values.unshift(val);
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
		$('#generateResults').hide();
		var startCilinders = $('#startCilinders').val();
		var endCilinders = $('#endCilinders').val();
		var startPosition = $('#startPosition').val();
		unshiftValue(startPosition);

		var randomColor = getRandomColor();
		addLegend(randomColor, 'FCFS', calculateTime(values));

		data.datasets.push({
				label: "FCFS",
				fillColor: 'transparent',
				strokeColor: randomColor,
				pointColor: randomColor,
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: randomColor,
				data: values
		});

		var randomColor = getRandomColor();
		var orderscan = orderSCAN(values);
		addLegend(randomColor, 'SCAN', calculateTime(orderscan));

		data.datasets.push({
				label: "SCAN",
				fillColor: 'transparent',
				strokeColor: randomColor,
				pointColor: randomColor,
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: randomColor,
				data: orderscan
		});

		var randomColor = getRandomColor();
		var orderlook = orderLOOK(values);
		addLegend(randomColor, 'LOOK', calculateTime(orderlook));

		data.datasets.push({
				label: "LOOK",
				fillColor: 'transparent',
				strokeColor: randomColor,
				pointColor: randomColor,
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: randomColor,
				data: orderlook
		});

		var randomColor = getRandomColor();
		var ordercsan = orderCSCAN(values, endCilinders);
		addLegend(randomColor, 'C-SCAN', calculateTime(ordercsan));

		data.datasets.push({
				label: "C-SCAN",
				fillColor: 'transparent',
				strokeColor: randomColor,
				pointColor: randomColor,
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: randomColor,
				data: ordercsan
		});

		var randomColor = getRandomColor();
		var orderclook = orderCLOOK(values, endCilinders);
		addLegend(randomColor, 'C-LOOK', calculateTime(orderclook));

		data.datasets.push({
				label: "C-SCAN",
				fillColor: 'transparent',
				strokeColor: randomColor,
				pointColor: randomColor,
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: randomColor,
				data: orderclook
		});

		addTheBest();

		var ctx = document.getElementById("myChart").getContext("2d");
		var myLineChart = new Chart(ctx).Line(data, options);


		$('.disk-values-for-chart button').each(function() {

			console.log($(this).text());
		})
	})

	var data = {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
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

			scaleShowLabels: true,

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
