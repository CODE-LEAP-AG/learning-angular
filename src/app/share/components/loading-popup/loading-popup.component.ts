import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-loading-popup',
  standalone: true,
  imports: [],
  templateUrl: './loading-popup.component.html',
  styleUrl: './loading-popup.component.scss'
})
export class LoadingPopupComponent implements OnChanges, OnInit {
  @Input() showPopup = false
  @Input() loading = false
  ngOnInit(): void {

    gsap.set('#movieContent', {
      height: 100,
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('loading' in changes) {
      if (!changes['loading'].currentValue && changes['loading'].previousValue) {
        gsap.to('#movieContent', {
          height: 'auto',
          duration: 1
        })
      }
    }
    gsap.set('#movieContent', {
      height: 100,
    })

  }
}
