import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent implements OnInit {
  private tl = gsap.timeline({ repeat: -1 })
  ngOnInit(): void {
    this.tl.from("#codeleap .char.left", {
      rotate: 180,
      stagger: 0.4,
      ease: 'back'
    })
      .from("#codeleap .char.right", {
        rotate: -180,
        stagger: 0.4,
        ease: 'back'
      }, '<')
      .from('#codeleap .dash', {
        opacity: 0,
        width: 0,
        ease: 'bounce'
      })
      .from('#loadingContent .movie', {
        opacity: 0,
        y: 30,
        ease: 'back'
      }).to('#loadingContent', {
        opacity: 0,
        duration: 2
      })
  }
  ngOnDestroy(): void {
    this.tl.revert()
  }


}
