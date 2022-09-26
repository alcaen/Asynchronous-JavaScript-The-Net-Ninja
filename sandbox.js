// VIDEO 1

// console.log(1);
// console.log(2);

// setTimeout(() => {
// 	console.log("Callback fired");
// }, 2000);

// console.log(3);
// console.log(4);

// VIDEO 2

// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
// 	// console.log(request, request.readyState);
// 	if (request.readyState === 4) {
// 		console.log(request.responseText);
// 	}
// });

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');

// request.send()

// VIDEO 3
// const request = new XMLHttpRequest();

// request.addEventListener("readystatechange", () => {
// 	if (request.readyState === 4 && request.status === 200) {
// 		// if its done && its ok
// 		console.log(request.responseText);
// 	} else if (request.readyState === 4) {
// 		// if its done but not ok
// 		console.log("could not fetch the data");
// 	}
// });

// request.open("GET", "https://jsonplaceholder.typicode.com/todos/");

// request.send();

// VIDEO 4 && VIDEO 5

// const getTodos = (callback) => {
// 	const request = new XMLHttpRequest();

// 	request.addEventListener("readystatechange", () => {
// 		if (request.readyState === 4 && request.status === 200) {
// 			const data = JSON.parse(request.responseText) // Takes a JSON string and converts it into javascript objects.
// 			callback(undefined, data);
// 		} else if (request.readyState === 4) {
// 			callback('could not fetch data', undefined);
// 		}
// 	});

// 	request.open("GET", "https://jsonplaceholder.typicode.com/todos/");

// 	request.send();
// }

// console.log(1);
// console.log(2);

// getTodos((err, data) => {
// 	console.log('callback fired')
// 	// console.log(err, data);
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(data);
// 	}
// });

// console.log(3);
// console.log(4);

//VIDEO 6
// const getTodos = (resource, callback) => {
// 	const request = new XMLHttpRequest();

// 	request.addEventListener("readystatechange", () => {
// 		if (request.readyState === 4 && request.status === 200) {
// 			const data = JSON.parse(request.responseText) // Takes a JSON string and converts it into javascript objects.
// 			callback(undefined, data);
// 		} else if (request.readyState === 4) {
// 			callback('could not fetch data', undefined);
// 		}
// 	});

// 	request.open("GET", resource);

// 	request.send();
// }

// getTodos('/Asynchronous-JavaScript/luigi.json', (err, data) => {
// 	console.log(data);
// 	getTodos('/Asynchronous-JavaScript/mario.json', (err, data) => {
// 		console.log(data);
// 		getTodos('/Asynchronous-JavaScript/shaun.json', (err, data) => {
// 			console.log(data);
// 		});
// 	});
// }); //CALLBACK HELL => Nested callbacks

// VIDEO 7
// const getTodos = (resource) => {
// 	return new Promise((resolve, reject) => {
// 		// takes two arguments instead of the callback resolved and rejected
// 		const request = new XMLHttpRequest();

// 		request.addEventListener("readystatechange", () => {
// 			if (request.readyState === 4 && request.status === 200) {
// 				const data = JSON.parse(request.responseText);
// 				resolve(data); // if success resolve and send the data
// 			} else if (request.readyState === 4) {
// 				reject("error getting resource"); // if unsuccess reject and trow an error
// 			}
// 		});

// 		request.open("GET", resource);

// 		request.send();
// 	});
// };

// getTodos("/Asynchronous-JavaScript/luigi.json")
// 	.then((data) => {
// 		// then is like "cuando" only triggers if success  as we see up there this is the resolve.
// 		console.log("promise resolved: ", data);
// 	})
// 	.catch((err) => {
// 		// and this one is the reject
// 		console.log("promise rejected: ", err);
// 	});

//VIDEO 8

// const getTodos = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject("error getting resource");
//       }
//     });
//     request.open("GET", resource);
//     request.send();
//   });
// };

// getTodos("/Asynchronous-JavaScript/luigi.json")
//   .then((data) => {
//     console.log("promise 1 resolved: ", data);
//     return getTodos("/Asynchronous-JavaScript/mario.json");
//   })
//   .then((data) => {
//     // cause we return a promise we can use the then method again.
//     console.log("promise 2 resolved: ", data);
//     return getTodos("/Asynchronous-JavaScript/shaun.json");
//   })
//   .then((data) => {
//     console.log("promise 3 resolved: ", data);
//   })
//   .catch((err) => {
//     // Catches any error so we dont need to writea catch for each promise
//     console.log("promise rejected: ", err);
//   });

// VIDEO 9 FETCH API

// fetch("/Asynchronous-JavaScript/luigi.json")
//   .then((response) => {
//     console.log("resolved", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });

// VIDEO 10

// const getTodos = async () => {
//   const response = await fetch("/Asynchronous-JavaScript/luigi.json");
//   // await "stops" js from asign to response until the promise is rsolved
//   // console.log(response);
//   const data = await response.json();
//   // console.log(data);
//   return data;
// }; // Async ever return a promise
// // Output: Promise { <state>: "fulfilled", <value>: undefined }

// console.log(1);

// getTodos()
//   .then((data) => {
//     console.log("resolved", data);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });

// console.log(2);

// VIDEO 10

const getTodos = async () => {
  const response = await fetch("/Asynchronous-JavaScript/luigis.json");
  console.log(response);
  if (response.status !== 200) {
    //also can use if(!response.ok)
    throw new Error("Cannot fetch the data");
    // Throw a custom error
  }
  const data = await response.json();
  return data;
};
console.log(1);
getTodos()
  .then((data) => {
    console.log("resolved", data);
  })
  .catch((err) => {
    console.log("rejected", err.message);
  });
console.log(2);
