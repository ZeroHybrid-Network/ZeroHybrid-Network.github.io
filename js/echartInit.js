var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
    // tooltip: {
    //     // trigger: 'item',
    // },
    // legend: {
    //     top: '5%',
    //     left: 'center'
    // },
    graphic: {
        elements: [{
            type: "image",
            style: {
                image: imgUrl,
                width: 220,
                height: 220,
            },
            left: "center",
            top: "center",
        }],
    },


    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: false,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 52, name: 'ZHT Miner'},
                {value: 20, name: 'ZHT Eco-Build'},
                {value: 20, name: 'INSTITUTIONAL PRIVATE PLACEMENT'},
                {value: 5, name: 'Project team'},
                {value: 3, name: 'project consultant'}
            ]
        }
    ],color:[
        '#00D86C',
        '#3373EF',
        '#F2A917',
        '#DC1F1F',
        '#7439d1',

    ]
};

option && myChart.setOption(option);
