import '../css/index.css';
import Button from './Button';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';

const socket = io.connect('http://localhost:3001');

const Chat = () => {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    const date = new Date();
    if (message !== '') {
      const messageData = {
        room: room,
        username: username,
        message: message,
        timestamp: date.getHours() + ':' + date.getMinutes(),
      };
      await socket.emit('send_message', messageData);
    }
  };

  const joinRoom = () => {
    if (username !== '' && room !== '') {
      socket.emit('join_room', room);
    }
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      console.log(data);
    });
  });

  return (
    <>
      <div className='p-2 flex flex-col items-center justify-between bg-gray-200'>
        <h3>Join A chat</h3>
        <input
          type='text'
          placeholder='Käyttäjänimi'
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <input
          type='text'
          placeholder='Huonenumero'
          onChange={(e) => {
            setRoom(e.target.value);
          }}
        ></input>
        <Button handleClick={joinRoom} text='Join room' />
      </div>
      {/* chat */}
      <div>
        <div>
          <p>Live Chat</p>
        </div>
        <div>
          <input
            type='text'
            placeholder='Sano jotain...'
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <Button handleClick={sendMessage} text='Send' />
        </div>
      </div>
    </>
  );
};

export default Chat;
