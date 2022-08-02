import React, { createContext, useState } from 'react';
const codeContext = createContext();
const ContextProvider = ({ children }) => {
    // const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');
    // Code
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');
    // All Variable
    // React Ace Feature
    const [autoLive, setAutoLive] = useState(true);
    const [autoBasic, setAutoBasic] = useState(true);
    const [autoSnippet, setAutoSnippet] = useState(true);
    const [clients, setClients] = useState([])
    const value = {
        // roomId,
        username,
        autoLive,
        autoBasic,
        autoSnippet,
        setAutoBasic, 
        setAutoLive, 
        setAutoSnippet,
        // Clients
        clients,
        setClients,
        // setRoomId,
        setUsername,
        // Code 
        html,
        css,
        js,
        setHtml,
        setCss,
        setJs
    }
    return (
        <codeContext.Provider value={value}>
            {children}
        </codeContext.Provider>
    )
}

export { codeContext, ContextProvider };