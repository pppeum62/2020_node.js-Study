function Man() {
    this.name = "Anonymous";
    this.gender = "Man";
    this.Run = function() {
        return this.name + " is running!";
    }
    this.Sleep = function() {
        return this.name + " is sleeping!";
    }
}

function SoccerPlayer() {
    this.base = new Man();
    this.name = "Anonymous Soccer Player";
    this.Run = function() {
        return this.base.Run();
    }
    this.Pass = function() {
        return this.name + " is passing to other player!";
    }
}

SoccerPlayer.prototype = new Man();
var player = new SoccerPlayer();

console.log(player.name);
console.log(player.gender);
console.log(player.Run());
console.log(player.Pass());
console.log(player.Pass());
console.log(player.Sleep());