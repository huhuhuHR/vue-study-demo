<template>
  <div id="myChart" style="width:600px;height:600px;"></div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        captureTime: [1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1]
      }
    },
    methods: {
      drawPie(id) {
        this.charts = this.$echarts.init(document.getElementById(id));
        this.charts.setOption({
          title: {
            text: '宝宝胎动图',
            subtext: '宝宝专属'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['小时']
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
              data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
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
      console.log(this.captureTime.length)
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
