import net from 'net'

var server = net.createServer();    
server.on('connection', handleConnection);

server.listen(9000, function() {    
    console.log('Server listening on port %j', 9000);  
});

function handleConnection(conn) {    
    var remoteAddress = conn.remoteAddress + ':' + conn.remotePort;  
    console.log('New picosystem connection from %s', remoteAddress);
    conn.on('data', onConnData);  
    conn.once('close', onConnClose);  
    conn.on('error', onConnError);

    function onConnData(d) {  
        console.log(d.toString());  
    }

    function onConnClose() {  
        console.log('Connection from %s closed', remoteAddress);  
    }

    function onConnError(err) {  
        console.log('Connection %s error: %s', remoteAddress, err.message);  
    }  
}