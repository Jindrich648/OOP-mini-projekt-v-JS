// Definice třídy Animal
export class Animal {
  constructor(name, species, continents) {
    this.name = name
    this.species = species
    this.continents = continents
  }

  // Vrátí textový popis zvířete
  description() {
    return `Zvíře: ${this.name}, druh: ${this.species}`
  }

  // Vrátí informace o výskytu zvířete
  getContinents() {
    return `${this.name} žije na: ${this.continents.join(", ")}`
  }
}

// Spouštěcí kód 
const animals = [
  new Animal("Lev", "Šelma", ["Afrika", "Asie"]),
  new Animal("Tučňák", "Pták", ["Antarktida", "Jižní Amerika"]),
  new Animal("Medvěd hnědý", "Savec", ["Evropa", "Asie", "Severní Amerika"]),
  new Animal("Klokan", "Vačnatec", ["Austrálie"]),
];

// Výpis všech zvířat do konzole
animals.forEach((animal) => {
  console.log(animal.description());
  console.log(animal.getContinents());
  console.log("------------");
});