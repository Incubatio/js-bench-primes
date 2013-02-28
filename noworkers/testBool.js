var foundPrime, n, primes, start;

if (typeof(log) !== 'function') log = console.log;

start = new Date().getTime();
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

  if (foundPrime) continue;

  primes.push(n);
};

end = new Date().getTime();
log((end - start) + " ms");
