<template>
  <div style="width: 100%;overflow-x: scroll;">
    <div id="myChart" style="width:1200px;height:600px;"></div>
  </div>
</template>

<script>
  import {OPERATION_RESULT_SHOW, OPERATION_RESULT_HIDDEN} from '../store/mutation-types'
  import http from '../http/http'

  export default {
    name: '',
    data() {
      return {
        yAxisList: [],
        xAxisList: [],
        currentDateStr: '2018-02-25',
        type: '日',
        options: {
          title: {
            text: "",
            subtext: ""
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
              data: []
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '次数',
              type: 'bar',
              data: [],
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
        }
      }
    },
    methods: {
      init() {
        let url = '/test/baby/init'
        let params = {
          currentDateStr: this.currentDateStr
        }
        http.ajax({
          url: url,
          method: 'POST',
          params: params,
          emulateJSON: true,
          useLoadLayer: true,
          successCallback: function (data) {
            let xAxis = data.xAxis
            for (let i = 0; i < xAxis.length; i++) {
              this.xAxisList.push(xAxis[i])
              this.options.xAxis[0].data.push(xAxis[i])
            }
            let yAxis = data.yAxis
            for (let i = 0; i < yAxis.length; i++) {
              this.yAxisList.push(yAxis[i])
              this.options.series[0].data.push(yAxis[i])
            }
          }.bind(this),
          errorCallback: function (data) {
          }.bind(this)
        })
      },
      drawPie(id) {
        this.charts = this.$echarts.init(document.getElementById(id));
        this.charts.setOption(this.options)
        window.addEventListener("resize", function () {
          this.charts.resize()
        })
      }
    },
    watch: {
      options: {
        handler(newValue, oldValue) {
          this.drawPie('myChart', newValue)
        },
        deep: true
      }
    },
    created() {
      this.options.title.text = this.currentDateStr + '宝宝胎动图'
      this.options.title.subtext = this.type
      this.init()
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
