self.onmessage = function(event) {
  var foundPrime, n, primes, start, sqrtn, i;

  foundPrime = false;
  n = 1236940;
  primes = [];

  search: while(primes.length < 100000) {
    n++;
    sqrtn = Math.sqrt(n);

    for (i = 2; i <= sqrtn; i++) {
      if (n % i === 0) {
        continue search;
      }
    }

    primes.push(n);
  };

  self.postMessage(0);
}
