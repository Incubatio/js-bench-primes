var foundPrime, n, primes, start, x;
if(typeof(log) !== 'function') log = console.log;
start = new Date().getTime();
foundPrime = false;
n = 1236940;
primes = [];
x = 10000;

while (primes.length < 5) {
  (function() {
    var end, i, _i, _ref;
    n += 1;
    for (i = _i = 2, _ref = Math.sqrt(n); 2 <= _ref ? _i <= _ref : _i >= _ref; i = 2 <= _ref ? ++_i : --_i) {
      if (n % i === 0) {
        return;
      }
    }
    if (x-- < 0) {
      primes.push(n);
      end = new Date().getTime();
      log((end - start) + " ms", " => " + n);
      return x = 10000;
    }
  })();
}
