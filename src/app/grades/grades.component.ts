import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

interface Uniform {
  src: string;
  label: string;
}

interface GradeCategory {
  id: string;
  element: string;
  elementChar: string;
  categoryName: string;
  abbreviation: string;
  color: string;
  colorRgb: string;
  form: string;
  formTranslation: string;
  description: string;
  techniques: string[];
  levels: string[];
  icons: string[];
  uniforms: Uniform[];
}

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements AfterViewInit, OnDestroy {

  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Sistemul de Grade Five Elements Wing Tsun | Wing Tsun Oradea');
    this.metaService.updateTag({
      name: 'description',
      content: 'Sistemul de grade Five Elements Wing Tsun: 5 categorii × 5 grade, bazate pe filosofia celor cinci elemente. De la Elev Practicant la Mare Maestru.'
    });
  }

  introGrades = [
    {
      code: 'EÎ1',
      name: 'Elev Începător 1',
      description: 'Primul pas în Wing Tsun. Vei dobândi bazele autoapărării, principiile fundamentale de poziție și primele tehnici de blocare și lovire.',
      perk: 'Tricou oficial de antrenament inclus'
    },
    {
      code: 'EÎ2',
      name: 'Elev Începător 2',
      description: 'Aprofundarea fundamentelor Wing Tsun. Introducere în principiile de bază ale sistemului și primele exerciții de Chi Sao.',
      perk: '50% reducere la pantaloni de antrenament'
    }
  ];

  introUniforms: Uniform[] = [
    { src: 'assets/images/grades/uniforme/felso_kezdo.jpg', label: 'Tricou Alb — Elev Începător' },
    { src: 'assets/images/grades/uniforme/also_kezdo.jpg', label: 'Pantaloni Negri — Elev Începător' },
  ];

  categories: GradeCategory[] = [
    {
      id: 'foc',
      element: 'Foc',
      elementChar: '火',
      categoryName: 'Elev Practicant',
      abbreviation: 'EP',
      color: '#e8472e',
      colorRgb: '232, 71, 46',
      form: 'Siu Nim Tao',
      formTranslation: 'Mintea Cea Mică',
      description: 'Prima formă a sistemului Wing Tsun stabilește fundația întregii practice. Mișcările lente și deliberate cultivă structura corporală corectă, relaxarea musculară profundă și concentrarea mentală. Această etapă formează baza solidă pe care se construiesc toate tehnicile avansate ale sistemului.',
      techniques: [
        'Poziția fundamentală Yee Chi Kim Yeung Ma',
        'Tan Sao — palma care dispersează forța',
        'Pak Sao — tehnica de lovire și blocare',
        'Bong Sao — aripa de cocor',
        'Principii de relaxare și structură corporală',
        'Introducere în Chi Sao (mâini lipicioase)',
      ],
      levels: ['EP1', 'EP2', 'EP3', 'EP4', 'EP5'],
      icons: [
        'assets/images/grades/icons/gyd1.png',
        'assets/images/grades/icons/gyd2.png',
        'assets/images/grades/icons/gyd3.png',
        'assets/images/grades/icons/gyd4.png',
        'assets/images/grades/icons/gyd5.png',
      ],
      uniforms: [
        { src: 'assets/images/grades/uniforme/kezdo_teljes.png', label: 'Ținută Completă' },
        { src: 'assets/images/grades/uniforme/kezdo_felso_elol.png', label: 'Tricou — Față' },
        { src: 'assets/images/grades/uniforme/kezdo_felso_hatul.png', label: 'Tricou — Spate' },
        { src: 'assets/images/grades/uniforme/kezdo_also_elol.png', label: 'Pantaloni' },
      ]
    },
    {
      id: 'apa',
      element: 'Apă',
      elementChar: '水',
      categoryName: 'Elev Avansat',
      abbreviation: 'EA',
      color: '#2874e8',
      colorRgb: '40, 116, 232',
      form: 'Chum Kiu',
      formTranslation: 'Căutarea Podului',
      description: 'A doua formă introduce mobilitatea, deplasamentele și capacitatea de a crea „podul" de contact cu adversarul. Principiile Apei — adaptabilitate, curgere, forță prin cedare — sunt integrate adânc în tehnicile acestei etape, completând tabloul structurii din prima formă.',
      techniques: [
        'Deplasamente laterale și diagonale',
        'Pivotare Yiu Ma (rotația taliei)',
        'Gan Sao — tehnica de separare a brațelor',
        'Jut Sao — smucitura bruscă',
        'Picioare de bază: Jum Gerk și Wang Gerk',
        'Chi Sao cu deplasamente și pivotare',
      ],
      levels: ['EA1', 'EA2', 'EA3', 'EA4', 'EA5'],
      icons: [
        'assets/images/grades/icons/hd1.png',
        'assets/images/grades/icons/hd2.png',
        'assets/images/grades/icons/hd3.png',
        'assets/images/grades/icons/hd4.png',
        'assets/images/grades/icons/hd5.png',
      ],
      uniforms: [
        { src: 'assets/images/grades/uniforme/halado_teljes.png', label: 'Ținută Completă' },
        { src: 'assets/images/grades/uniforme/halado_felso_elol.png', label: 'Tricou — Față' },
        { src: 'assets/images/grades/uniforme/halado_felso_hatul.png', label: 'Tricou — Spate' },
        { src: 'assets/images/grades/uniforme/halado_also_elol.png', label: 'Pantaloni' },
      ]
    },
    {
      id: 'pamant',
      element: 'Pământ',
      elementChar: '土',
      categoryName: 'Instructor',
      abbreviation: 'I',
      color: '#c4873a',
      colorRgb: '196, 135, 58',
      form: 'Biu Jee',
      formTranslation: 'Degetele Săgetătoare',
      description: 'A treia formă conține tehnicile de urgență ale sistemului — cele folosite atunci când structura ideală este compromisă. Este prima etapă cu titlu de Instructor, care implică și responsabilitatea de a transmite cunoașterea mai departe. Vârsta minimă pentru acest grad este 16 ani.',
      techniques: [
        'Kup Jarn — cotul coborât, tehnică de urgență',
        'Fak Sao — mâna biciuită',
        'Tehnici de recuperare a centrului liniei',
        'Chi Sao avansat și Dan Chi Sao',
        'Principii pedagogice de bază',
        'Structura și responsabilitățile de instructor',
      ],
      levels: ['I1', 'I2', 'I3', 'I4', 'I5'],
      icons: [
        'assets/images/grades/icons/i1.png',
        'assets/images/grades/icons/i2.png',
        'assets/images/grades/icons/i3.png',
        'assets/images/grades/icons/i4.png',
        'assets/images/grades/icons/i5.png',
      ],
      uniforms: [
        { src: 'assets/images/grades/uniforme/instruktor_teljes.png', label: 'Ținută Completă' },
        { src: 'assets/images/grades/uniforme/instruktor_felso_elol.png', label: 'Tricou — Față' },
        { src: 'assets/images/grades/uniforme/instruktor_felso_hatul.png', label: 'Tricou — Spate' },
        { src: 'assets/images/grades/uniforme/instruktor_also_elol.png', label: 'Pantaloni' },
      ]
    },
    {
      id: 'lemn',
      element: 'Lemn',
      elementChar: '木',
      categoryName: 'Maestru',
      abbreviation: 'M',
      color: '#2e9e52',
      colorRgb: '46, 158, 82',
      form: 'Muk Yan Chong · Chi Gerk · Luk Dim Boon Kwun',
      formTranslation: 'Manechinul de Lemn · Picioare Lipicioase · Bastonul de 6½ Puncte',
      description: 'Etapa Maestru introduce trei instrumente esențiale ale sistemului: manechinul de lemn pentru rafinarea tehnicilor la contact, Chi Gerk pentru lucrul avansat cu picioarele și Luk Dim Boon Kwun — bastonul tradițional Wing Tsun. Această etapă consolidează și integrează toate cunoștințele acumulate anterior.',
      techniques: [
        'Muk Yan Chong — cele 116 mișcări pe manechin',
        'Chi Gerk — picioare lipicioase la contact',
        'Luk Dim Boon Kwun — bastonul de 6½ puncte',
        'Tehnici avansate de distanță și unghi',
        'Sparring și aplicații libere',
        'Transmiterea și predarea sistemului',
      ],
      levels: ['M1', 'M2', 'M3', 'M4', 'M5'],
      icons: [
        'assets/images/grades/icons/m1.png',
        'assets/images/grades/icons/m2.png',
        'assets/images/grades/icons/m3.png',
        'assets/images/grades/icons/m4.png',
        'assets/images/grades/icons/m5.png',
      ],
      uniforms: [
        { src: 'assets/images/grades/uniforme/mester_teljes.png', label: 'Ținută Completă' },
        { src: 'assets/images/grades/uniforme/mester_felso_elol.png', label: 'Tricou — Față' },
        { src: 'assets/images/grades/uniforme/mester_felso_hatul.png', label: 'Tricou — Spate' },
        { src: 'assets/images/grades/uniforme/mester_kopeny_elol.png', label: 'Haină' },
        { src: 'assets/images/grades/uniforme/mester_also_oldal.png', label: 'Pantaloni' },
      ]
    },
    {
      id: 'metal',
      element: 'Metal',
      elementChar: '金',
      categoryName: 'Maestrul Maestrilor',
      abbreviation: 'MM',
      color: '#a0a0c0',
      colorRgb: '160, 160, 192',
      form: 'Bart Cham Dao',
      formTranslation: 'Opt Tăișuri ale Sabirilor',
      description: 'Cel mai înalt nivel tehnic al sistemului Wing Tsun. Bart Cham Dao — forma cu cele două cuțite fluture scurte — reprezintă coroana întregului sistem. Tehnicile acestei etape sunt transmise doar celor care au demonstrat o înțelegere profundă a tuturor principiilor Wing Tsun.',
      techniques: [
        'Bart Cham Dao — forma cu 2 cuțite scurte',
        'Cele 116 mișcări cu armă',
        'Tehnici cu armă la contact (Chi Sao cu Dao)',
        'Principii superioare de unghi și distanță',
        'Predarea la nivel de Maestru',
        'Transmiterea tradiției complete a sistemului',
      ],
      levels: ['MM1', 'MM2', 'MM3', 'MM4', 'MM5'],
      icons: [
        'assets/images/grades/icons/mm1.png',
        'assets/images/grades/icons/mm2.png',
        'assets/images/grades/icons/mm3.png',
        'assets/images/grades/icons/mm4.png',
        'assets/images/grades/icons/mm5.png',
      ],
      uniforms: [
        { src: 'assets/images/grades/uniforme/mesterek_mestere_teljes.png', label: 'Ținută Completă' },
        { src: 'assets/images/grades/uniforme/mesterek_mestere_felso_elol.png', label: 'Tricou — Față' },
        { src: 'assets/images/grades/uniforme/mesterek_mestere_felso_hatul.png', label: 'Tricou — Spate' },
        { src: 'assets/images/grades/uniforme/mesterek_mestere_kopeny_elol.png', label: 'Haină' },
        { src: 'assets/images/grades/uniforme/mesterek_mestere_also_oldal.png', label: 'Pantaloni' },
      ]
    },
  ];

  gmUniforms: Uniform[] = [
    { src: 'assets/images/grades/uniforme/nagymester_teljes.png', label: 'Ținută Completă' },
    { src: 'assets/images/grades/uniforme/nagymester_felso_elol.png', label: 'Tricou — Față' },
    { src: 'assets/images/grades/uniforme/nagymester_felso_hatul.png', label: 'Tricou — Spate' },
    { src: 'assets/images/grades/uniforme/nagymester_kopeny_elol.png', label: 'Haină' },
    { src: 'assets/images/grades/uniforme/nagymester_also_oldal.png', label: 'Pantaloni' },
  ];

  gmIcon = 'assets/images/grades/icons/gm1.png';

  requirements = [
    { title: 'Timp Minim', description: 'Minim 3–6 luni de antrenament constant între fiecare nivel de grad, în funcție de progresul individual al fiecărui student.', icon: 'time' },
    { title: 'Aprobare Instructor', description: 'Avansarea se face exclusiv cu acordul instructorului, bazat pe evaluarea atentă a progresului tehnic și atitudinal.', icon: 'check' },
    { title: 'Vârstă Minimă', description: 'Gradul de Instructor (I1) necesită împlinirea vârstei de 16 ani la momentul examinării oficiale.', icon: 'age' },
    { title: 'Examen Oficial', description: 'Fiecare grad se obține printr-un examen oficial organizat în cadrul Five Elements Wing Tsun Kung-Fu Association.', icon: 'exam' },
    { title: 'Cunoaștere Completă', description: 'Candidatul trebuie să demonstreze stăpânirea completă a conținutului gradului anterior înainte de orice avansare.', icon: 'book' },
    { title: 'Spirit și Atitudine', description: 'Dincolo de aspectul tehnic, sunt evaluate respectul față de tradiție, disciplina și angajamentul față de valorile artei marțiale.', icon: 'spirit' },
  ];

  private observer!: IntersectionObserver;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    document.querySelectorAll('.reveal').forEach(el => this.observer.observe(el));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
