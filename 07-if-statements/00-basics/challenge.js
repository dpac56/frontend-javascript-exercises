module.exports.favoriteNumber = function(favNum, guess){
  if (favNum < guess){
    return "Too high"
  } else if (favNum > guess){
    return "Too low"
  } else {
    return "You got it!"
  }
};

module.exports.checkLock = function(first, second, third, fourth){
  if (first == 3 || first == 5 || first == 7){
    if (second ==2 ){
      if (third >= 5 && third <= 100){
        if (fourth < 9 || fourth > 20) {
          return "correct";
        } else {
          return "incorrect";
        }
      } else {
        return "incorrect";
      }
    } else {
      return "incorrect";
    }
  } else {
    return "incorrect";
  }
};

module.exports.canIGet = function(item , money){
  switch (item){
    case 'MacBook Air':
      if (money < 999){
        return false;
      } else {
        return true;
      }
      break;

    case 'MacBook Pro':
      if (money < 1299){
        return false;
      } else {
        return true;
      }
      break;

    case 'Mac Pro':
      if (money < 2499){
        return false;
      } else {
        return true;
      }
      break;

    case 'Apple Sticker':
      if (money < 1){
        return false;
      } else {
        return true;
      }
      break;

    default:
      return false;
  }
};