=========================
Prime Number js Benchmark
=========================


PROBLEM
-------

Coffeescript does not support label statement on continue or break, more widely known as "goto".
A first issue could concern performance, some operation execution could have some consequent change.

DESCRIPTION
-----------

At the moment we just have benched the computation of finding 10 000 prime out of 1236940.
If there are other tests that could test our "problematic" more properly, I invite you to contribute :). 

Node is tested.
Browser are tested with and without web workers.
The cases benched are:

- goto (``test: [...] if(someCondition) continue test``)
- boolean (``doContinue = false; if(someCondition) doContinue = true; if(doContinue) continue``)
- function (``test = function() { if(someConditions) return }``)

*Note: CoffeeScript "do => " is not an alternative to advise as long as it allocate a new anonymous 
function which is costfull in a looping context.*




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

TODO
~~~~

- Repeat test x time to make result more accurate


Contributors
------------

Álvaro Cuesta
