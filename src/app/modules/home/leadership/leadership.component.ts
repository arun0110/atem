import { Component, OnInit } from '@angular/core';
import { HistoryModel } from '../history/history.model';
import { LeadershipModel } from './leadership.model';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.css']
})
export class LeadershipComponent implements OnInit {
  startItem = 0;
  endItem = 10;
  selectedOption = 10;
  rankToggle = true;
  rankIcon = true;
  nameToggle = false;
  nameIcon = false;
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
  pageContent: LeadershipModel[] = [];


  leadership = [ 
    new LeadershipModel(1, 'arun', 10, '2:54'),
    new LeadershipModel(2, 'sathis', 7, '4:21'),
    new LeadershipModel(3, 'raju', 3, '2:13'),
    new LeadershipModel(4, 'venky', 2, '5:26'),
    new LeadershipModel(5, 'sai', 7, '2:54'),
    new LeadershipModel(6, 'sukhram', 12, '2:46'),
    new LeadershipModel(7, 'ajay', 15, '2:54'),
    new LeadershipModel(8, 'manoj', 21, '5:31'),
    new LeadershipModel(9, 'joseph', 25, '2:19'),
    new LeadershipModel(10, 'praveen', 8, '2:28'),
    new LeadershipModel(11, 'durgarao', 10, '8:01'),
    new LeadershipModel(12, 'babi', 1, '2:54'),
    new LeadershipModel(13, 'aadi', 0, '12:16'),
    new LeadershipModel(14, 'baskhar', 2, '2:54'),
    new LeadershipModel(15, 'pedda babi', 5, '2:17'),
    new LeadershipModel(16, 'rambabu', 9, '22:31'),
    new LeadershipModel(17, 'siva prasad', 12, '4:42'),
    new LeadershipModel(18, 'krishnarjun', 5, '3:54'),
    new LeadershipModel(19, 'Siva', 8, '3:54')
  ];
  constructor() { }

  ngOnInit(): void {
    this.totalItems = this.leadership.length;
    this.pageContent = this.leadership.slice(0, this.selectedOption);
  }

  pageChanged(event: any): void {
    this.startItem = (event.page - 1) * event.itemsPerPage;
    this.endItem = (event.page * event.itemsPerPage) > this.totalItems ? this.totalItems : (event.page * event.itemsPerPage);
    this.pageContent = this.leadership.slice(this.startItem, this.endItem);
  }

  onSearch(searchText: any): void {
    searchText = searchText.target.value;
    const filteredList: LeadershipModel[] = this.leadership.filter((leadership: LeadershipModel) =>
      leadership.rank.toString().includes(searchText) ||
      leadership.fullName.toString().includes(searchText) ||
      leadership.marks.toString().includes(searchText) ||
      leadership.timeTaken.includes(searchText)
    );
    this.totalItems = filteredList.length;
    this.endItem = filteredList.length > this.selectedOption ? this.selectedOption : filteredList.length;
    this.pageContent = filteredList.slice(0, this.endItem);
    console.log(filteredList);
  }

  numberOfRecords(event: any): void {
    this.selectedOption = event.target.value;
    this.endItem = this.totalItems > this.selectedOption ? this.selectedOption : this.totalItems;
    this.pageContent = this.leadership.slice(0, this.endItem);
    this.startItem = 0;
  }
  rankSort(): void {
    this.rankIcon = true;
    this.nameIcon = false;
    this.marksIcon = false;
    this.timeTakenIcon = false;
    if (this.rankToggle) {
      const sorted = this.leadership.sort((t1, t2) => {
        if (t1.rank < t2.rank) { return 1; }
        if (t1.rank > t2.rank) { return -1; }
        return 0;
      });
      this.rankToggle = false;
      this.leadership = sorted;
      this.pageContent = this.leadership.slice(this.startItem, this.endItem);
    } else {
      const sorted = this.leadership.sort((t1, t2) => {
        if (t1.rank > t2.rank) { return 1; }
        if (t1.rank < t2.rank) { return -1; }
        return 0;
      });
      this.rankToggle = true;
      this.leadership = sorted;
      this.pageContent = this.leadership.slice(this.startItem, this.endItem);
    }
  }

  nameSort(): void {
    this.rankIcon = false;
    this.nameIcon = true;
    this.marksIcon = false;
    this.timeTakenIcon = false;
    if (this.nameToggle) {
      const sorted = this.leadership.sort((t1, t2) => {
        if (t1.fullName < t2.fullName) { return 1; }
        if (t1.fullName > t2.fullName) { return -1; }
        return 0;
      });
      this.nameToggle = false;
      this.leadership = sorted;
      this.pageContent = this.leadership.slice(this.startItem, this.endItem);
    } else {
      const sorted = this.leadership.sort((t1, t2) => {
        if (t1.fullName > t2.fullName) { return 1; }
        if (t1.fullName < t2.fullName) { return -1; }
        return 0;
      });
      this.nameToggle = true;
      this.leadership = sorted;
      this.pageContent = this.leadership.slice(this.startItem, this.endItem);
    }
  }

  marksSort(): void {
    this.rankIcon = false;
    this.nameIcon = false;
    this.marksIcon = true;
    this.timeTakenIcon = false;
    if (this.marksToggle) {
      const sorted = this.leadership.sort((t1, t2) => {
        if (t1.marks < t2.marks) { return 1; }
        if (t1.marks > t2.marks) { return -1; }
        return 0;
      });
      this.marksToggle = false;
      this.leadership = sorted;
      this.pageContent = this.leadership.slice(this.startItem, this.endItem);
    } else {
      const sorted = this.leadership.sort((t1, t2) => {
        if (t1.marks > t2.marks) { return 1; }
        if (t1.marks < t2.marks) { return -1; }
        return 0;
      });
      this.marksToggle = true;
      this.leadership = sorted;
      this.pageContent = this.leadership.slice(this.startItem, this.endItem);
    }
  }

  timeTakenSort(): void {
    this.rankIcon = false;
    this.nameIcon = false;
    this.marksIcon = false;
    this.timeTakenIcon = true;
    if (this.timeTakenToggle) {
      const sorted = this.leadership.sort((t1, t2) => {
        if (t1.timeTaken < t2.timeTaken) { return 1; }
        if (t1.timeTaken > t2.timeTaken) { return -1; }
        return 0;
      });
      this.timeTakenToggle = false;
      this.leadership = sorted;
      this.pageContent = this.leadership.slice(this.startItem, this.endItem);
    } else {
      const sorted = this.leadership.sort((t1, t2) => {
        if (t1.timeTaken > t2.timeTaken) { return 1; }
        if (t1.timeTaken < t2.timeTaken) { return -1; }
        return 0;
      });
      this.timeTakenToggle = true;
      this.leadership = sorted;
      this.pageContent = this.leadership.slice(this.startItem, this.endItem);
    }
  }
}
