self.onmessage = function(event) {
  var foundPrime, n, primes, start, sqrtn, i, search;

  foundPrime = false;
  n = 1236940;
  primes = [];

  search = function() {
    n++;

    sqrtn = Math.sqrt(n);
    for (i = 2; i <= sqrtn; i++) {
      if (n % i === 0) {
        return;
      }
    }

    primes.push(n);
  }

  while (primes.length < 100000) {
    search();
  }

  self.postMessage(0);
}
