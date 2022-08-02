import React, { useContext, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './home.css';
import { codeContext } from '../../Context/onlineCodeContext';
const Home = () => {
    // Use Context file onlineCodeContext
    const [roomId, setRoomId] = useState('')
    const { username, setUsername } = useContext(codeContext);
    const navigate = useNavigate();
    // Functions 
    // Create new Room 
    const createNewRoom = (e) => {
        e.preventDefault()
        const id = uuidV4()
        setRoomId(id)
        toast.success('Create a new room ')
    };
    // Join Room 
    const joinRoom = (e) => {
        e.preventDefault()
        if (!roomId || !username) {
            toast.error('Room ID and Username required');
            return;
        }
        else {
            toast.success(`Sign In room ${username}`)
        }
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            }
        })
    }
    const handleInputEnter = (e) => {
        if (e.code = 'Enter') {
            joinRoom()
        }
    };
    return (
        <div className='home'>
            <form className="form">
                <h4>Welcome Online Code Editor</h4>
                <input
                    type="text"
                    value={roomId}
                    onKeyUp={handleInputEnter}
                    onChange={(e) => setRoomId(e.target.value)}
                    placeholder='Room ID' />
                <input
                    type="text"
                    value={username}
                    onKeyUp={handleInputEnter}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Username' />
                <button onClick={joinRoom} className='btn join-btn'>Join</button>
                <span className="create-info">
                    If you don't have an invite then create {' '}
                    <span onClick={createNewRoom} className="create-new__room"> new room</span>
                </span>
            </form>
            <footer className='footer'>
                <h4>It's Test version</h4>
            </footer>

        </div>
    )
}

export default Home