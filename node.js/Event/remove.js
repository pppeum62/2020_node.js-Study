var EventEmitter = require('events');
var custom_event = new EventEmitter();

custom_event.on('call', function() {
    console.log('이벤트 콜');
});

custom_event.removeAllListeners();

custom_event.emit('call');      // 리스너를 삭제했기 때문에 콘솔에 아무것도 찍히지 않음