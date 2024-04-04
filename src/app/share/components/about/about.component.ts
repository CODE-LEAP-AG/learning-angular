import { Component } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  private aboutTl = gsap.timeline()

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger)
    gsap.timeline({
      scrollTrigger: {
        trigger: "#aboutContainer",
        pin: true,
        scrub: 1,
        markers: false,
        end: "+=700"
      }
    }).to('#aboutContainer', {
      xPercent: -100,
      ease: "none",
    });
    gsap.timeline({ repeat: -1, yoyo: true }).from('#aboutContainer .logo', {
      x: 20,
      y: 6,
      opacity: 1,
      ease: 'back',
      stagger: 0.1
    })

  }

}
