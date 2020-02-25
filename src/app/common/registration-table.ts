import { SignInModel } from '../enrollment/signin/signin.model';

export class RegistrationTable{
    public static members : SignInModel[] = [];
    public static earnings = [
        {sno:1, testDate: new Date(), rank: 2, winnings: 34, paymentStatus: 'pending'},
        {sno:2, testDate: new Date(), rank: 5, winnings: 21, paymentStatus: 'pending'},
        {sno:3, testDate: new Date(), rank: 7, winnings: 13, paymentStatus: 'success'},
        {sno:4, testDate: new Date(), rank: 4, winnings: 37, paymentStatus: 'pending'},
        {sno:5, testDate: new Date(), rank: 3, winnings: 0, paymentStatus: 'pending'},
        {sno:6, testDate: new Date(), rank: 3, winnings: 37, paymentStatus: 'pending'},
        {sno:7, testDate: new Date(), rank: 6, winnings: 37, paymentStatus: 'pending'},
        {sno:8, testDate: new Date(), rank: 3, winnings: 5, paymentStatus: 'pending'},
        {sno:9, testDate: new Date(), rank: 3, winnings: 37, paymentStatus: 'pending'},
        {sno:10, testDate: new Date(), rank: 3, winnings: 9, paymentStatus: 'pending'},
        {sno:12, testDate: new Date(), rank: 7, winnings: 0, paymentStatus: 'pending'},
        {sno:13, testDate: new Date(), rank: 3, winnings: 37, paymentStatus: 'success'},
        {sno:14, testDate: new Date(), rank: 3, winnings: 18, paymentStatus: 'success'},
        {sno:15, testDate: new Date(), rank: 9, winnings: 37, paymentStatus: 'pending'},
        {sno:16, testDate: new Date(), rank: 12, winnings: 0, paymentStatus: 'pending'},
        {sno:17, testDate: new Date(), rank: 3, winnings: 37, paymentStatus: 'success'},
        {sno:18, testDate: new Date(), rank: 25, winnings: 37, paymentStatus: 'pending'},
        {sno:19, testDate: new Date(), rank: 3, winnings: 1, paymentStatus: 'pending'},
    ]
}