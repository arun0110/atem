import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  myChart = [];
  constructor() { }

  ngOnInit(): void {
    this.lineChart();
    const ctx = document.getElementById('myChart');
    this.myChart = new Chart(ctx, {
      type: 'pie',
      data: {
          labels: ['Verbal', 'Aptitude', 'Reasoning', 'GK', 'Weekly Review'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2],
              backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          aspectRatio: 1,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
  }
  lineChart(): void{
    var ctx = document.getElementById('line-chart');
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',
  
      // The data for our dataset
      data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          datasets: [{
              label: 'Marks',
              backgroundColor: 'rgb(255, 99, 132, 0.1)',
              borderColor: '#eb6e34',
              data: [0, 10, 5, 2, 20, 30]
          }]
      },
  
      // Configuration options go here
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1
      }
  });
  }
}
