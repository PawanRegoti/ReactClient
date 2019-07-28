export const exampleApi = () => {
	fetch('http://localhost:9000/')
		.then((response) => console.log('api called: ',response))
		.catch(error => console.warn(error));
}
