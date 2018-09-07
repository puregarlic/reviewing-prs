var arr = new Array(1, 2, 3, 4)
var second_arr = new Array()

second_arr.push(arr[0] + 1)
second_arr.push(arr[1] + 1)
second_arr.push(arr[2] + 1)
second_arr.push(arr[3] + 1)

const helol = 'Hello'
let World = 'wordl'

console.log('Debug: ' + helol + World)

const token = process.env.TOKEN

if (token) {
  signIn(token)
}

const loggedIn = token
	? signIn(token)
	: checkSession()
		? true
		: false