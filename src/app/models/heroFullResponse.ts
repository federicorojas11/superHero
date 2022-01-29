export interface Heroe {
  id: string;
  name: string;
  powerstats: {
    combat: any;
    durability: any;
    intelligence: any;
    power: any;
    speed: any;
    strength: any;
  };
  biography: {
    aliases: string[];
    alignment: string;
  };
  appearance: {
    race: string;
    gender: string;
    weight: string[];
    height: string[];
    ['hair-color']: string;
    ['eye-color']: string;
  };
  work: {
    occupation: string;
    base: string;
  };
  image: {
    url: string;
  };
}
