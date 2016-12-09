$(function () {
    Highcharts.chart('container', {
        chart: {
				type: 'scatter',
				zoomType: 'xy'
			},
        title: {
				text: 'Income Vs. Age'
			},
        subtitle: {
					text: 'Source: Spotrac 2016'
				},
        xAxis: {
            title: {
                enabled: true,
                text: 'Age'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
			labels: {
                formatter: function () {
                    return '$' + this.axis.defaultLabelFormatter.call(this);
			}},
            title: {
                text: 'Income'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 100,
            y: 70,
            floating: false,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'Age: {point.x} , ${point.y} '
                }
            }
        },
        series: [{
            name: "Andrew Luck",

            color: 'rgba(223, 83, 83, .5)',
			data: [[27, 2459400000]]
        },
		{
            name: "Carson Palmer",
            color: 'rgba(225, 2, 83, .5)',
			data: [[36, 2435000000]]
			
			
		},
		{
            name: "Drew Brees",
            color: 'rgba(100, 83, 83, .5)',
			data: [[37, 2425000000]]
			
			
		},
		{
			name : "Joe Flacco",
            color: 'rgba(121, 20, 83, .5)',
            data: [[31, 2213333300]]
				
		}
		
		],

    });
});