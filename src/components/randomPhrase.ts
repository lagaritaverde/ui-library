export const randomPhrase = () => {
  const phrases = ['Hello there, capitain!']

  return phrases[Math.floor(Math.random() * phrases.length + 0)]
}
