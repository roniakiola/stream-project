import '../css/index.css';
import Button from './Button';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import MessageContainer from './MessageContainer';

const socket = io.connect(
  'wss://striimipalvelu.norwayeast.cloudapp.azure.com:443'
);

const Chat = () => {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [showChat, setShowChat] = useState(false);
  const [messageList, setMessageList] = useState([]);

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
      setMessageList((list) => [...list, messageData]);
      setMessage('');
    }
  };

  const joinRoom = () => {
    if (username !== '' && room !== '') {
      socket.emit('join_room', room);
      setShowChat(true);
    }
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data]);
      console.log(data);
    });
  }, [socket]);

  return (
    <div>
      {!showChat ? (
        <div className='p-2 flex flex-col items-center justify-between bg-gray-200'>
          <h3>Join A chat</h3>
          <input
            key='username'
            type='text'
            placeholder='Käyttäjänimi'
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            key='roomId'
            type='text'
            placeholder='Huonenumero'
            onChange={(e) => {
              setRoom(e.target.value);
            }}
            onKeyPress={(e) => {
              e.key === 'Enter' && joinRoom();
            }}
          />
          <Button handleClick={joinRoom} text='Join room' />
        </div>
      ) : (
        <div>
          <p>Live Chat</p>
          <div>
            {messageList.map((data) => {
              return (
                <MessageContainer
                  id={username === data.username ? 'you' : 'other'}
                  data={data}
                ></MessageContainer>
              );
            })}
          </div>
          <input
            key='message'
            type='text'
            placeholder='Sano jotain...'
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            onKeyPress={(e) => {
              e.key === 'Enter' && sendMessage();
            }}
          />
          <Button handleClick={sendMessage} text='Send' />
        </div>
      )}
    </div>
  );
};

export default Chat;
