function SoccerPlayer() { 
    this.position = "Forward";
  }
  var VanPersie = new SoccerPlayer();
  console.log(VanPersie.position);

function SoccerPlayer(name, position) {
    this.name = name;
    this.position = position;
    this.whatIsYourName = function() {
        return "My name is " + this.name;
    };
    this.whatIsYourPosition = function() {
        return "My position is " + this.position;
    };
}

var player = new SoccerPlayer("Park Ji Sung", "Wing Forward");
console.log(player.whatIsYourName());
console.log(player.whatIsYourPosition());

console.log(player.constructor);

var player2 = new player.constructor("Koo Ja Cheol");
console.log(player2.name);