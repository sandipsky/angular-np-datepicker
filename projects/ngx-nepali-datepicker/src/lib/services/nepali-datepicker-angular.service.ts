import { Injectable } from '@angular/core';
import { NepaliDatepickerAngularPrivateService } from './nepali-datepicker-angular-private.service';
import {
  englishLeapMonths,
  englishMonths,
  nepaliMonths,
} from '../constants/data';
type DateFormat = 'yyyy/mm/dd' | 'dd/mm/yyyy' | 'yyyy-mm-dd' | 'dd-mm-yyyy';
@Injectable({
  providedIn: 'root',
})
export class NgxNepaliDatepickerService {
  nepaliMonths = nepaliMonths;
  englishMonths = englishMonths;
  englishLeapMonths = englishLeapMonths;

  constructor(
    private _datePicketService: NepaliDatepickerAngularPrivateService
  ) { }

  /**
   * @param dateInAD string value of AD date only
   * @param format 'yyyy/mm/dd' | 'dd/mm/yyyy' | 'yyyy-mm-dd' | 'dd-mm-yyyy' value in which the dateInAD is formatted with
   * @returns string BS date with same as provided in format params
   */
  ADToBS(dateInAD: string, format: DateFormat) {
    const formattedDate = this._datePicketService.changeStructure(dateInAD);
    if (!formattedDate) throw new Error('Invalid date value');
    const BSDate = this._datePicketService.engToNepDate(
      formattedDate.day,
      formattedDate.month,
      formattedDate.year
    );
    return this.formatDate(BSDate, format);
  }

  /**
   *
   * @param dateInBS string vale of BS date only
   * @param format 'yyyy/mm/dd' | 'dd/mm/yyyy' | 'yyyy-mm-dd' | 'dd-mm-yyyy' value in which the dateInBS is formatted with
   * @returns string AD date with same as provided in format params
   */
  BSToAD(dateInBS: string, format: DateFormat) {
    const formattedDate = this._datePicketService.changeStructure(dateInBS);
    if (!formattedDate) throw new Error('Invalid date value');
    const ADDate = this._datePicketService.nepToEngDate(
      formattedDate.day,
      formattedDate.month,
      formattedDate.year
    );
    return this.formatDate(
      {
        day: ADDate.getDate(),
        month: ADDate.getMonth(),
        year: ADDate.getFullYear(),
      },
      format
    );
  }

  formatDate(
    date: { day: number; month: number; year: number },
    format: string
  ) {
    const regex = {
      year: /y{2,4}/i,
      month: /m{1,2}/i,
      day: /d{1,2}/i,
    };
    format = format.replace(regex.year, date.year.toString());
    format = format.replace(regex.month, this.zeroPad(date.month + 1, 2));
    format = format.replace(regex.day, this.zeroPad(date.day, 2));
    return format;
  }

  getTodayDate(format: DateFormat = 'yyyy-mm-dd') {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(today.getDate()).padStart(2, '0');

    const formattedDate = `${year}/${month}/${day}`;
    return this.ADToBS(formattedDate, format);
  }

  getTodayEnglishDate(format: DateFormat = 'yyyy-mm-dd') {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = this.formatDate({ day: Number(day), month: Number(month), year: Number(year) }, format);
    return formattedDate;
  }

  getNumberofDaysInNepaliMonths(year: number, month: number) {
    return (this.nepaliMonths[year - 2000][month] || 0);
  }

  getNumberofDaysInEnglishMonths(year: number, month: number) {
    if (year % 4 === 0) {
      return (this.englishMonths[month] || 0);
    } else return (this.englishLeapMonths[month] || 0);
  }

  private zeroPad(num: number, places: number) {
    return String(num).padStart(places, '0');
  }
}
