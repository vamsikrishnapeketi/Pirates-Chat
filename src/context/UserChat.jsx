import { createContext, useState } from "react";

export const UserChat = createContext({});

const UserChatProvider = ({children}) => {
    const [userChats,setUserchats] = useState([]);

    return <UserChat.Provider value={{userChats,setUserchats}}>
        {children}
    </UserChat.Provider>
}

export default UserChatProvider;