import React,{ useState } from "react";

function Register() {
    const  emailSyntax = '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    const  alertText = "you are successfully registered"
    const  [name, setName] = useState("")
    const  [surname, setSurname] = useState("")
    const  [email, setEmail] = useState("")
    const  [age, setAge] = useState("")
    const  [password, setPassword] = useState("")
    const  [secondPassword, setSecondPassword] = useState("")
    function submit() {
        if (password != secondPassword) console.log(" your first password does not match the second one") 
        if (password.length < 8 ) console.log("Password must be 8 or more characters") 
  
        alert(alertText)
    }    
    return(
        <>
            <form id = "register-box" onSubmit={(e)=>{e.preventDefault()}}>
                <label htmlFor="userName">Name</label>
                <input type="text" value={name} onChange = {(e)=>{ setName(e.target.value)}} name="userName" />
                <label htmlFor="userSurname">Surname</label>
                <input type="text" value={surname} onChange = {(e)=>{ setSurname(e.target.value)}}  name="userSurname" />
                <label htmlFor="email">Email</label>
                <input type="email" value={email} onChange = {(e)=>{ setEmail(e.target.value)}} name="email" />
                    <label htmlFor="age"> Age</label>
                <input type="number" value={age} onChange = {(e)=>{ setAge(e.target.value)}} name="age"/>
                    <label htmlFor="password"> Password</label>
                <input type="password" value={password} onChange= {(e)=>{setPassword(e.target.value)}} name="password" />
                    {password.length >= 8 ? <p style={{color:"green"}}>{password.length }/8</p>: <p style={{color:"red"}}>{password.length}/8</p>}
                    <label htmlFor="password-copy">Copy Password</label>
                <input type="password" id="second-password"  value={secondPassword} onChange = {(e)=>{setSecondPassword(e.target.value)}} name="password-copy"/>
                    {password === secondPassword ? password.length !== 0 && password.length>=8 && <p style={{color:"green"}}>It`s okay</p>: <p style={{color: "red"}}>your second password doesn`t match at first password</p>}
                <div id="gender-box">
                    <input type="radio" name="gender" />
                        <label htmlFor="gender"> male</label>
                    <input type="radio" name="gender" />
                        <label htmlFor="gender"> female</label>
                </div>
                <button onClick={submit}
                id="register-btn"> Submit</button>
            </form>
        </>
    )   
}
export default Register;