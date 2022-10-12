const MessageContainer = ({ id, data }) => {
  return (
    <div
      className={`${
        id === 'you' ? 'bg-opal self-end' : 'bg-slategray '
      } p-3 m-1 w-2/5 break-words rounded`}
    >
      <div>
        <div className='flex flex-row justify-between'>
          <p className='font-bold'>{data.username}</p>
          <p className='text-gray'>{data.timestamp}</p>
        </div>
        <div className='mt-2 bg-gray-400 rounded p-1 bg-opacity-40'>
          <p>{data.message}</p>
        </div>
      </div>
    </div>
  );
};
export default MessageContainer;
