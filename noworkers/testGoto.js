var foundPrime, n, i, primes, start, sqrtn;

if (typeof(log) !== 'function') log = console.log;

start = new Date().getTime();
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

end = new Date().getTime();
log((end - start) + " ms");
