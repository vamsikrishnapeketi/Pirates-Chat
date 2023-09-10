import { createContext, useState } from "react";

export const MyContext = createContext({});


const MyContextProvider = ({children}) => {

    const [selectedUser, setSelectedUser] = useState({
        name: 'Luffy',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS6yylk6stSfvXMamOxV16KEUwI6Bt7PEMIw&usqp=CAU',
        description: "Captain"
    }); 

    return <MyContext.Provider value={{selectedUser, setSelectedUser}}>
        {children}
    </MyContext.Provider>
}

export default MyContextProvider;