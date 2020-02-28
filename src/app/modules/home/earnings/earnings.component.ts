import { Component, OnInit } from '@angular/core';
import { EarningModel } from './earnings.model';


@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.component.html',
  styleUrls: ['./earnings.component.css']
})
export class EarningsComponent implements OnInit {
  startItem = 0;
  endItem = 10;
  selectedOption = 10;
  sNoToggle = true;
  sNoSortIcon = true;
  testDateToggle = false;
  testDateIcon = false;
  rankToggle = false;
  rankIcon = false;
  winningsToggle = false;
  winningsIcon = false;
  paymentStatusToggle = false;
  paymentStatusIcon = false;
  searchText = '';
  currentPage = 1;
  page: number;
  rotate = true;
  maxSize = 5;
  totalItems: number;
  pageContent: EarningModel[] = [];
  currentWeekTestEarnings: number;
  currentWeekReferralEarnings: number;
  TotalTestEarnings: number;
  TotalReferralEarnings: number;
  myEarnings: EarningModel[] = [
    // new Earning(1, new Date(), 2, 34, 'pending')
    { sNo: 1, testDate: '2020-02-25', rank: 2, winnings: 34, paymentStatus: 'pending' },
    { sNo: 2, testDate: '2020-02-25', rank: 5, winnings: 21, paymentStatus: 'pending' },
    { sNo: 3, testDate: '2020-02-25', rank: 7, winnings: 13, paymentStatus: 'success' },
    { sNo: 4, testDate: '2020-02-25', rank: 4, winnings: 37, paymentStatus: 'pending' },
    { sNo: 5, testDate: '2020-02-25', rank: 3, winnings: 0, paymentStatus: 'pending' },
    { sNo: 6, testDate: '2020-02-25', rank: 3, winnings: 37, paymentStatus: 'pending' },
    { sNo: 7, testDate: '2020-02-25', rank: 6, winnings: 37, paymentStatus: 'pending' },
    { sNo: 8, testDate: '2020-02-25', rank: 3, winnings: 5, paymentStatus: 'pending' },
    { sNo: 9, testDate: '2020-02-25', rank: 3, winnings: 37, paymentStatus: 'pending' },
    { sNo: 10, testDate: '2020-02-25', rank: 3, winnings: 9, paymentStatus: 'pending' },
    { sNo: 12, testDate: '2020-02-25', rank: 7, winnings: 0, paymentStatus: 'pending' },
    { sNo: 13, testDate: '2020-02-25', rank: 3, winnings: 37, paymentStatus: 'success' },
    { sNo: 14, testDate: '2020-02-25', rank: 3, winnings: 18, paymentStatus: 'success' },
    { sNo: 15, testDate: '2020-02-25', rank: 9, winnings: 37, paymentStatus: 'pending' },
    { sNo: 16, testDate: '2020-02-25', rank: 12, winnings: 0, paymentStatus: 'pending' },
    { sNo: 17, testDate: '2020-02-25', rank: 3, winnings: 37, paymentStatus: 'success' },
    { sNo: 18, testDate: '2020-02-25', rank: 25, winnings: 37, paymentStatus: 'pending' },
    { sNo: 19, testDate: '2020-02-25', rank: 3, winnings: 1, paymentStatus: 'pending' },
  ];
  constructor() { }

  ngOnInit(): void {
    this.TotalReferralEarnings = 57;
    this.TotalTestEarnings = 234;
    this.currentWeekReferralEarnings = 0;
    this.currentWeekTestEarnings = 86;
    this.totalItems = this.myEarnings.length;
    this.pageContent = this.myEarnings.slice(0, this.selectedOption);
  }
  pageChanged(event: any): void {
    this.startItem = (event.page - 1) * event.itemsPerPage;
    this.endItem = (event.page * event.itemsPerPage) > this.totalItems ? this.totalItems : (event.page * event.itemsPerPage);
    this.pageContent = this.myEarnings.slice(this.startItem, this.endItem);
  }

  sNoSort(): void {
    this.sNoSortIcon = true;
    this.rankIcon = false;
    this.testDateIcon = false;
    this.winningsIcon = false;
    this.paymentStatusIcon = false;
    if (this.sNoToggle) {
      const sorted = this.myEarnings.reverse();
      this.sNoToggle = false;
      this.myEarnings = sorted;
      this.pageContent = this.myEarnings.slice(0, 10);
    } else {
      const sorted = this.myEarnings
        .sort((t1, t2) => {
          if (t1.sNo > t2.sNo) { return 1; }
          if (t1.sNo < t2.sNo) { return -1; }
          return 0;
        });
      this.sNoToggle = true;
      this.myEarnings = sorted;
      this.pageContent = this.myEarnings.slice(0, this.selectedOption);
    }
  }
  rankSort(): void {
    this.sNoSortIcon = false;
    this.rankIcon = true;
    this.testDateIcon = false;
    this.winningsIcon = false;
    this.paymentStatusIcon = false;
    this.sNoSortIcon = false;
    if (this.rankToggle) {
      const sorted = this.myEarnings.sort((t1, t2) => {
        if (t1.rank < t2.rank) { return 1; }
        if (t1.rank > t2.rank) { return -1; }
        return 0;
      });
      this.rankToggle = false;
      this.myEarnings = sorted;
      this.pageContent = this.myEarnings.slice(0, 10);
    } else {
      const sorted = this.myEarnings.sort((t1, t2) => {
        if (t1.rank > t2.rank) { return 1; }
        if (t1.rank < t2.rank) { return -1; }
        return 0;
      });
      this.rankToggle = true;
      this.myEarnings = sorted;
      this.pageContent = this.myEarnings.slice(0, this.selectedOption);
    }
  }

  testDateSort(): void {
    this.sNoSortIcon = false;
    this.rankIcon = false;
    this.testDateIcon = true;
    this.winningsIcon = false;
    this.paymentStatusIcon = false;
    if (this.testDateToggle) {
      const sorted = this.myEarnings.sort((t1, t2) => {
        if (t1.testDate < t2.testDate) { return 1; }
        if (t1.testDate > t2.testDate) { return -1; }
        return 0;
      });
      this.testDateToggle = false;
      this.myEarnings = sorted;
      this.pageContent = this.myEarnings.slice(0, 10);
    } else {
      const sorted = this.myEarnings.sort((t1, t2) => {
        if (t1.testDate > t2.testDate) { return 1; }
        if (t1.testDate < t2.testDate) { return -1; }
        return 0;
      });
      this.testDateToggle = true;
      this.myEarnings = sorted;
      this.pageContent = this.myEarnings.slice(0, this.selectedOption);
    }
  }

  winningSort(): void {
    this.sNoSortIcon = false;
    this.rankIcon = false;
    this.testDateIcon = false;
    this.winningsIcon = true;
    this.paymentStatusIcon = false;
    if (this.winningsToggle) {
      const sorted = this.myEarnings.sort((t1, t2) => {
        if (t1.winnings < t2.winnings) { return 1; }
        if (t1.winnings > t2.winnings) { return -1; }
        return 0;
      });
      this.winningsToggle = false;
      this.myEarnings = sorted;
      this.pageContent = this.myEarnings.slice(0, 10);
    } else {
      const sorted = this.myEarnings.sort((t1, t2) => {
        if (t1.winnings > t2.winnings) { return 1; }
        if (t1.winnings < t2.winnings) { return -1; }
        return 0;
      });
      this.winningsToggle = true;
      this.myEarnings = sorted;
      this.pageContent = this.myEarnings.slice(0, this.selectedOption);
    }
  }
  paymentStatusSort(): void {
    this.sNoSortIcon = false;
    this.rankIcon = false;
    this.testDateIcon = false;
    this.winningsIcon = false;
    this.paymentStatusIcon = true;
    if (this.paymentStatusToggle) {
      const sorted = this.myEarnings.sort((t1, t2) => {
        if (t1.paymentStatus < t2.paymentStatus) { return 1; }
        if (t1.paymentStatus > t2.paymentStatus) { return -1; }
        return 0;
      });
      this.paymentStatusToggle = false;
      this.myEarnings = sorted;
      this.pageContent = this.myEarnings.slice(0, 10);
    } else {
      const sorted = this.myEarnings.sort((t1, t2) => {
        if (t1.paymentStatus > t2.paymentStatus) { return 1; }
        if (t1.paymentStatus < t2.paymentStatus) { return -1; }
        return 0;
      });
      this.paymentStatusToggle = true;
      this.myEarnings = sorted;
      this.pageContent = this.myEarnings.slice(0, this.selectedOption);
    }
  }




  onSearch(searchText: any): void {
    searchText = searchText.target.value;
    const filteredList: EarningModel[] = this.myEarnings.filter((earning: EarningModel) =>
      earning.testDate.includes(searchText) ||
      earning.sNo.toString().includes(searchText) ||
      earning.winnings.toString().includes(searchText) ||
      earning.paymentStatus.includes(searchText) ||
      earning.rank.toString().includes(searchText)
    );
    this.totalItems = filteredList.length;
    this.endItem = filteredList.length > this.selectedOption ? this.selectedOption : filteredList.length;
    this.pageContent = filteredList.slice(0, this.endItem);
    console.log(filteredList);
  }

  numberOfRecords(event: any): void {
    this.selectedOption = event.target.value;
    this.endItem = this.totalItems > this.selectedOption ? this.selectedOption : this.totalItems;
    this.pageContent = this.myEarnings.slice(0, this.endItem);
    this.startItem = 0;
  }
}
