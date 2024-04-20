const button = document.querySelector('button');
const span = document.getElementById('pass');

const chars = Array.from({length: 26}, (_, i) => String.fromCharCode(97 + i));
const upperCaseChars = chars.map(char => char.toUpperCase());
const numbers = Array.from({length: 10}, (_, i) => String(i));
const specialChars = ['.', '?', '!', '@', '#', '$', '%', '&', '*', '+', '-', '/', '=', '~', '_', '|'];

function generateRandomPassword(passLength = 8, includeChars = true, includeNumbers = false, includeSpecialChars = false, includeUpperCaseChars = false) {
  let pass = '';
  let allowedCharacters = [];
  
  if (includeChars) allowedCharacters.push(...chars);
  if (includeUpperCaseChars) allowedCharacters.push(...upperCaseChars);
  if (includeNumbers) allowedCharacters.push(...numbers);
  if (includeSpecialChars) allowedCharacters.push(...specialChars);

  if(passLength >= 4){
  pass += chars[Math.floor(Math.random() * chars.length)];
  pass += upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)];
  pass += numbers[Math.floor(Math.random() * numbers.length)];
  pass += specialChars[Math.floor(Math.random() * specialChars.length)];
  
  for (let i = 4; i < passLength; i++) {
    pass += allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)];
  }
  
  pass = pass.split('').sort(() => Math.random() - 0.5).join('');
}else{
  for(let i = 0; i<passLength; i++){
    pass+=allowedCharacters[Math.floor(Math.random()*allowedCharacters.length)]
  }
}


return pass;
}

button.addEventListener('click', function(){
  let generatedPass = generateRandomPassword();
  span.textContent = generatedPass;
})
