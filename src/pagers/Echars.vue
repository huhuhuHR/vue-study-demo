<template>
  <div id="myChart" style="width:1200px;height:500px;"></div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        captureTime: [1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1],
        xDate: [],
        dateStr: '2018-02-17',
        type: '日'
      }
    },
    methods: {
      drawPie(id) {
        this.charts = this.$echarts.init(document.getElementById(id));
        this.charts.setOption({
          title: {
            text: this.dateStr + '宝宝胎动图',
            subtext: this.type
          },
          tooltip: {
            trigger: 'axis'
          },
          toolbox: {
            show: true,
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              data: this.xDate
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '小时',
              type: 'bar',
              data: this.captureTime,
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'}
                ]
              }
            }
          ]
        })
      }
    },
    created() {
      for (let i = 0.5; i <= 24; i += 0.5) {
        this.xDate.push(i);
      }
      console.log(this.xDate);
    },
    //调用
    mounted() {
      this.$nextTick(function () {
        this.drawPie('myChart')
      })
    }
  }
</script>
<style scoped>
  * {
    margin: 100px;
    padding: 0;
    list-style: none;
  }
</style>
