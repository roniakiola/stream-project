import '../css/index.css';

const Button = ({ text, handleClick }) => {
  return (
    <button className='bg-opal p-2 rounded' onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
