self.onmessage = function(event) {
  var foundPrime, n, primes, start, sqrtn;

  foundPrime = false;
  n = 1236940;
  primes = [];

  while (primes.length < 100000) {
    (function() {
      n += 1;
      sqrtn = Math.sqrt(n);

      for (var i = 2; i <= sqrtn ; i += 1) {
        if (n % i === 0) {
          return;
        }
      }

      primes.push(n);
    })();
  }

  self.postMessage(0);
}
