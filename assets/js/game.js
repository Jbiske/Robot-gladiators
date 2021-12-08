var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var palyerMoney= 10;
// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemy1 = "Roborto";
var enemy2="Amy Android";
var enemy3="Robot Man";
var enemyHealth = 50;
var enemyAttack = 12;
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(enemyNames.length);


// function to start a new game
var startGame = function() {
   // reset player stats
   playerHealth = 100;
   playerAttack = 10;
   playerMoney = 10;

  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyName = enemyNames[i];

      enemyHealth = 50;

      fight(pickedEnemyName);
    }
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  endGame();
};
// Function that will end the game
var endGame = function() {
if (playerHealth>0 ){  window.alert("The game has now ended. Let's see how you did!");
}
else { window.alert("You've lost your robot in battle.");

}
// ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
  // restart the game
  startGame();
} 
else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
};



var fight = function(enemyName) {
  window.alert("Welcome to Robot Gladiators!");;
  
  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
   enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );
  // check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } 
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack;
  // Log a resulting message to the console so we know that it worked.
console.log(enemyName +" attacked" + playerName +". " + playerName +" now has " + playerHealth + " Health remaining.")
// check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } 
  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }
  var promptFight = window.prompt("Would You like to FIGHT or SKIP this battle? enter 'FIGHT' or 'SKIP' to choose.");
  // if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    // Confirm the skip
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. A wise decision!");
        playerMoney = playerMoney - 2;
         }

   // if no
    else {
      fight();
             }
            }
        
  
   else {
    window.alert("You need to choose a valid option. Try again!");
  }
};


for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
  }
  
// game status
// win
//   *fights all enemy-robots
//   *defeat each enemy-robots
// "Lose 0 players health is zero or less"


//   fight();
// start the game when the page loads
startGame();


