//Regex for Login/Signup Validation

const idRegex = /^[a-zA-Z0-9]{5,15}$/;

const passwordRegex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,15}$/;

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default match = (string, regexType) => {
    switch(regexType){
        case "id":
            return idRegex.match(string);
        case "password":
            return passwordRegex.match(string);
        case "email":
            return emailRegex.match(string); 
    }
    console.warn("No such regexType was found");
    return false;
}; 


