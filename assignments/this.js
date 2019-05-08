/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. in a global or window context, 'this' is referring to the entirety of the page, so there is no need to use this.windowView to call the function
* 2. In implicit binding, you are using 'this.key' where key is within an object, and it will return the corresponding value for the key pairing.
* 3. New binding is when we use the 'this.key' to create a previously nonexistent key:value pair.
* 4. Explicit binding is when we use a .call or .apply to switch out the meaning of 'this' for a specific instance.
*
* write out a code example of each explanation above
*/

// Principle 1
const windowView = function() {
    console.log(`this is the window view`);
}

windowView();

// Principle 2

const willVanOrder= {
    name: 'Will',
    age: '24',
    favorite_sport: 'Ultimate Frisbee',
    intro: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age}. I love playing ${this.favorite_sport}`);
    }
}

willVanOrder.intro();


// Principle 3
function PersonalVoiceMail(speaker) {
    this.intro = `Hi, you've reached `;
    this.speaker = speaker;
    this.ending = `, please leave a message with your name and number and I'll reach you as soon as possible. Thanks!`;
    this.voicemail = function() {
        console.log(this.intro +this.speaker + this.ending);
    }
}

const robin = new PersonalVoiceMail(`Robin`);
robin.voicemail();


// Principle 4
const doug = new PersonalVoiceMail(`Doug`);
doug.voicemail();
doug.voicemail.apply(robin);
