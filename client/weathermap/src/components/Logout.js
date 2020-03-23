

function Logout(props) {

    const logout = () => {
    if(localStorage.getItem('loggedIn') === 'true'){
        localStorage.setItem("loggedIn", "false")
        localStorage.setItem("userData", JSON.stringify("{}"))
        props.history.push('/')
        window.location.reload()
    }
}
return (
    logout()
);

}
export default Logout;