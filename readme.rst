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
The cases benched are:

- goto (``test: [...]; continue test``)
- boolean (``doContinue = false; if(doContinue) continue``)
- coffeescript "do ->" that use js functionnal paradigm advantage

*NOTE: Please feel free to Correct, Add, Comment the tests.*



RUN TEST
--------

Clone repo
~~~~~~~~~~
With browser simply open of the following:

- worker.html
- noworker.html

With node:

``cd noworker``

``node scriptName.js``



gh-page
~~~~~~

- http://incubatio.github.com/js-bench-primes/noworker.html
- http://incubatio.github.com/js-bench-primes/worker.html




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

+----------+-----------+------------+
| target   | no-worker | with-worker|
+----------+-----------+------------+
| node     | 0746 ms   |            |
| firefox  | 1046 ms   |  571ms     |
| chrome   | 1089 ms   |  779ms     |
+----------+-----------+------------+


using simple boolean aka testBool:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

+----------+-----------+------------+
| target   | no-worker | with-worker|
+----------+-----------+------------+
| node     | 08282 ms  |            |
| firefox  | 11277 ms  | 6058 ms    |
| chrome   | 12850 ms  | 8840 ms    |
+----------+-----------+------------+


using coffeescript do (functions):
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

+----------+-----------+------------+
| target   | no-worker | with-worker|
+----------+---------+--------------+
| node     | 3376 ms |              |
| firefox  | 2225 ms |  0794 ms     |
| chrome   | 3122 ms |  2990 ms     |
+----------+---------+--------------+
