self.onmessage = function(event) {
  var foundPrime, n, primes, start;

  foundPrime = false;
  n = 1236940;
  primes = [];

  while (primes.length < 100000) {
    foundPrime = false;
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1) {
      if (n % i == 0) {
        foundPrime = true;
        break;
      }
    }
    if (!foundPrime)
      primes.push(n);
  };

  self.postMessage();
}
