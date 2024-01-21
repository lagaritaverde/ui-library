export const randomPhrase = () => {
	const phrases = [
		'Hello there, capitain!',
		'Great wheather today.',
		'Happy, happy, happy',
	]

	console.log('====================================')
	console.log(Math.floor(Math.random() * phrases.length + 0))
	console.log('====================================')

	return phrases[Math.floor(Math.random() * phrases.length + 0)]
}

console.log('====================================')
console.log(randomPhrase())
console.log('====================================')
