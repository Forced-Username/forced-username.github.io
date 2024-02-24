/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"]
  .forEach(name =>
    name.toLowerCase().startsWith('j')
      ? byeSpeaker.speak(name)
      : helloSpeaker.speak(name)
  )
