import axios from "axios"

export const foo = async () => {
	const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos/1")

	return data.title
}
