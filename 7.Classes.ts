class Team {
  private teamName: string; // prevents usage outside the class
  score: number = 0; // public: accessible outside the class
  readonly manager: string; // can only have the default value or be assigned inside the constructor

  constructor(name, manager) {
    this.teamName = name;
    this.manager = manager;
  }

  goal(): number {
    console.log(`Goal.. ${this.teamName}`);
    return this.score++;
  }
}

const redWings = new Team("Red Wings", "Marelo");

redWings.goal();
// redWings.teamName // ERROR: accessing private property
console.log(redWings.score);
// redWings.manager='Shihab' // ERROR
