Highcharts.chart('colcontainer', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['Apples', 'Oranges', 'Raseberries', 'Grapes', 'Papya']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Rory',
        data: [5, 3, 7, -1, -4]
    }, {
        name: 'Jane',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
    }]
});