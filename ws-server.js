var WebSocketServer = require('ws').Server;

var wsServer = new WebSocketServer({port: 8080});

var broadcast = function(data)
{
	var clients = wsServer.clients;
	for (var i in clients)
	{
		clients[i].send(data);
	}
};

wsServer.on('connection', function(ws)
{
	ws.on('message', function(msg)
		{
			console.log(msg);

			broadcast(msg);
		});

	ws.send('something');
});