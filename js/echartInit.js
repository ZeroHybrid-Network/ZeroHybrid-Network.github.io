var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
    tooltip: {
        trigger: 'item'
    },
    // legend: {
    //     top: '5%',
    //     left: 'center'
    // },
    graphic: {//图形中间图片
        elements: [{
            type: "image",
            style: {
                image: 'images/Circle-EN.png',
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
                {value: 52, name: '搜索引擎'},
                {value: 20, name: '直接访问'},
                {value: 20, name: '邮件营销'},
                {value: 5, name: '联盟广告'},
                {value: 3, name: '视频广告'}
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
