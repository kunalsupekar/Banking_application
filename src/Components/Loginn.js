import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
// const clientId = "1071723327805-668c6rm3hqlctcrj4fbvbi67eveme08g.apps.googleusercontent.com"
function Loginn() {
const [ user, setUser] = useState({});

function handleCallbackResponse(response){
    console.log("Encoded JWT ID tokens " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;

}
function handlesignOut(event){
    setUser({});
    document.getElementById("signInDiv").hidden = false;

}
useEffect(() => {
    /* global google*/
    google.accounts.id.initialize({
        client_id : "1071723327805-668c6rm3hqlctcrj4fbvbi67eveme08g.apps.googleusercontent.com",
        callback: handleCallbackResponse
    })
    google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large"}
    );
    google.accounts.id.prompt();
},[])

return(
<div className='login'>
<div id='signInDiv'></div>
{
    Object.keys(user).length !=0 &&
    <button onClick={(e)=> handlesignOut(e)}>Sign out</button>

}

{ user &&
    <div>
        <img src={user.picture}></img>
        <h3>{user.name}</h3>
    </div>    
}

</div>

)
}
export default Loginn;