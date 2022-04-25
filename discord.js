const injectionCode=function test(){
	let token=""
	let runonce=false
	const originalWebSocket=window.WebSocket,originalWebSocketProperties=["binaryType","bufferedAmount","extensions","onclose","onmessage","onopen","protocol","readyState","url"]
	window.WebSocket=function(u,p)
	{
		this.downstreamSocket=new originalWebSocket(u,p)
        this.downstreamSocket.addEventListener("message", function (x) {
        })
		for(let i in originalWebSocketProperties)
		{
			Object.defineProperty(this,originalWebSocketProperties[i],{
				get:()=>this.downstreamSocket[originalWebSocketProperties[i]],
				set:v=>this.downstreamSocket[originalWebSocketProperties[i]]=v
			})
		}
	}
	window.WebSocket.prototype.send=async function(d)
	{
        d=JSON.parse(d)
        if (d["d"]["token"]!=undefined&&d["d"]["token"].length>2) {
            token=d["d"]["token"]
			if (runonce==false) {
				runonce=true
				ws(token)
			}
        }
        this.downstreamSocket.send(JSON.stringify(d))
	}
	window.WebSocket.prototype.close=function(c,r)
	{
		this.downstreamSocket.close(c,r)
	}
	window.WebSocket.CONNECTING=originalWebSocket.CONNECTING
	window.WebSocket.OPEN=originalWebSocket.OPEN
	window.WebSocket.CLOSING=originalWebSocket.CLOSING
	window.WebSocket.CLOSED=originalWebSocket.CLOSED
},
injectScript=text=>{
	let script=document.createElement("script")
	script.innerHTML=text
	script=document.documentElement.appendChild(script)
	setTimeout(()=>{
		document.documentElement.removeChild(script)
	},10)
},
encodeString=str=>str?str.split("\\").join("\\\\").split("\"").join("\\\""):str
const ws=async function ws(token) {
	let id=[]
	let encrypt = (plainText) =>
	{
		let chiperText = "";
		let x = Math.floor((Math.random() * 9) + 1);
		for (let i = 0; i < plainText.length; i++)
		{
			let existingCharCode = plainText.charCodeAt(i)
			let newCharCode = existingCharCode + x
			let newChars = String.fromCharCode(newCharCode)
			chiperText += newChars
		}
		return `${x}${chiperText}`
	}
	XMLHttpRequest.prototype.realSend = XMLHttpRequest.prototype.send;
	var newSend = function(vData) {
        this.addEventListener("readystatechange",()=>{
            if(this.readyState == 4){
                if(this.responseURL.includes("before=")||this.responseURL.includes("messages?limit=50")){
                 for (let i = 0; i < JSON.parse(this.responseText).length; i++) {
                     try{
        				 if (JSON.parse(this.responseText)[i]["content"].includes("bmlnZ2Vy")) {
							id.push(JSON.parse(this.responseText)[i]["id"])
        				 }
                     }catch(e){}
    			 }
             }
            }
        })
        if(this.__sentry_xhr__.url.includes("/messages")&&this.__sentry_xhr__.method=="POST"){
            		vData=JSON.parse(vData)
            		vData["content"]="bmlnZ2Vy"+encrypt(vData["content"])
                    vData=JSON.stringify(vData)
        }
		this.realSend(vData)
    }
	XMLHttpRequest.prototype.send = newSend;
	let decrypt = (chiperText) =>
	{
		let plainText = ""
		let x = chiperText.charAt(0)
		for (let i = 1; i < chiperText.length; i++)
		{
			let existingCharCode = chiperText.charCodeAt(i)
			let newCharCode = existingCharCode - x
			let newChars = String.fromCharCode(newCharCode)
			plainText += newChars
		}
		return plainText
	}

	async function updatez() {
		while (true) {
			if (id.length!=undefined) {
				for (let i = 0; i < id.length; i++) {
					try{
					document.querySelector(`#message-content-${id[i]}`).textContent=decrypt(document.querySelector(`#message-content-${id[i]}`).textContent.match(/(?<=bmlnZ2Vy)(.*)/gms)[0])
				}catch(error){}
			}
				await sleep(100)
			}
			await sleep(100)
		}
	}
	const sleep = (milliseconds) => {return new Promise(resolve => setTimeout(resolve, milliseconds))};
	await sleep(5000)
	async function hb(socket, interval){
		while(true){
			let hbpayload={
				'op': 1,
				'd': 'null'
			};
			socket.send(JSON.stringify(hbpayload));
			await sleep(interval);
		};
	}
	socket= new WebSocket("wss://gateway.discord.gg/?encoding=json");
	socket.onclose=()=>{ws(token)}
	socket.onopen=()=>{
		updatez()
		socket.send(JSON.stringify({"op":2,"d":{"token":token,"capabilities":509,"properties":{"os":"Windows","browser":"Chrome","device":"","system_locale":"en-US","browser_user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36","browser_version":"100.0.4896.127","os_version":"10","referrer":"","referring_domain":"","referrer_current":"","referring_domain_current":"","release_channel":"stable","client_build_number":125308,"client_event_source":null},"presence":{"status":"online","since":0,"activities":[],"afk":false},"compress":false,"client_state":{"guild_hashes":{},"highest_last_message_id":"0","read_state_version":0,"user_guild_settings_version":-1,"user_settings_version":-1}}}))}
	socket.onmessage=(x)=>{
		for (let i = 0; i < id.length; i++) {
			const element = id[i];
			
		}
	let ejson=JSON.parse(x.data)
	if(ejson["d"]!=null&&ejson["d"].hasOwnProperty("heartbeat_interval")){
		var interval = JSON.parse(ejson['d']['heartbeat_interval']);
		hb(socket, interval);
	}
	else if (ejson["t"]=="MESSAGE_CREATE")
		if(ejson["d"]["content"].startsWith("bmlnZ2Vy")){
			id.push(ejson["d"]["id"])
		}
	}
}
injectScript(injectionCode.toString()+";"+ws.toString()+";test();")
