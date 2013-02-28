function startTest(hash) {
  var start, end, worker, startNumber;
  start = new Date().getTime();

  worker = new Worker('workers/' +  hash + '.js');
  worker.onmessage = function (event)  {
    end = new Date().getTime();
    log(end - start, event.data);
  }

  startNumber = 1236940;
  worker.postMessage(startNumber)
}
