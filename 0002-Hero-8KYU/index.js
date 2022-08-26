//! https://www.codewars.com/kata/59ca8246d751df55cc00014c

//! A hero is on his way to the castle to complete his mission.
//! However, he's been told that the castle is surrounded with
//! a couple of powerful dragons! each dragon takes 2 bullets
//! to be defeated, our hero has no idea how many bullets he
//! should carry.. Assuming he's gonna grab a specific given
//! number of bullets and move forward to fight another specific
//! given number of dragons, will he survive?

//! Return True if yes, False otherwise :)

// let dragonCount = prompt("How many dragon ? ");
// let bulletCount = prompt("How many bullet ? ");

const hero = (bulletCount, dragonCount) => {
  if (bulletCount / dragonCount >= 2) {
    return true;
  } else {
    return false;
  }
};

console.log(hero(10, 5));
