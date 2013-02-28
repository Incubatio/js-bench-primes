=========================
Prime Number js Benchmark
=========================



PROBLEM
-------

Coffeescript does not support label statement on continue break, more known as "goto"
When I ported my simple-worker example from gamejs to gamecs I noted a consequent loss in performances.



DESCRIPTION
-----------

The code benched is the computation of the first five number found out of 1236940.
Browser are tested with and without web workers.



RUN TEST
--------

Clone repo
~~~~~~~~~~
With browser simply open of the following:
- worker.html
- noworker.html

With node:
`cd noworker`
`node scriptName.js`

NOTE: Please feel free to Correct, Add, Comment the tests.


gh-page
~~~~~~
http://incubatio.github.com/js-bench-primes/noworker.html
http://incubatio.github.com/js-bench-primes/worker.html




TEST ENVIRONMENT
----------------

Mac Os 10.7.5

- Nodejs v0.8.14
- Firefox 19.0 
- Chrome 23
- Lynx 2.8.7 (just kiddin ^^)




[SPOILER ALERT] TEST RESULTS
-----------------------------

js label statement aka testGoto.js: 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- node    746  ms
- firefox 1046 ms  inWorker: 571ms
- chrome  1089 ms  inWorker: 779ms


using simple boolean aka testBool:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- node     8282 ms
- firefox  11277 ms inWorker: 6058ms
- chrome   12850 ms inWorker: 8840ms


using coffeescript do (functions):
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- node    3376 ms
- firefox 2225 ms   inWorker: 794ms
- chrome  3122 ms   inWorker: 2990ms
