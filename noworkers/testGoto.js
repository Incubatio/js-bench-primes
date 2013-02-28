var foundPrime, n, primes, start, sqrtn;

if (typeof(log) !== 'function') { log = console.log; }

start = new Date().getTime();
foundPrime = false;
n = 1236940;
primes = [];

search: while(primes.length < 100000) {
  n += 1;
  sqrtn = Math.sqrt(n);

  for (var i = 2; i <= sqrtn ; i += 1) {
    if (n % i == 0) {
      continue search;
    }
  }

  primes.push(n);
};

end = new Date().getTime();
log((end - start) + " ms");
