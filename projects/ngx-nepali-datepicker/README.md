# NgxNepaliDatepicker
An Angular Datepicker Library with both AD and BS calendar.

## Installation

```script
npm install ngx-nepali-datepicker
```
## Version support

Angular 14+

## Usage

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
<np-datepicker [date]="date" dateIn="AD" calendarView="BS" (dateChange)="onDateChange($event)"> </np-datepicker>
```

## Documentation

### Inputs

| Input  | Type | Default | Description |
| ------------- | ------------- | ------------- | ------------- |
| date  | `string`| -| Date value in `string`.|
| dateIn  | `string`| `BS`| Date format used for above Input Date if not specified converts given date to `BS` date equivalent. Accepts `BS` or `AD`.|
| dateFormat  | `string`| `yyyy/mm/dd`| Date format used for the output.|
| minDate  | `Date`| -| Minimum selectable date in `AD`.|
| maxDate  | `Date`| -| Maximum selectable date in `AD`.|
| language  | `string`| ne| Language for the datepicker view. Accept only `ne`(Nepali) or `en`(English).|
| placeholder  | `string`| Enter Date| Placeholder value to display.|
| hasMultipleCalendarView  | `boolean`| `true`| Allow to switch datepicker with `AD` and `BS` date type.|
| isError  | `boolean`| `false`| Flag to indicate error state and show error outline.|
| primaryColor  | `string`| -| Color value for datepicker primary color. Accept string color name or the hex color value.|
| darkTheme  | `boolean`| `false`| Flag to set dark theme or light theme for the datepicker view.|
| calendarView  | `string`| `BS`| Default Calendar Type. Accepts `BS` or `AD`.|
| showIcon  | `boolean`| `true`| Show or Hide the Datepicker Icon.|



### Outputs

| Output  | Description |
| ------------- | ------------- |
| (dateChange)  | Fired when a date is selected|

