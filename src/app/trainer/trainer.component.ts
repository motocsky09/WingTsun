import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements AfterViewInit, OnDestroy {

  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Instructor Si-Fu Costan Gabriel-Alex | Wing Tsun Oradea');
    this.metaService.updateTag({
      name: 'description',
      content: 'Si-Fu Costan Gabriel-Alex, instructor de Wing Tsun Kung Fu în Oradea, afiliat Five Elements Wing Tsun Association. Drumul, valorile și activitatea sa.'
    });
  }
  padNumber(n: number): string {
    return n.toString().padStart(2, '0');
  }

  profileImage = 'assets/images/trainer/profile image 2.png';

  lightboxOpen = false;
  lightboxIndex = 0;

  images = [
    'assets/images/trainer/WhatsApp Image 2026-03-12 at 21.34.48 (1).jpeg',
    'assets/images/trainer/WhatsApp Image 2026-03-12 at 21.34.48 (2).jpeg',
    'assets/images/trainer/WhatsApp Image 2026-03-12 at 21.34.48 (3).jpeg',
    'assets/images/trainer/WhatsApp Image 2026-03-12 at 21.34.48 (4).jpeg',
    'assets/images/trainer/WhatsApp Image 2026-03-12 at 21.34.48.jpeg',
    'assets/images/trainer/WhatsApp Image 2026-03-12 at 21.34.49 (1).jpeg',
    'assets/images/trainer/WhatsApp Image 2026-03-12 at 21.34.49 (2).jpeg',
    'assets/images/trainer/WhatsApp Image 2026-03-12 at 21.34.49 (3).jpeg',
    'assets/images/trainer/WhatsApp Image 2026-03-12 at 21.34.49.jpeg',
  ];

  videos = [
    'assets/images/trainer/WhatsApp Video 2026-03-12 at 21.34.08.mp4',
    'assets/images/trainer/WhatsApp Video 2026-03-12 at 21.34.09.mp4',
    'assets/images/trainer/WhatsApp Video 2026-03-12 at 21.34.10.mp4',
    'assets/images/trainer/WhatsApp Video 2026-03-12 at 21.34.14 (1).mp4',
    'assets/images/trainer/WhatsApp Video 2026-03-12 at 21.34.14.mp4',
    'assets/images/trainer/WhatsApp Video 2026-03-13 at 10.42.26.mp4',
    'assets/images/trainer/WhatsApp Video 2026-03-13 at 10.45.44.mp4',
  ];

  sections = [
    {
      title: 'Misiunea și Dedicarea',
      content: [
        'Si-Fu Costan Gabriel-Alex este instructor de Wing Tsun Kung-Fu în Oradea, dedicat studiului profund și transmiterii autentice a principiilor acestei arte marțiale tradiționale chinezești. Activitatea sa este ghidată de respectul pentru tradiție, disciplină și dorința de a păstra integritatea sistemului Wing Tsun, așa cum a fost transmis de-a lungul generațiilor.',
        'Drumul său în artele marțiale este construit pe muncă constantă, perseverență și o căutare continuă a perfecțiunii tehnice. Pentru Si-Fu Gabriel, Wing Tsun nu reprezintă doar un sistem de luptă, ci o cale de dezvoltare personală și autocunoaștere. Prin antrenamentele sale, el urmărește să transmită elevilor nu doar tehnicile sistemului, ci și principiile fundamentale care stau la baza acestei arte: eficiență, adaptabilitate, control și claritate mentală în situații de conflict.'
      ]
    },
    {
      title: 'Afiliația și Valorile Transmise',
      content: [
        'Si-Fu Costan Gabriel-Alex este afiliat la Five Elements Wing Tsun Kung-Fu Association, organizație dedicată dezvoltării și transmiterii sistemului Wing Tsun la nivel internațional. În cadrul acestei federații, el continuă să studieze și să își perfecționeze cunoștințele sub îndrumarea lui Si-Kung Török Róbert, Mare Maestru și fondator al organizației, unul dintre reprezentanții sistemului în Europa.',
        'Ca instructor, Si-Fu Gabriel își asumă responsabilitatea de a transmite mai departe nu doar tehnicile sistemului, ci și valorile care definesc o adevărată școală de arte marțiale: respectul, disciplina, perseverența și dezvoltarea caracterului. Antrenamentele sale sunt concepute pentru a dezvolta reflexe naturale, structură corporală solidă, controlul adversarului și capacitatea de a reacționa eficient în situații reale de autoapărare.'
      ]
    },
    {
      title: 'Comunitatea și Viziunea de Viitor',
      content: [
        'Prin munca sa, el urmărește să formeze practicanți care înțeleg Wing Tsun nu doar ca pe un set de tehnici, ci ca pe o artă marțială profundă, bazată pe principii logice și eficiente. Elevii săi sunt încurajați să își depășească limitele, să își dezvolte încrederea în sine și să cultive o mentalitate disciplinată atât în sală, cât și în viața de zi cu zi.',
        'Astăzi, Si-Fu Costan Gabriel-Alex continuă să își dedice timpul studiului și predării sistemului Wing Tsun, dezvoltând în Oradea o comunitate de practicanți uniți de respectul pentru arta marțială, tradiție și evoluție constantă. Prin activitatea sa, el contribuie la păstrarea și transmiterea mai departe a valorilor autentice ale Wing Tsun Kung-Fu pentru generațiile viitoare.'
      ]
    }
  ];

  private observer!: IntersectionObserver;
  private keyHandler = (e: KeyboardEvent) => {
    if (!this.lightboxOpen) return;
    if (e.key === 'Escape') this.closeLightbox();
    if (e.key === 'ArrowLeft') this.prevImage();
    if (e.key === 'ArrowRight') this.nextImage();
  };

  ngAfterViewInit(): void {
    document.addEventListener('keydown', this.keyHandler);

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07 }
    );

    document.querySelectorAll('.reveal').forEach(el => this.observer.observe(el));
  }

  ngOnDestroy(): void {
    document.removeEventListener('keydown', this.keyHandler);
    this.observer?.disconnect();
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
