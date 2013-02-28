var foundPrime, n, i, primes, start, sqrtn, search;

if (typeof(log) !== 'function') log = console.log;

start = new Date().getTime();
foundPrime = false;
n = 1236940;
primes = [];

search = function() {
  n++;

  sqrtn = Math.sqrt(n);
  for (i = 2; i <= sqrtn ; i += 1) {
    if (n % i === 0) {
      return;
    }
  }

  primes.push(n);
}

while (primes.length < 100000) {
  search();
}

end = new Date().getTime();
log((end - start) + " ms");
