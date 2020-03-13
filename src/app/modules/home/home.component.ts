import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.learningChart();
    this.earningChart();
  }

  earningChart(): void {
    var ctx = document.getElementById('earning-chart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [{
                label: 'Earnings',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'green',
                    'green',
                    'green',
                    'green',
                    'green',
                    'green'
                ],
                borderColor: [
                    'green',
                    'green',
                    'green',
                    'green',
                    'green',
                    'green'
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

  learningChart(): void {
    var ctx = document.getElementById('learning-chart');
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
