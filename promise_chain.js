const methodThatReturnsAPromise = id =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(id)
      resolve(id)
    }, 2000)
  })


[1, 2, 3, 'fuck', 5].reduce((previousPromise, nextID) => {
  return previousPromise.then(() => {
    return methodThatReturnsAPromise(nextID)
  })
}, Promise.resolve())
