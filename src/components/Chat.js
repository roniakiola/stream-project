import '../css/index.css';
import Button from './Button';
import io from 'socket.io-client';
import { useEffect, useState, useRef } from 'react';
import MessageContainer from './MessageContainer';

const socket = io.connect(
  'wss://striimipalvelu.norwayeast.cloudapp.azure.com:443'
  // 'http://localhost:3001'
);

const Chat = () => {
  const bottomRef = useRef(null);
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
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messageList]);

  return (
    <div className='max-h-full h-full lg:w-2/5 xl:w-2/6 overflow-y-scroll hidescrollbar'>
      {!showChat ? (
        <div className='flex flex-col items-center justify-center bg-burnishedbrown h-full'>
          <h3 className='text-3xl'>Join to chat</h3>
          <input
            className='p-2 my-2 text-center rounded'
            key='username'
            type='text'
            placeholder='Username'
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            className='p-2 mb-2 text-center rounded'
            key='roomId'
            type='text'
            placeholder='Room ID'
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
        <div className='h-full flex flex-col justify-between'>
          <div className='flex flex-col'>
            {messageList.map((data) => {
              return (
                <MessageContainer
                  id={username === data.username ? 'you' : 'other'}
                  data={data}
                ></MessageContainer>
              );
            })}
            <div ref={bottomRef}></div>
          </div>
          <div className='flex flex-row'>
            <input
              className='w-full'
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
        </div>
      )}
    </div>
  );
};

export default Chat;
