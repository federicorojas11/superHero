import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  heroesSeleccionados = [
    {
      id: '128',
      name: 'Bolt',
      powerstats: {
        intelligence: 'null',
        strength: 'null',
        speed: 'null',
        durability: 'null',
        power: 'null',
        combat: 'null',
      },
      biography: {
        'full-name': '',
        'alter-egos': 'No alter egos found.',
        aliases: ['-'],
        'place-of-birth': '-',
        'first-appearance': '-',
        publisher: 'Marvel Comics',
        alignment: 'good',
      },
      appearance: {
        gender: 'Male',
        race: 'null',
        height: ['-', '0 cm'],
        weight: ['- lb', '0 kg'],
        'eye-color': '-',
        'hair-color': '-',
      },
      work: {
        occupation: '-',
        base: '-',
      },
      connections: {
        'group-affiliation': '-',
        relatives: '-',
      },
      image: {
        url: 'https://www.superherodb.com/pictures2/portraits/10/100/1340.jpg',
      },
    },
    {
      id: '267',
      name: 'Flash IV',
      powerstats: {
        intelligence: '63',
        strength: '10',
        speed: '100',
        durability: '32',
        power: '100',
        combat: '48',
      },
      biography: {
        'full-name': 'Bartholomew Allen II',
        'alter-egos': 'Impulse, Kid Flash II',
        aliases: ['Impulse', 'Kid Flash II'],
        'place-of-birth': '-',
        'first-appearance':
          '(as Impulse) Flash v.2 #91 (June 1994)* (as Kid Flash) Teen Titans v.3 #4 (December 2003)',
        publisher: 'Impulse',
        alignment: 'good',
      },
      appearance: {
        gender: 'Male',
        race: 'Human',
        height: ["5'2", '157 cm'],
        weight: ['115 lb', '52 kg'],
        'eye-color': 'Yellow',
        'hair-color': 'Auburn',
      },
      work: {
        occupation: 'Police trainee',
        base: 'Los Angeles, California (previously Manchester, Alabama, briefly Denver, Colorado, then Keystone City, Kansas)',
      },
      connections: {
        'group-affiliation':
          'Flash Family, Teen Titans, Legion of Super-Heroes; formerly Young Justice',
        relatives:
          'Barry Allen (Flash II, grandfather), Iris West Allen (grandmother), Don Allen (father), Meloni Thawne (mother), President Thawne (grandfather), Dawn Allen (aunt), Jenni Ognats (cousin), Thaddeus Thawne (clone), Owen Mercer (half-brother), Max Crandall (guardian)',
      },
      image: {
        url: 'https://www.superherodb.com/pictures2/portraits/10/100/893.jpg',
      },
    },
    {
      id: '388',
      name: 'Kilowog',
      powerstats: {
        intelligence: '81',
        strength: '90',
        speed: '53',
        durability: '42',
        power: '100',
        combat: '80',
      },
      biography: {
        'full-name': '',
        'alter-egos': 'No alter egos found.',
        aliases: [
          'Kilo Wog',
          'Green Lantern 674.1',
          'Dark Lantern',
          'The Green Lantern drill sergeant',
          '"Poozer"',
          'Lantern',
        ],
        'place-of-birth': 'Bolovax Vik',
        'first-appearance': 'Green Lantern Corps #201 (June, 1986)',
        publisher: 'DC Comics',
        alignment: 'good',
      },
      appearance: {
        gender: 'Male',
        race: 'Bolovaxian',
        height: ["7'8", '234 cm'],
        weight: ['720 lb', '324 kg'],
        'eye-color': 'Red',
        'hair-color': 'No Hair',
      },
      work: {
        occupation: '-',
        base: 'Oa, formerly Earth, Bolovax Vik',
      },
      connections: {
        'group-affiliation':
          'Green Lantern Corps; formerly New Guardians, Justice League International',
        relatives: '-',
      },
      image: {
        url: 'https://www.superherodb.com/pictures2/portraits/10/100/1428.jpg',
      },
    },
  ];
  villanosSeleccionados = [
    {
      id: '58',
      name: 'Azrael',
      powerstats: {
        intelligence: '63',
        strength: '18',
        speed: '17',
        durability: '20',
        power: '35',
        combat: '80',
      },
      biography: {
        'full-name': 'Michael Washington Lane',
        'alter-egos': 'No alter egos found.',
        aliases: ['Bat-Devil; Bat-Ghost'],
        'place-of-birth': 'Gotham City',
        'first-appearance': 'Batman #672 (February, 2008)',
        publisher: 'DC Comics',
        alignment: 'good',
      },
      appearance: {
        gender: 'Male',
        race: 'Human',
        height: ['-', '0 cm'],
        weight: ['- lb', '0 kg'],
        'eye-color': 'Brown',
        'hair-color': 'Black',
      },
      work: {
        occupation: 'Former Police Officer, vigilante',
        base: '-',
      },
      connections: {
        'group-affiliation':
          'Order of St. Dumas; formerly Gotham City Police Department; Three Ghosts of Batman',
        relatives:
          'Mitchell Lane (father; deceased), Barbara Lane (mother; deceased), Marion Lane (brother; deceased), Gwendolyn Lane (sister; deceased), Chante Coles (wife; deceased), Henry Mitchell Lane (son; deceased), Jenny Lane (Sister-in-law)',
      },
      image: {
        url: 'https://www.superherodb.com/pictures2/portraits/10/100/1532.jpg',
      },
    },
    {
      id: '99',
      name: 'Black Cat',
      powerstats: {
        intelligence: '75',
        strength: '16',
        speed: '33',
        durability: '10',
        power: '23',
        combat: '70',
      },
      biography: {
        'full-name': 'Felicia Hardy',
        'alter-egos': 'No alter egos found.',
        aliases: ['Felicity Harmon'],
        'place-of-birth': 'Queens, New York',
        'first-appearance': 'Amazing Spider-Man #194 (July, 1979)',
        publisher: 'Marvel Comics',
        alignment: 'good',
      },
      appearance: {
        gender: 'Female',
        race: 'Human',
        height: ["5'10", '178 cm'],
        weight: ['120 lb', '54 kg'],
        'eye-color': 'Green',
        'hair-color': 'Blond',
      },
      work: {
        occupation:
          "Cat burglar; Private investigator, founder of Cat's Eye Investigations.",
        base: '-',
      },
      connections: {
        'group-affiliation': 'Formerly Heroes for Hire',
        relatives: 'Walter Hardy (father, deceased), Lydia Hardy (mother)',
      },
      image: {
        url: 'https://www.superherodb.com/pictures2/portraits/10/100/32.jpg',
      },
    },
    {
      id: '132',
      name: 'Booster Gold',
      powerstats: {
        intelligence: '69',
        strength: '85',
        speed: '42',
        durability: '70',
        power: '100',
        combat: '40',
      },
      biography: {
        'full-name': 'Michael Jon Carter',
        'alter-egos': 'No alter egos found.',
        aliases: [
          'Bharjwarj',
          'Bloodspot',
          'Boosteroo',
          'Booster',
          'the Boy Wonder',
          'Buster',
          'Deathstroke',
          'Goldstar',
          "Greatest Hero You've Never Heard Of",
          'Guardian of the Multiverse',
          'Jesus Alvarez',
          'Kid',
          'Killer Moth',
          'The King',
          'Loser Gold',
          'Major Idiot',
          'Man of Gold',
          'Michael Carter',
          'Blac',
        ],
        'place-of-birth': 'Gotham City, 25th Century',
        'first-appearance': 'Booster Gold #1',
        publisher: 'DC Comics',
        alignment: 'good',
      },
      appearance: {
        gender: 'Male',
        race: 'Human',
        height: ["6'5", '196 cm'],
        weight: ['215 lb', '97 kg'],
        'eye-color': 'Blue',
        'hair-color': 'Blond',
      },
      work: {
        occupation:
          'Superhero, Founder, C.E.O & Chairman of Booster Gold International',
        base: 'Metropolis, Earth, 21st Century, formerly Gotham City, 25th Century',
      },
      connections: {
        'group-affiliation':
          'Justice League International, Time Masters; formerly Conglomerate, Extreme Justice, Super Buddies',
        relatives:
          'Jonar Carter (father), Ellen Carter (mother, deceased), Michelle Carter (aka Goldstar) (twin sister), Rip Hunter (son) · Rani (adopted daughter), Daniel Carter (21st century ancestor), Rose Levin (ancestor)',
      },
      image: {
        url: 'https://www.superherodb.com/pictures2/portraits/10/100/647.jpg',
      },
    },
  ];
}
