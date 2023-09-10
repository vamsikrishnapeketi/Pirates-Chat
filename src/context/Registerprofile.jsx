import { createContext, useState } from "react";

export const Registerprofile = createContext({});

const RegisterprofileProvider = ({children}) => {

    const [registerProfile,setRegisterprofile] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS6yylk6stSfvXMamOxV16KEUwI6Bt7PEMIw&usqp=CAU');

    return <Registerprofile.Provider value= {{registerProfile,setRegisterprofile}}>
    {children}
    </Registerprofile.Provider>
}

export default RegisterprofileProvider;