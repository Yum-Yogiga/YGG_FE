//Regex for Login/Signup Validation

const idRegex = /^[a-zA-Z0-9]{5,15}$/;

const passwordRegex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,15}$/;

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default match = (string, regexType) => {
    switch (regexType) {
        case "userId":
            return idRegex.test(string);
        case "password":
            return passwordRegex.test(string);
        case "email":
            return emailRegex.test(string);
    }
    console.warn("No such regexType was found");
    return false;
};
