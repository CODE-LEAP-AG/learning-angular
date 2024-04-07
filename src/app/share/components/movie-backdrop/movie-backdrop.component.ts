import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMovie } from '@share/models/movie';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { VideoPlayerComponent } from '@share/components';

@Component({
  selector: 'app-movie-backdrop',
  standalone: true,
  imports: [CommonModule, VideoPlayerComponent],
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
  showMbMenu = false
  @Output() onLogin = new EventEmitter()
  @Input() movie: IMovie
  openPlayer = false


  ngOnInit(): void {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
    let mm = gsap.matchMedia();
    mm.add("(min-width: 800px)", () => {
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

      gsap.timeline({
        scrollTrigger: {
          trigger: '.movie-info__content',
          markers: false,
          start: '10% 25%',
          toggleActions: 'play pause reverse pause',
          scrub: 1
        }
      }).to('.movie-info__content #backdropHeader', {
        xPercent: -100
      }).to(".movie-info__content #backdropInfo", {
        xPercent: 100
      }, "<")
        .to(".movie-info__content #backdropInfo", {
          opacity: 0
        }, "<30%")
        .to(".movie-info__content #backdropOverview", {
          xPercent: -100,
        }, "<")

    });

  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  ngOnDestroy(): void {

    this.backdropTl.revert()
    this.scrollIndicatorTl.revert()
  }

  togglePlayer(isOpen: boolean) {
    this.openPlayer = isOpen
  }
  backdropAnimate() {
    this.backdropTl
  }
  handleLogin() {
    this.onLogin.emit()
  }
  handleSection(id: string) {
    this.showMbMenu = false
    gsap.to(window, {
      duration: 0.2, scrollTo: `#${id}`,
      ease: 'power2'
    })
  }
}
