import {useFetch} from "./hooks/useFetch.js";


function App() {
    const API_URL = 'https://jsonplaceholder.typicode.com/todos/?_limit=20&_delay=2000'
    const {loading, data, error} = useFetch(API_URL)

    return (
        <div className="container my-3">
            {loading && <p>Loading...</p>}
            {error && <p className="alert alert-danger">{error.toString()}</p>}
            {data &&
                <div>
                    <ul>
                        {data.map((item) => (
                            <li key={item.id}>{item.title}</li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    )
}


export default App
