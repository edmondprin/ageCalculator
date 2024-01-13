function AgeCalculator(birthDate) {
  const now = new Date();
  age = new Date(birthDate)
  yourAge = now.getTime() - age.getTime();
  console.log(yourAge);
  let years = Math.floor(yourAge / (1000 * 60 * 60 * 24 * 365))
  let months = Math.floor(yourAge/ (1000 * 60 * 60 * 24 * 30) % 12);
  // let days = Math.floor(yourAge / (1000 * 60 * 60 * 24));
  // let hours = Math.floor(yourAge / (60 * 60 * 1000) % 24);
  // let min = Math.floor((yourAge / 1000 / 60) % 60);
  // let sec = Math.floor((yourAge / 1000) % 60);

  if (years >= 1 ) {
    return `You are ${years} years old`;
  } else {
    return `You are ${months} months old`;
  }
}

console.log(AgeCalculator("16 May 2023"));
