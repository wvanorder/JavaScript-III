/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(mattersNot) {
  this.createdAt = mattersNot.createdAt;
  this.name = mattersNot.name;
  this.dimensions = mattersNot.dimensions;
};

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
};

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(statLine) {
  GameObject.call(this, statLine);
  this.healthPoints = statLine.healthPoints;
};
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage!`
};

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(yourPerson) {
  CharacterStats.call(this, yourPerson);
  this.team = yourPerson.team;
  this.weapons = yourPerson.weapons;
  this.language = yourPerson.language;
};

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`
};


/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

/*
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
*/

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  function Villain(badGuy) {
Humanoid.call(this, badGuy);
this.team = `EVIIIIL`;
this.victory = `The world is overtaken by darkness.`;
}

  Villain.prototype = Object.create(Humanoid.prototype);
  Villain.prototype.punch = function(person) {
    if (person.healthPoints > 0) {
      return person.healthPoints -= 2;
    } else {
      return `${person.destroy()} ${this.victory}`;
    };
  };

  const sauron = new Villain({
    createdAt : new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 10,
    },
    healthPoints: 100,
    name: `Sauron`,
    weapons: [
      `Eye`,
      `The Ring`,
    ],
    language: `all of them`,
  });


  function Hero(goodGuy) {
    Humanoid.call(this, goodGuy);
    this.team = `Avengers`;
    this.victory = `The world is saved!`;
      }

      Hero.prototype = Object.create(Humanoid.prototype);
  Hero.prototype.punch = function(person) {
    if (person.healthPoints > 0) {
      return person.healthPoints -= 10;
    } else {
      return `${person.destroy()} ${this.victory}` ;
    };
  }
      const ironMan = new Hero({
        createdAt : new Date(),
        dimensions: {
          length: 1,
          width: 1,
          height: 2,
        },
        healthPoints: 40,
        name: `Iron Man`,
        weapons: [
          `Lasers`,
          `bombs`,
        ],
        language: `English`,
      });


      let fightNow = function(fighter1, fighter2) {
        do{
          console.log(`Sauron takes a hit to the eye, his health is now ${fighter1.punch(fighter2)}`);
          console.log(`Iron Man gets punched in the Ego! his health is now ${fighter2.punch(fighter1)}`);
        }while((fighter1.healthPoints > 0 && fighter2.healthPoints >0))
  
        if (fighter2.healthPoints > fighter1.healthPoints) {
          return console.log(`${fighter2.destroy()}, ${fighter1.victory}`);
        } else {
          return console.log(`${fighter1.destroy()}, ${fighter2.victory}`);
        };
      };
  
      fightNow(sauron, ironMan);
      
