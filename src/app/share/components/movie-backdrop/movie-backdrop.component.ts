import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from '@share/models/movie';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

@Component({
  selector: 'app-movie-backdrop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-backdrop.component.html',
  styleUrl: './movie-backdrop.component.scss'
})
export class MovieBackdropComponent implements OnInit {

  private backdropTl = gsap.timeline({
    defaults: {
      opacity: 0,
      yoyo: true
    }
  })
  private scrollIndicatorTl = gsap.timeline({
    repeat: -1
  })
  @Input() movie: IMovie
  openPlayer = false


  ngOnInit(): void {
    gsap.registerPlugin(ScrollToPlugin)

    this.backdropTl.from('#backdropHeader', {
      y: 100
    }).from('#backdropInfo', {
      y: 200
    }).from('#backdropOverview', {
      y: 100
    }).to('#playBtn', {
      right: '-80%',
      rotate: 360,
      duration: 2,
      opacity: 1,
      ease: "back"
    })
    this.scrollIndicatorTl.to('#scrollIndicator .dot', {
      opacity: 0,
      top: 30,
      ease: 'back',
      duration: 1.4
    })

  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.backdropTl.revert()
    this.scrollIndicatorTl.revert()
  }

  togglePlayer(isOpen: boolean) {
    this.openPlayer = isOpen
  }
  backdropAnimate() {
    this.backdropTl
  }
  handleSection(id: string) {
    gsap.to(window, {
      duration: 0.2, scrollTo: `#${id}`,
      ease: 'power2'
    })
  }
}
