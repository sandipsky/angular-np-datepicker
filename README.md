# NgxNepaliDatepicker
An Angular Datepicker Library with both AD and BS calendar.

## Installation

```script
npm i nepali-datepicker-angular
```
## Version support

Angular 14+

## usages

On app.module.ts

```Typescript
import { NgxNepaliDatepickerModule } from 'ngx-nepali-datepicker';


@NgModule({
  declarations: [...],
  imports: [..., NgxNepaliDatepickerModule, ...],
  providers: [...],
  bootstrap: [...],
})
```

On component to use

```html
<ne-datepicker [date]="date" dateIn="AD" calendarView="BS" (dateChange)="onDateChange($event)"> </ne-datepicker>
```

[Link](https://www.npmjs.com/package/ngx-nepali-datepicker) to NPM package.

## Documentation

### Inputs
| Input  | Type | Default | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| date	| string	| -	| Date value in string in format 'yyyy/mm/dd' or specific formate specify in 'dateFormat' property. |
| dateFormat	| string	| yyyy/mm/dd	| Date format for date property and also used for the output date format
| dateIn	| string	| BS	| Date type of the given date input. Accepts `BS` or `AD`. |
| minDate	| Date	| -	| Minimum selectable date in `AD`. |
| maxDate	| Date	| -	| Maximum selectable date in `AD`. |
| language	| string	|ne	| Language for the datepicker view. Accept only `ne`(Nepali) or `en`(English) |
| Placeholder	| string	| Enter date	Placeholder value to display |
| hasMultipleCalendarView	| boolean	|True	| Allow to switch datepicker with `AD` and `BS` date type |
| isError	| boolean	| false	| Flag to indicate error state and show error outline |
| primaryColor	| string	| -	| Color value for datepicker primary color. Accept string color name or the hex color value. |
| darkTheme	| boolean	| false	| Flag to set dark theme or light theme for the datepicker view. |
| calendarView	| string	| BS	| Default Calendar View. |


### Outputs

| Output  | Description |
| ------------- | ------------- |
| (dateChange)  | Fired when a date is selected|

