function Button() {
    //realizziamo un counter per la creazione di una condition nella funzione
    let count = 0;


    const handleClick = () => console.log('clicked');

    const handleClick2 = (name) => console.log(`${name} stop clicking me `);

    const handleClick3 = (name) => {
        if (count < 3) {
            count++;
            console.log(`${name} mi hai cliccato ${count} volta/e`)
        } else {
            console.log(`${name} smettila di cliccare`)
        }



    }


    //in questo modo, la funzione viene chiamata direttamente senza attendere il click del bottone
    // return (
    //     <button onClick={handleClick2('pier')}>my button</button>
    // );

    //in questo modo la funzione viene chiamata al click
    return (
        <button onClick={() => handleClick3('pier')}>my button</button>
    );
}

export default Button