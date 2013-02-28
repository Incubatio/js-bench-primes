self.onmessage = function(event) {
  var foundPrime, n, primes, start, doContinue;

  foundPrime = false;
  n = 1236940;
  primes = [];

  search: while(primes.length < 100) {
    doContinue = false;
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1) {
      if (n % i == 0) {
        doContinue = true;
        break;
      }
    }
    if (doContinue) continue;

    primes.push(n);
    self.postMessage(n);
  };
}
