self.onmessage = function(event) {
  var foundPrime, n, primes, start, x;
  foundPrime = false;
  n = 1236940;
  primes = [];
  x = 10000;
  search: while(primes.length < 5) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1) {
      if (n % i == 0) {
        continue search;
      }
    }
    if (x-- < 0) {
      primes.push(n);
      self.postMessage(n);
      x = 10000;
     }
  };
}

