// 初始化图表
function initChart() {
    const chart = echarts.init(
        document.getElementById('chart1'), 'white', { renderer: 'canvas' });

    // 原始数据
    const originalData = [
        { name: "清", value: 72 },
        { name: "明", value: 29 },
        { name: "未分", value: 16 },
        { name: "宋", value: 14 },
        { name: "近代", value: 14 },
        { name: "元", value: 11 },
        { name: "唐", value: 7 },
        { name: "汉", value: 4 },
        { name: "金", value: 4 },
        { name: "南北朝", value: 3 },
        { name: "西晋", value: 2 },
        { name: "三国", value: 1 },
        { name: "五代十国", value: 1 },
        { name: "东晋", value: 1 },
        { name: "周", value: 1 },
        { name: "辽", value: 1 }
    ];

    // 过滤掉近代数据
    const filteredOriginalData = originalData.filter(item => item.name!== '近代');

    // 定义朝代顺序，移除近代
    const dynastyOrder = ["周", "汉", "三国", "西晋", "东晋", "南北朝", "唐", "五代十国", "宋", "辽", "金", "元", "明", "清"];

    // 处理数据，合并数量小于4的朝代
    let otherCount = 0;
    const processedData = [];
    for (const item of filteredOriginalData) {
        if (item.value >= 4) {
            processedData.push({
                name: item.name,
                value: item.value
            });
        } else {
            otherCount += item.value;
        }
    }
    if (otherCount > 0) {
        processedData.push({
            name: "其他朝代",
            value: otherCount
        });
    }

    // 按朝代顺序排序
    processedData.sort((a, b) => {
        if (a.name === "未分" || a.name === "其他朝代") {
            return 1;
        }
        if (b.name === "未分" || b.name === "其他朝代") {
            return -1;
        }
        const indexA = dynastyOrder.indexOf(a.name);
        const indexB = dynastyOrder.indexOf(b.name);
        return indexA - indexB;
    });

    // 计算最大和最小的值，用于后续调整阴影效果
    const maxValue = Math.max(...processedData.map(item => item.value));
    const minValue = Math.min(...processedData.map(item => item.value));

    // 配置选项
    const option = {
        animation: true,
        animationThreshold: 2000,
        animationDuration: 1000,
        animationEasing: "cubicOut",
        animationDelay: 0,
        animationDurationUpdate: 300,
        animationEasingUpdate: "cubicOut",
        animationDelayUpdate: 0,
        aria: {
            enabled: false
        },
        // 使用偏古代的颜色
        color: [
            "#8B4513",
            "#D2B48C",
            "#A0522D",
            "#CD853F",
            "#F4A460",
            "#BC8F8F",
            "#DEB887",
            "#FFE4B5",
            "#FFDAB9"
        ],
        series: [
            {
                type: "pie",
                name: "各朝代本草著作数量",
                data: processedData.map(item => {
                    // 根据值的大小计算阴影模糊度和偏移量
                    const shadowBlur = (item.value - minValue) / (maxValue - minValue) * 20 + 5;
                    const shadowOffsetY = (item.value - minValue) / (maxValue - minValue) * -10;
                    return {
                        ...item,
                        itemStyle: {
                            shadowBlur,
                            shadowColor: 'rgba(0, 0, 0, 0.3)',
                            shadowOffsetY,
                            borderWidth: 2, // 增加边框宽度
                            borderColor: 'rgba(255, 255, 255, 0.5)' // 设置边框颜色
                        }
                    };
                }),
                radius: ['40%', '75%'], // 设置为镂空饼图
                center: ['50%', '50%'],
                label: {
                    show: true,
                    position: 'outside',
                    // 使用偏古代风格的字体，可根据实际情况替换
                    fontFamily: "SimSun",
                    color: "#333",
                    margin: 8,
                    fontSize: 12,
                    // 修改 formatter 以显示朝代和书籍数量
                    formatter: "{b}: {c}本", 
                    backgroundColor: "transparent"
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ],
        legend: [
            {
                data: [],
                selected: {},
                show: true,
                padding: 5,
                itemGap: 10,
                itemWidth: 25,
                itemHeight: 14,
                backgroundColor: "transparent",
                borderColor: "#ccc",
                borderRadius: 0,
                pageButtonItemGap: 5,
                pageButtonPosition: "end",
                pageFormatter: "{current}/{total}",
                pageIconColor: "#2f4554",
                pageIconInactiveColor: "#aaa",
                pageIconSize: 15,
                animationDurationUpdate: 800,
                selector: false,
                selectorPosition: "auto",
                selectorItemGap: 7,
                selectorButtonGap: 10
            }
        ],
        tooltip: {
            show: false, // 默认隐藏 tooltip
            trigger: "item",
            triggerOn: "mousemove|click",
            axisPointer: {
                type: "line"
            },
            showContent: true,
            alwaysShowContent: false,
            showDelay: 0,
            hideDelay: 100,
            enterable: false,
            confine: false,
            appendToBody: false,
            transitionDuration: 0.4,
            // 使用偏古代风格的字体，可根据实际情况替换
            textStyle: {
                fontSize: 14,
                fontFamily: "SimSun"
            },
            borderWidth: 0,
            padding: 5,
            order: "seriesAsc",
            position: ['50%', '50%'], // 设置 tooltip 位置在中心
            formatter: function (params) {
                return `${params.name}: ${params.value}本`;
            }
        },
        title: [
            {
                show: true,
                text: "本草著作分布图",
                left: '49.5%', // 向右移动一点
                top: 'center',
                textAlign: 'center',
                target: "blank",
                subtarget: "blank",
                padding: 5,
                itemGap: 10,
                textVerticalAlign: "auto",
                triggerEvent: false,
                // 使用偏古代风格的字体，可根据实际情况替换
                textStyle: {
                    fontFamily: "SimSun",
                    fontSize: function () {
                        // 根据图表宽度动态调整字体大小
                        const chartWidth = chart.getWidth();
                        return Math.min(chartWidth * 0.03, 14); 
                    },
                    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
                    borderRadius: 5, 
                    padding: 5 
                }
            }
        ]
    };

    // 设置图表选项
    chart.setOption(option);

    // 点击事件处理
    chart.on('click', function (params) {
        const tooltipOption = {
            show: true,
            position: ['50%', '50%'],
            formatter: `${params.name}: ${params.value}本`
        };
        chart.setOption({
            tooltip: tooltipOption
        });
    });

    // 鼠标移出事件处理，隐藏 tooltip
    chart.on('mouseout', function () {
        const tooltipOption = {
            show: false
        };
        chart.setOption({
            tooltip: tooltipOption
        });
    });

    // 监听窗口大小变化，动态调整标题字体大小
    window.addEventListener('resize', function () {
        const newOption = {
            title: [
                {
                    textStyle: {
                        fontSize: function () {
                            const chartWidth = chart.getWidth();
                            return Math.min(chartWidth * 0.03, 14);
                        }
                    }
                }
            ]
        };
        chart.setOption(newOption);
    });
}

// 页面加载完成后初始化图表
window.addEventListener('load', initChart);
    