function App() {
    const handleClick = (e) => {
        alert('clicked')
    }
    const showTitle = true;
    const todos = [
        "apprendre react",
        "code l'application multiservice",
        "code l'application de gestion",
    ]
    return (
    <>
        { showTitle && <h1>Bonjour les gens</h1> }
        <input type="text"/>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet consequuntur, cumque deserunt dicta distinctio dolorem doloribus ducimus explicabo fugiat in magnam neque quasi qui sunt voluptate voluptatibus. Quidem, sit?
        </p>
        <ul>
            { todos.map(todo => (
                <li key={todo}>{todo}</li>
            ))}
        </ul>
    </>
  )
}

export default App
