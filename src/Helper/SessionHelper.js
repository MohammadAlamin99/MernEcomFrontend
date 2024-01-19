class SessionHelper {

    setToken(token){
        localStorage.setItem("token", token)
    }
    getToken(){
        return localStorage.getItem("token")
    }
    setLastLocation(){
        let lastLocation = window.location;
            sessionStorage.setItem("lastLocation", lastLocation)
    }
    getLastLocation(){
        return sessionStorage.getItem('lastLocation');
    }
    


    // setUserDetails(userDetails){
    //     localStorage.setItem("userDetails", JSON.stringify(userDetails))
    // }
    
    // getUserDetails(){
    //    return JSON.parse(localStorage.getItem("userDetails"))
    // }

    // logoutUser = ()=>{
    //     localStorage.clear();
    //     window.location.href="/login"
    // }





    // setEmail(Email){
    //     localStorage.setItem("Email",Email)
    // }
    // getEmail(){
    //     return localStorage.getItem("Email")
    // }

    // setOTP(OTP){
    //     localStorage.setItem("OTP",OTP)
    // }
    // getOTP(){
    //     return localStorage.getItem("OTP")
    // }
}

export const {setToken,getToken,setLastLocation,getLastLocation}= new SessionHelper();