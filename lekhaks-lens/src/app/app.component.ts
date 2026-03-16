import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

interface MediaItem {
  type: 'photo' | 'video';
  src: string;
  thumb?: string;
  title: string;
  description?: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  // currentYear = new Date().getFullYear();
  get currentYear(): number {
  return new Date().getFullYear();
}
  title = 'Photography & Videography Portfolio';
    // Stats animation
  animateStats: boolean = false;
    // Hero carousel items
  heroSlides: MediaItem[] = [
    {
      type: 'photo',
      src: 'assets/hero/hero1.jpeg',
      title: 'Weddings',
      description: 'Capturing timeless wedding stories.'
    },
    {
      type: 'photo',
      src: 'assets/hero/hero2.jpg',
      title: 'Portraits',
      description: 'Minimal, cinematic portraits.'
    },
    {
      type: 'video',
      src: 'assets/hero/NightLife.mp4',
      title: 'Showreel',
      description: 'Highlights from recent shoots.'
    }
  ];

  photographyItems: MediaItem[] = [
    {
      type: 'photo',
      src: 'assets/photos/photo1.jpg',
      thumb: 'assets/photos/thumbs/photo1.jpg',
      title: 'Bridal Portrait'
    },
    {
      type: 'photo',
      src: 'assets/photos/photo2.jpg',
      thumb: 'assets/photos/thumbs/photo2.jpg',
      title: 'Destination Wedding'
    },
    {
      type: 'photo',
      src: 'assets/photos/photo3.jpg',
      thumb: 'assets/photos/thumbs/photo3.jpg',
      title: 'Couple Session'
    },
    {
      type: 'photo',
      src: 'assets/photos/photo4.jpg',
      thumb: 'assets/photos/thumbs/photo4.jpg',
      title: 'Editorial Look'
    }
  ];

  videographyItems: MediaItem[] = [
    {
      type: 'video',
      src: 'assets/videos/wedding-teaser.mp4',
      title: 'Wedding Teaser'
    },
    {
      type: 'video',
      src: 'assets/videos/music-video.mp4',
      title: 'Music Video'
    },
    {
      type: 'video',
      src: 'assets/videos/event-recap.mp4',
      title: 'Event Recap'
    }
  ];

  ngOnInit() {
  // Auto testimonial rotation
  setInterval(() => this.nextTestimonial(), 5000);
}

// Scroll trigger for animations
@HostListener('window:scroll')
onWindowScroll() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      el.classList.add('visible');
      if (el.classList.contains('stats-section')) {
        this.animateStats = true;
      }
    }
  });
}

  heroIndex = 0;
  photoIndex = 0;
  videoIndex = 0;

  nextHero() {
    this.heroIndex = (this.heroIndex + 1) % this.heroSlides.length;
  }

  prevHero() {
    this.heroIndex =
      (this.heroIndex - 1 + this.heroSlides.length) % this.heroSlides.length;
  }

  nextPhoto() {
    this.photoIndex = (this.photoIndex + 1) % this.photographyItems.length;
  }

  prevPhoto() {
    this.photoIndex =
      (this.photoIndex - 1 + this.photographyItems.length) %
      this.photographyItems.length;
  }

  nextVideo() {
    this.videoIndex = (this.videoIndex + 1) % this.videographyItems.length;
  }

  prevVideo() {
    this.videoIndex =
      (this.videoIndex - 1 + this.videographyItems.length) %
      this.videographyItems.length;
  }
  testimonials = [
    {
      quote: "Our wedding film captured emotions we didn't even know we had. Pure magic!",
      author: "Priya & Raj, Mumbai Wedding",
      role: "Bride & Groom"
    },
    {
      quote: "His portraits made our brand campaign go viral. 10/10 recommend!",
      author: "Asha Designs",
      role: "Creative Director"
    },
    {
      quote: "Best videographer for events. Professional, creative, delivers on time.",
      author: "Corporate Events India",
      role: "Event Manager"
      }
  ];

  testimonialIndex = 0;

  // Stats (animate from 0)
  stats = [
    { label: 'Weddings Captured', value: 350 },
    { label: 'Brands Served', value: 42 },
    { label: 'Years Experience', value: 8 },
    { label: 'Happy Clients', value: 1200 }
  ];

  // Brands
  brands = [
    'assets/brands/vogue.png',
    'assets/brands/elle.png',
    'assets/brands/weddingwire.png',
    'assets/brands/zomato.png'
  ];

  // Modal control
  showModal = false;

  nextTestimonial() {
    this.testimonialIndex = (this.testimonialIndex + 1) % this.testimonials.length;
  }

  openModal(event?: Event): void {
    this.showModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.showModal = false;
    document.body.style.overflow = '';
  }
}


