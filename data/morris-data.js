$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2016-09-20 11:00',
            milage: 2666,
            speed: null,
            SOC: 2647
        }, {
            period: '2016-09-20 12:00',
            milage: 2778,
            speed: 2294,
            SOC: 2441
        }, {
            period: '2016-09-20 13:00',
            milage: 4912,
            speed: 1969,
            SOC: 2501
        }, {
            period: '2016-09-20 14:00',
            milage: 3767,
            speed: 3597,
            SOC: 5689
        }, {
            period: '2016-09-20 15:00',
            milage: 6810,
            speed: 1914,
            SOC: 2293
        }, {
            period: '2016-09-20 16:00',
            milage: 5670,
            speed: 4293,
            SOC: 1881
        }, {
            period: '2016-09-20 17:00',
            milage: 4820,
            speed: 3795,
            SOC: 1588
        }, {
            period: '2016-09-20 18:00',
            milage: 15073,
            speed: 5967,
            SOC: 5175
        }, {
            period: '2016-09-20 19:00',
            milage: 10687,
            speed: 4460,
            SOC: 2028
        }, {
            period: '2016-09-20 20:00',
            milage: 8432,
            speed: 5713,
            SOC: 1791
        }],
        xkey: 'period',
        ykeys: ['milage', 'speed', 'SOC'],
        labels: ['Milage', 'Speed', 'SOC'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2016-09-01',
            a: 100,
            b: 90
        }, {
            y: '2016-09-02',
            a: 75,
            b: 65
        }, {
            y: '2016-09-03',
            a: 50,
            b: 40
        }, {
            y: '2016-09-04',
            a: 75,
            b: 65
        }, {
            y: '2016-09-05',
            a: 50,
            b: 40
        }, {
            y: '2016-09-06',
            a: 75,
            b: 65
        }, {
            y: '2016-09-07',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Votage', 'Amp'],
        hideHover: 'auto',
        resize: true
    });
    
});
