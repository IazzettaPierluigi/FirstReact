function Student(props) {
    return (

        <div>
            <p>Name: {props.name}</p>
            <p>ha {props.age} anni</p>
            <p>Student: {props.isStudent ? "è ancora uno studente" : "Non è più studente"}</p>
        </div>
    );

}
export default Student