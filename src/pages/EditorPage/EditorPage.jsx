import React, { useContext, useEffect, useState } from 'react';
import Client from '../../Components/Client/Client';
import { Editor } from '../../Components/export';
import Preview from '../../Components/Preview/Preview';
import { useParams, useNavigate, useLocation, Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import './editorPage.css';
import { codeContext } from '../../Context/onlineCodeContext';
import { io } from 'socket.io-client';
// import { FcSettings } from 'react-icons/fc';
// import { BiCodeAlt } from 'react-icons/bi';
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';
const EditorPage = () => {
    // const newSocket = io('http://localhost:5500');
    const { roomId } = useParams();
    const reactNavigate = useNavigate();
    const location = useLocation();
    const { clients, setClients } = useContext(codeContext);
    // const [clients, setClients] = useState([]);
    const { autoLive, autoBasic, autoSnippet, setAutoBasic, setAutoLive, setAutoSnippet, } = useContext(codeContext);
    const [switchTitle, setSwitchTitle] = useState('Enable')
    const AutoCode = () => {
        if (autoLive && autoBasic && autoSnippet) {
            setSwitchTitle('Enable')
        } else {
            setSwitchTitle('Disable')
        }
        setAutoBasic(()=>!autoBasic)
        setAutoLive(()=>!autoLive)
        setAutoSnippet(()=>!autoSnippet)
    }

    // Waiting
    // useEffect(() => {
    //     newSocket.emit('add:new', ({ roomId, username }) => {
    //         console.log(roomId, username);
    //     })
    // }, [])
    // Functions 
    function leaveRoom() {
        reactNavigate('/')
        toast.success('You Leave Room')
    }
    async function copyRoomId() {
        try {
            await navigator.clipboard.writeText(roomId)
            toast.success('Success copied Room id')
        } catch (e) {
            toast.error(e)
        }
    }
    if (!location.state) {
        return <Navigate to='/' />
    }
    return (
        <div className='editor-page'>
            <div className="aside">
                <div className="aside-inner">
                    {/* Here Will be Logo */}
                    <div className="logo"></div>
                    <h3>Connected</h3>
                    <div className="settings">
                        <h3>Auto Code</h3>
                        <Tooltip title={switchTitle}>
                            <Switch defaultChecked onClick={AutoCode} />
                        </Tooltip>
                    </div>
                    <div className="client-list">
                        {clients.map(client => (
                            <Client key={client.socketId} username={client.username} />
                        ))}
                    </div>
                </div>
                <div className="container-btn">
                    <button onClick={copyRoomId} className='btn copy-btn'>Copy ROOM ID</button>
                    <button onClick={leaveRoom} className='btn leave-btn'>Leave</button>
                </div>
            </div>
            <div className="edit">
                <Editor />
                <Preview />
            </div>
        </div>
    )
}
export default EditorPage