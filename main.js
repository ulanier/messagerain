const form = document.querySelector('#form')

const token = "8157455952:AAECDYkjNQlqBVOWBmUTlHTR0tcic4mMKSA"

const chatId = "5454119535"


async function sendmessage(mess) {
	let responce = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			chat_id: chatId,
			text: mess
		})
	})
	
	if (responce.ok){
		document.querySelector('#responce').innerHTML = "message have been sent"
	}else{
		document.querySelector('#responce').innerHTML = "message didnt send"
	}

	setTimeout(() => {
		document.querySelector('#responce').innerHTML = "send an anonymous message"
	}, 3000);

}

form.addEventListener("submit", (e) => {
	e.preventDefault()
	var name = document.querySelector('#name').value
	var message = document.querySelector('#message').value

	if (name == ""){
		name = "anonymous"
	}
	if (message == ""){
		document.querySelector('#message').placeholder = "a message is required"
	}

	var my_text = `From ${name}: ${message}`

	if (name != "" & message !=""){
		sendmessage(my_text)
	}
})


