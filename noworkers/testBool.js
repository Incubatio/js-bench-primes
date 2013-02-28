var foundPrime, n, primes, start, doContinue;

if (typeof(log) !== 'function') log = console.log;

start = new Date().getTime();
foundPrime = false;
n = 1236940;
primes = [];

while (primes.length < 5) {
  doContinue = false;
  n += 1;

  for (var i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i == 0) {
      doContinue = true;
      break;
    }
  }

  if (doContinue) continue;

  primes.push(n);
  end = new Date().getTime();
  log((end - start) + " ms", " => " + n);
};
