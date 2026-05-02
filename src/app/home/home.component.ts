import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { trigger, state, style, animate, transition } from '@angular/animations';

interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [animate('1s ease-in')])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Wing Tsun Oradea – Artă Marțială Inteligentă');
    this.metaService.updateTag({
      name: 'description',
      content: 'Școala de Wing Tsun Kung Fu din Oradea. Antrenamente pentru adulți și copii. Primul antrenament este gratuit. Instructor Si-Fu Costan Gabriel-Alex.'
    });
  }

  faqItems: FaqItem[] = [
    {
      question: 'Trebuie să am experiență anterioară în arte marțiale?',
      answer: 'Nu, nu este necesară nicio experiență anterioară. Wing Tsun este conceput astfel încât oricine poate învăța de la zero, indiferent de vârstă sau condiție fizică.',
      open: false
    },
    {
      question: 'De la ce vârstă se poate practica Wing Tsun?',
      answer: 'Avem grupe dedicate copiilor (de la 6 ani) și adulților. Antrenamentele sunt adaptate fiecărei grupe de vârstă pentru un progres optim.',
      open: false
    },
    {
      question: 'Ce echipament îmi trebuie la primul antrenament?',
      answer: 'La primul antrenament poți veni în orice îmbrăcăminte sport confortabilă. Echipamentul oficial (uniforma) se achiziționează după înscrierea definitivă.',
      open: false
    },
    {
      question: 'Cât durează un antrenament?',
      answer: 'Un antrenament durează 2 ore pentru adulți și 1 oră pentru copii. Ritmul este adaptat nivelului grupei.',
      open: false
    },
    {
      question: 'Cum funcționează sistemul de grade?',
      answer: 'Sistemul Five Elements Wing Tsun cuprinde 5 categorii a câte 5 grade, plus grade introductive. Avansarea se face prin examene periodice evaluate de instructori calificați.',
      open: false
    },
    {
      question: 'Pot participa la un antrenament înainte de înscriere?',
      answer: 'Da! Primul antrenament este complet gratuit și fără nicio obligație. Vino să experimentezi Wing Tsun înainte de a lua orice decizie.',
      open: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqItems[index].open = !this.faqItems[index].open;
  }

  testimonials = [
    {
      name: 'Andrei M.',
      since: 'Elev din 02/2026',
      text: 'Am început Wing Tsun fără nicio experiență în arte marțiale. Instructorul explică totul pas cu pas, atmosfera este fantastică și am văzut progres real în câteva luni. Recomand cu toată inima!',
      grade: 'Începător gradul 2'
    },
    {
      name: 'Eduard C.',
      since: 'Elev din 03/2026',
      text: 'Căutam ceva practic pentru autoapărare. Wing Tsun m-a surprins – nu depinde de forță fizică, ci de tehnică și inteligență. Am câștigat și multă încredere în mine.',
      grade: 'Începător gradul 1'
    },
    {
      name: 'Marius B.',
      since: 'Elev din 02/2026',
      text: 'Am adus și copilul meu la grupa de copii și ambii suntem extrem de mulțumiți. Disciplina și respectul predate alături de tehnicile de luptă sunt un bonus neașteptat de valoros.',
      grade: 'Începător gradul 2'
    }
  ];

  events = [
    {
      date: '10',
      month: 'Mai',
      title: 'Antrenament Demonstrativ Gratuit',
      description: 'Zi deschisă – vino să experimentezi Wing Tsun fără obligații.',
      badge: 'Gratuit'
    },
    {
      date: '30',
      month: 'Mai',
      title: 'Examen Grad Începător II',
      description: 'Primul examen pentru avansarea la gradul 2 al nivelului Începător.',
      badge: 'Examen'
    },
    {
      date: '14',
      month: 'Iun',
      title: 'Seminar Five Elements WT',
      description: 'Seminar de perfecționare cu participarea instructorilor din asociație.',
      badge: 'Seminar'
    }
  ];

  formData = { name: '', phone: '', message: '' };
  formSubmitted = false;

  submitForm(): void {
    if (!this.formData.name.trim() || !this.formData.phone.trim() || !this.formData.message.trim()) return;
    const text = encodeURIComponent(
      `Bună ziua! Mă numesc ${this.formData.name}. ${this.formData.message} . Numărul meu de contact: ${this.formData.phone}`
    );
    window.open(`https://wa.me/40771474694?text=${text}`, '_blank');
    this.formSubmitted = true;
    this.formData = { name: '', phone: '', message: '' };
    setTimeout(() => (this.formSubmitted = false), 5000);
  }
}
