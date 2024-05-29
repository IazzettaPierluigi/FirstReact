function UserGreeting(props) {
    if (props.isLoggedIn) {
        return <h2>Benvenuto {props.username}</h2>
    }
    else {
        return <h2>Non sei loggato</h2>
    }
}

export default UserGreeting