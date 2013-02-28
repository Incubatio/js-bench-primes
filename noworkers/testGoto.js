var foundPrime, n, primes, start, x;
if(typeof(log) !== 'function') { log = console.log; }
start = new Date().getTime();
foundPrime = false;
n = 1236940;
primes = [];
x = 10000;
search: while(primes.length < 5) {
  n += 1;
  for (var i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i == 0) {
      continue search;
    }
  }
  if (x-- < 0) {
    primes.push(n);
    end = new Date().getTime();
    log((end - start) + " ms", " => " + n);
    x = 10000;
   }
};

