self.onmessage = function(event) {
  var foundPrime, n, primes, start, x, doContinue;
  foundPrime = false;
  n = 1236940;
  primes = [];
  x = 10000;
  search: while(primes.length < 5) {
    doContinue = false
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1) {
      if (n % i == 0) {
        doContinue = true
      }
    }
    if(doContinue) continue;
    if (x-- < 0) {
      primes.push(n);
      self.postMessage(n);
      x = 10000;
     }
  };
}
