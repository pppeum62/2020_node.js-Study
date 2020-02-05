var a = [ 'a', 'b', 'c', 'x', 'y', 'z' ];
var result = '';

for(var i in a) {
    result += 'index : ' + i + ', value : ' + a[i] + '\n';
}

console.log(result);