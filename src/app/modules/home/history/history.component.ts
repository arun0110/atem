import { Component, OnInit } from '@angular/core';
import { HistoryModel } from './history.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  startItem = 0;
  endItem = 10;
  selectedOption = 10;
  testNumberToggle = true;
  testNumberIcon = true;
  testDateToggle = false;
  testDateIcon = false;
  marksToggle = false;
  marksIcon = false;
  timeTakenToggle = false;
  timeTakenIcon = false;

  searchText = '';
  currentPage = 1;
  page: number;
  rotate = true;
  maxSize = 5;
  totalItems: number;
  pageContent: HistoryModel[] = [];


  myHistory = [
    new HistoryModel(1, new Date(), 10, '2:54'),
    new HistoryModel(2, new Date(), 7, '4:21'),
    new HistoryModel(3, new Date(), 3, '2:13'),
    new HistoryModel(4, new Date(), 2, '5:26'),
    new HistoryModel(5, new Date(), 7, '2:54'),
    new HistoryModel(6, new Date(), 12, '2:46'),
    new HistoryModel(7, new Date(), 15, '2:54'),
    new HistoryModel(8, new Date(), 21, '5:31'),
    new HistoryModel(9, new Date(), 25, '2:19'),
    new HistoryModel(10, new Date(), 8, '2:28'),
    new HistoryModel(11, new Date(), 10, '8:01'),
    new HistoryModel(12, new Date(), 1, '2:54'),
    new HistoryModel(13, new Date(), 0, '12:16'),
    new HistoryModel(14, new Date(), 2, '2:54'),
    new HistoryModel(15, new Date(), 5, '2:17'),
    new HistoryModel(16, new Date(), 9, '22:31'),
    new HistoryModel(17, new Date(), 12, '4:42'),
    new HistoryModel(18, new Date(), 5, '3:54')
  ];
  constructor() { }

  ngOnInit(): void {
    this.totalItems = this.myHistory.length;
    this.pageContent = this.myHistory.slice(0, this.selectedOption);
  }

  pageChanged(event: any): void {
    this.startItem = (event.page - 1) * event.itemsPerPage;
    this.endItem = (event.page * event.itemsPerPage) > this.totalItems ? this.totalItems : (event.page * event.itemsPerPage);
    this.pageContent = this.myHistory.slice(this.startItem, this.endItem);
  }

  onSearch(searchText: any): void {
    searchText = searchText.target.value;
    const filteredList: HistoryModel[] = this.myHistory.filter((history: HistoryModel) =>
      history.testDate.toDateString().includes(searchText) ||
      history.testNumber.toString().includes(searchText) ||
      history.marks.toString().includes(searchText) ||
      history.timeTaken.includes(searchText)
    );
    this.totalItems = filteredList.length;
    this.endItem = filteredList.length > this.selectedOption ? this.selectedOption : filteredList.length;
    this.pageContent = filteredList.slice(0, this.endItem);
    console.log(filteredList);
  }

  numberOfRecords(event: any): void {
    this.selectedOption = event.target.value;
    this.endItem = this.totalItems > this.selectedOption ? this.selectedOption : this.totalItems;
    this.pageContent = this.myHistory.slice(0, this.endItem);
    this.startItem = 0;
  }
  testNumberSort(): void {
    this.testNumberIcon = true;
    this.testDateIcon = false;
    this.marksIcon = false;
    this.timeTakenIcon = false;
    if (this.testNumberToggle) {
      const sorted = this.myHistory.sort((t1, t2) => {
        if (t1.testNumber < t2.testNumber) { return 1; }
        if (t1.testNumber > t2.testNumber) { return -1; }
        return 0;
      });
      this.testNumberToggle = false;
      this.myHistory = sorted;
      this.pageContent = this.myHistory.slice(this.startItem, this.endItem);
    } else {
      const sorted = this.myHistory.sort((t1, t2) => {
        if (t1.testNumber > t2.testNumber) { return 1; }
        if (t1.testNumber < t2.testNumber) { return -1; }
        return 0;
      });
      this.testNumberToggle = true;
      this.myHistory = sorted;
      this.pageContent = this.myHistory.slice(this.startItem, this.endItem);
    }
  }

  testDateSort(): void {
    this.testNumberIcon = false;
    this.testDateIcon = true;
    this.marksIcon = false;
    this.timeTakenIcon = false;
    if (this.testDateToggle) {
      const sorted = this.myHistory.sort((t1, t2) => {
        if (t1.testDate < t2.testDate) { return 1; }
        if (t1.testDate > t2.testDate) { return -1; }
        return 0;
      });
      this.testDateToggle = false;
      this.myHistory = sorted;
      this.pageContent = this.myHistory.slice(this.startItem, this.endItem);
    } else {
      const sorted = this.myHistory.sort((t1, t2) => {
        if (t1.testDate > t2.testDate) { return 1; }
        if (t1.testDate < t2.testDate) { return -1; }
        return 0;
      });
      this.testDateToggle = true;
      this.myHistory = sorted;
      this.pageContent = this.myHistory.slice(this.startItem, this.endItem);
    }
  }

  marksSort(): void {
    this.testNumberIcon = false;
    this.testDateIcon = false;
    this.marksIcon = true;
    this.timeTakenIcon = false;
    if (this.marksToggle) {
      const sorted = this.myHistory.sort((t1, t2) => {
        if (t1.marks < t2.marks) { return 1; }
        if (t1.marks > t2.marks) { return -1; }
        return 0;
      });
      this.marksToggle = false;
      this.myHistory = sorted;
      this.pageContent = this.myHistory.slice(this.startItem, this.endItem);
    } else {
      const sorted = this.myHistory.sort((t1, t2) => {
        if (t1.marks > t2.marks) { return 1; }
        if (t1.marks < t2.marks) { return -1; }
        return 0;
      });
      this.marksToggle = true;
      this.myHistory = sorted;
      this.pageContent = this.myHistory.slice(this.startItem, this.endItem);
    }
  }

  timeTakenSort(): void {
    this.testNumberIcon = false;
    this.testDateIcon = false;
    this.marksIcon = false;
    this.timeTakenIcon = true;
    if (this.timeTakenToggle) {
      const sorted = this.myHistory.sort((t1, t2) => {
        if (t1.timeTaken < t2.timeTaken) { return 1; }
        if (t1.timeTaken > t2.timeTaken) { return -1; }
        return 0;
      });
      this.timeTakenToggle = false;
      this.myHistory = sorted;
      this.pageContent = this.myHistory.slice(this.startItem, this.endItem);
    } else {
      const sorted = this.myHistory.sort((t1, t2) => {
        if (t1.timeTaken > t2.timeTaken) { return 1; }
        if (t1.timeTaken < t2.timeTaken) { return -1; }
        return 0;
      });
      this.timeTakenToggle = true;
      this.myHistory = sorted;
      this.pageContent = this.myHistory.slice(this.startItem, this.endItem);
    }
  }
}
