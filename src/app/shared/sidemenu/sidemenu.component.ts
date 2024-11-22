import { Component } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.scss'
})
export class SidemenuComponent {
 images = [
    { src: 'assets/images/sidebar/two.png', alt: 'Image 1' },
    { src: 'assets/images/sidebar/one.png', alt: 'Image 2' },
    { src: 'assets/images/sidebar/three.png', alt: 'Image 3' },
    { src: 'assets/images/sidebar/two.png', alt: 'Image 4' },
    { src: 'assets/images/sidebar/one.png', alt: 'Image 5' },
    { src: 'assets/images/sidebar/three.png', alt: 'Image 6' },
  ];
}
