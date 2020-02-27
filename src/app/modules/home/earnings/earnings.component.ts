import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.component.html',
  styleUrls: ['./earnings.component.css']
})
export class EarningsComponent implements OnInit {

  currentPage = 1;
  page: number;
  rotate = true;
  maxSize = 5
  pageContent = [];
  currentWeekTestEarnings: number;
  currentWeekReferralEarnings: number;
  TotalTestEarnings: number;
  TotalReferralEarnings: number;
  myEarnings = [
    {sno:1, testDate: '2020-02-25', rank: 2, winnings: 34, paymentStatus: 'pending'},
    {sno:2, testDate: '2020-02-25', rank: 5, winnings: 21, paymentStatus: 'pending'},
    {sno:3, testDate: '2020-02-25', rank: 7, winnings: 13, paymentStatus: 'success'},
    {sno:4, testDate: '2020-02-25', rank: 4, winnings: 37, paymentStatus: 'pending'},
    {sno:5, testDate: '2020-02-25', rank: 3, winnings: 0, paymentStatus: 'pending'},
    {sno:6, testDate: '2020-02-25', rank: 3, winnings: 37, paymentStatus: 'pending'},
    {sno:7, testDate: '2020-02-25', rank: 6, winnings: 37, paymentStatus: 'pending'},
    {sno:8, testDate: '2020-02-25', rank: 3, winnings: 5, paymentStatus: 'pending'},
    {sno:9, testDate: '2020-02-25', rank: 3, winnings: 37, paymentStatus: 'pending'},
    {sno:10, testDate: '2020-02-25', rank: 3, winnings: 9, paymentStatus: 'pending'},
    {sno:12, testDate: '2020-02-25', rank: 7, winnings: 0, paymentStatus: 'pending'},
    {sno:13, testDate: '2020-02-25', rank: 3, winnings: 37, paymentStatus: 'success'},
    {sno:14, testDate: '2020-02-25', rank: 3, winnings: 18, paymentStatus: 'success'},
    {sno:15, testDate: '2020-02-25', rank: 9, winnings: 37, paymentStatus: 'pending'},
    {sno:16, testDate: '2020-02-25', rank: 12, winnings: 0, paymentStatus: 'pending'},
    {sno:17, testDate: '2020-02-25', rank: 3, winnings: 37, paymentStatus: 'success'},
    {sno:18, testDate: '2020-02-25', rank: 25, winnings: 37, paymentStatus: 'pending'},
    {sno:19, testDate: '2020-02-25', rank: 3, winnings: 1, paymentStatus: 'pending'},
  ];
  constructor() { }

  ngOnInit(): void {
    this.TotalReferralEarnings = 57;
    this.TotalTestEarnings = 234;
    this.currentWeekReferralEarnings = 0;
    this.currentWeekTestEarnings = 86;
    this.pageContent = this.myEarnings.slice(0,10);
  }
  pageChanged(event: any): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.pageContent = this.myEarnings.slice(startItem, endItem);
  }

}
