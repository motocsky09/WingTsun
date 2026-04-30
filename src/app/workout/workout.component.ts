import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements AfterViewInit, OnDestroy {

  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Antrenamente Wing Tsun – Galerie & Video | Wing Tsun Oradea');
    this.metaService.updateTag({
      name: 'description',
      content: 'Descoperă antrenamentele de Wing Tsun Kung Fu din Oradea. Galerie foto și video din antrenamente reale. Tehnici tradiționale pentru autoapărare eficientă.'
    });
  }

  images = [
    'assets/workout/1.JPG',
    'assets/workout/2.JPG',
    'assets/workout/3.JPG',
    'assets/workout/4.JPG'
  ];

  lightboxOpen = false;
  lightboxIndex = 0;

  private keyHandler = (e: KeyboardEvent) => {
    if (!this.lightboxOpen) return;
    if (e.key === 'Escape') this.closeLightbox();
    if (e.key === 'ArrowLeft') this.prevImage();
    if (e.key === 'ArrowRight') this.nextImage();
  };

  ngAfterViewInit(): void {
    document.addEventListener('keydown', this.keyHandler);
  }

  ngOnDestroy(): void {
    document.removeEventListener('keydown', this.keyHandler);
    document.body.style.overflow = '';
  }

  openLightbox(index: number): void {
    this.lightboxIndex = index;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }

  prevImage(): void {
    this.lightboxIndex = (this.lightboxIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage(): void {
    this.lightboxIndex = (this.lightboxIndex + 1) % this.images.length;
  }
}
