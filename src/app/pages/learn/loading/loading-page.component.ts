import { Component } from '@angular/core';
import { LoadingComponent } from '@share/components';

@Component({
  selector: 'app-page-loading',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './loading-page.component.html',
  styleUrl: './loading-page.component.scss'
})
export class LoadingPageComponent {

}
