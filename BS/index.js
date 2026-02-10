import v8 from 'v8';
const heapStats = v8.getHeapStatistics();

console.log('Heap size limit',(heapStats.heap_size_limit/1024/1024).toFixed(2),'MB');
console.log('Total Heap size',(heapStats.total_heap_size/1024/1024).toFixed(2),'MB');
console.log('Used Heap size',(heapStats.used_heap_size/1024/1024).toFixed(2),'MB');