import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { __values } from 'tslib';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})

export class CalendarComponent {
  week = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun'
  ]
  private time = {
    0: '00:00',
    1: '01:00',
    2: '02:00',
    3: '03:00',
    4: '04:00',
    5: '05:00',
    6: '06:00',
    7: '07:00',
    8: '08:00',
    9: '09:00',
    10: '10:00',
    11: '11:00',
    12: '12:00',
    13: '13:00',
    14: '14:00',
    15: '15:00',
    16: '16:00',
    17: '17:00',
    18: '18:00',
    19: '19:00',
    20: '20:00',
    21: '21:00',
    22: '22:00',
    23: '23:00'
  }
  cells: number[] = Array.from({ length: 27 * 4 }, (_, i) => i + 1);
  numColLine = Array.from({ length: 6 }, (_, i) => {
    return {
      label: '',
      value: (i + 1) * (100 / 7)
    }
  });
  numRowLine = Array.from({ length: 23 }, (_, i) => {
    return {
      label: this.time[(i + 1) as keyof typeof this.time],
      value: (i + 1) * 200 + 50
    }
  })
}
