
$(function(){ 
    var myChart = echarts.init(document.getElementById('main'));
    option = {
        //柱状图，柱状的背景颜色
        color: ['#82edef'],
        //整个图表的背景颜色
        backgroundColor: 'rgba(16, 28, 52, .75)',
    
        //图表内的title样式
        title: {
            text: '销售额',
            left: 'center',
            top: 'bottom',
            textStyle: {
                fontSize: 14,
                color: '#009bdb'
            }
        },

        //提示框组件
        tooltip : {
            //触发类型：item:散点图，饼图；axis:柱状图，折线图；none:不触发
            trigger: 'axis',
            //取消 鼠标滑过的提示框
            show:false,
            // 坐标轴指示器，坐标轴触发有效
            axisPointer : {
                // 默认为直线，可选为：'line' | 'shadow'        
                type : 'shadow'
            }
        },

        grid: {
            //类似padding
            x:0,
            x2:4,
            y:25,
            y2:25,
            containLabel: true
        },

        xAxis : [
            {
                type : 'category',
                data : ['05-11', '05-12', '05-13', '05-14', '05-15', '05-16', '05-17'],
                //坐标轴轴线相关设置
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(255, 255, 255, .04)'
                    }
                },
                //坐标轴刻度标签的相关设置
                axisLabel: {        
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: '8' 
                    }
                },
                //坐标轴刻度相关设置
                axisTick: {
                    show: false
                }
            }
        ],

        yAxis : [
            {
                type : 'value',
                splitNumber: 7,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(255, 255, 255, .04)'
                    },
                    symbol: ['arrow'],
                    symbolSize: [10, 15],
                },
                axisLabel: {        
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: '8' 
                    }
                },
                axisTick: {
                    show: false
                },
                //坐标轴在 grid 区域中的分隔线
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(255, 255, 255, .05)'
                    }
                }
            }
        ],

        //系列列表。每个系列通过 type 决定自己的图表类型
        series : [
            {
                name:'直接访问',
                type:'bar',
                barWidth: '42%',
                data:[10, 52, 200, 2034, 390, 330, 220],
                //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#fff',
                            fontSize: 8,
                        }
                    }
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    setTimeout(function(){
        window.onresize = function(){
        myChart.resize(); 
        };
    },200)

    // 异步加载数据
    // $.get('data.json').done(function (data) {
    //     // 填入数据
    //     myChart.setOption({
    //         xAxis: {
    //             data: data.categories
    //         },
    //         series: [{
    //             // 根据名字对应到相应的系列
    //             name: '直接访问',
    //             data: data.data
    //         }]
    //     });
    // });
})



              
