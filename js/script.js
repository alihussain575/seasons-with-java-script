let arg = prompt("In which month were you born?");
switch (arg) {
  case 'january':
  case 'february':
  case 'march':  
    alert( 'you are born in winter' );
    break;

  case 'apirl':
  case 'may':
  case 'june':    
    alert( 'you are born in spring' );
    break;

  case 'july':
  case 'august':
  case 'september':
    alert( 'you are born in summer' );
    break;

  case 'october':
  case 'november':
  case 'decembr': 
  alert('you are born in autumn') 

  default:
  alert('wrong month name');
}
