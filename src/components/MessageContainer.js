const MessageContainer = ({ id, data }) => {
  return (
    <div
      className={`${id === 'you' ? 'bg-burnishedbrown' : 'bg-opal'} p-3 m-1`}
    >
      <div>
        <div className='flex flex-row justify-between'>
          <p className='font-bold'>{data.username}</p>
          <p className='text-gray-500'>{data.timestamp}</p>
        </div>
        <div className='mt-2 bg-gray-400 rounded p-1 bg-opacity-40'>
          <p>{data.message}</p>
        </div>
      </div>
    </div>
  );
};
export default MessageContainer;
