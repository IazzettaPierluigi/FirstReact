function List() {
    const fruits = [{ id: 1, name: 'mela', calories: 95 },
    { id: 2, name: 'pera', calories: 40 },
    { id: 3, name: 'banana', calories: 105 },
    { id: 4, name: 'cocco', calories: 150 }];

    //sort in ordine alfabetico.
    fruits.sort((a, b) => a.name.localeCompare(b.name));

    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}, calories: {fruit.calories}</li>)

    return (<ul>{listItems}</ul>)
}

export default List