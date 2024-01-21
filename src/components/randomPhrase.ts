export const randomPhrase = () => {
  const phrases = [
    'Hello there, capitain!',
    'Great wheather today.',
    'Happy, happy, happy',
  ]

  return phrases[Math.floor(Math.random() * phrases.length + 0)]
}
