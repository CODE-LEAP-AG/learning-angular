import { Component, Input } from '@angular/core';
import { IMovie } from '@share/models/movie';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import MotionPathPlugin from 'gsap/MotionPathPlugin';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  @Input() movie: IMovie 

  handleBookmark(id: number){
    // gsap.registerPlugin(MotionPathPlugin)    
    // gsap.from(`#heartPlus${id}`,{
    // duration: 5, 
    // repeat: 12,
    // repeatDelay: 3,
    // yoyo: true,
    // ease: "power1.inOut",
    // motionPath:{
    //   path: "m204.7,301c-72.74,-70.069,-217.635,-113.653,-202.617,-139.965c62.255,-29.412,399.312,220.588,169.954,-14.058c-167.105,-105.968,29.489,-99.12,5.734,-145.977",
    //   autoRotate: true,
    //   alignOrigin: [0.5, 0.5]
    // }
    // })
    // console.log("click", id)
  }
}
