function Button() {

    const handleClick = () => console.log('clicked');

    const handleClick2 = (name) => console.log(`${name} stop clicking me `)


    //in questo modo, la funzione viene chiamata direttamente senza attendere il click del bottone
    // return (
    //     <button onClick={handleClick2('pier')}>my button</button>
    // );

    //in questo modo la funzione viene chiamata al click
    return (
        <button onClick={() => handleClick2('pier')}>my button</button>
    );
}

export default Button