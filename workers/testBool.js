self.onmessage = function(event) {
  var foundPrime, n, primes, start, sqrtn, i;

  foundPrime = false;
  n = 1236940;
  primes = [];

  while (primes.length < 100000) {
    foundPrime = false;
    n++;
    sqrtn = Math.sqrt(n);
    for (i = 2; i <= sqrtn; i++) {
      if (n % i === 0) {
        foundPrime = true;
        break;
      }
    }
    if (!foundPrime)
      primes.push(n);
  };

  self.postMessage(0);
}
