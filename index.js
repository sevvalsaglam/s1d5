function isPalindrom(kelime) {
  let kelime1 = kelime.split(' ');
  let kelime2 = kelime1.reverse();
  result = kelime2.join('');
  if (kelime.toLowerCase() === result.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = isPalindrom;
