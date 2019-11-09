// chart.component.ts
import { Chart } from 'angular-highcharts';
import { Component } from '@angular/core';
import variables from './variables.json';

@Component({
    selector: 'donut-chart',
  template: `
    <div [chart]="chart"></div>
  `
})
export class ChartComponent {
  chart = new Chart({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    colors: [
        variables.charts["running.order"].color1.value,
        variables.charts["running.order"].color2.value,
        variables.charts["running.order"].color3.value,
        variables.charts["running.order"].color4.value,
        variables.charts["running.order"].color5.value,
        variables.charts["running.order"].color6.value,
    ],
    title: {
        text: 'Browser<br>shares<br>2017',
        align: 'center',
        verticalAlign: 'middle',
        y: 60
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: variables.color.purple.value
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '110%'
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
            ['Chrome', 58.9],
            ['Firefox', 13.29],
            ['Internet Explorer', 13],
            ['Edge', 3.78],
            ['Safari', 3.42],
            {
                name: 'Other',
                y: 7.61,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
  })
};