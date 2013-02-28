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

Firefox
~~~~~~~

+------------+---------------+-----------------+
| **Target** | **No-Worker** | **With-worker** |
+------------+---------------+-----------------+
| goto       | 1261 ms       |  1110 ms        |
+------------+---------------+-----------------+
| boolean    | 1313 ms       |  1180 ms        |
+------------+---------------+-----------------+
| function   | 1251 ms       |  2978 ms        |
+------------+---------------+-----------------+


Chrome
~~~~~~

+------------+---------------+-----------------+
| **Target** | **No-Worker** | **With-worker** |
+------------+---------------+-----------------+
| goto       | 1649 ms       | 2157 ms         |
+------------+---------------+-----------------+
| boolean    | 1611 ms       | 2024 ms         |
+------------+---------------+-----------------+
| function   | 2081 ms       | 2035 ms         |
+------------+---------------+-----------------+


Node
~~~~~

+------------+---------------+
| **Target** | **No-Worker** |
+------------+---------------+
| goto       | 1640 ms       |
+------------+---------------+
| boolean    | 1851 ms       |
+------------+---------------+
| function   | 1997 ms       |
+------------+---------------+
