import '../css/index.css';
import bannerImg from '../misc/kuva.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div
        className='bg-cover min-h-[25vh] flex flex-col items-center justify-center sm:h-[35vh]'
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div>
          <h1 className='text-4xl text-tan bg-gray-500 bg-opacity-70 font-bold font-mono text-center'>
            Luovuus sinun työssäsi? Mitä luovuus työelämässä mahdollistaa?
          </h1>
        </div>
        <Link
          className='text-4xl text-gray-50 bg-cadet p-3 pb-4 rounded my-2 hover:opacity-75 underline'
          to='/striimi'
        >
          Hyppää Striimiin!
        </Link>
      </div>
      <div className='bg-burnishedbrown flex flex-col p-10 lg:flex-row'>
        <div className='flex flex-col m-1 p-1 w-full'>
          <h2 className='text-4xl text-tan mb-5'>Mikä tapahtuma?</h2>
          <p>
            Miten luovuuden mahdollisuuksia huomioiva näkökulma työelämässä eri
            aloilla ja ammateissa otetaan käyttöön? Miten luovuuden huomiointi
            edistää kestävää, hyvää työelämää ja tulevaisuutta?
            <br></br>
            <br></br>
            Moniäänisessä tapahtumassa kuullaan sekä huippututkijoiden
            puheenvuoroja että käydään eri alojen ammattilaisten ja
            opiskelijoiden yhteistä keskustelua luovuuden mahdollisuuksista
            työelämässä.
          </p>
        </div>
        <div className='flex flex-col m-1 p-1 w-full '>
          <h2 className='text-4xl text-tan mb-5'>Missä ja milloin?</h2>
          <p>
            Metropolia Ammattikorkeakoulun Myllypuron kampuksella (Helsinki)
            <br></br>
            <br></br>
            keskiviikkona 5.10.2022 klo 8.00-15.00
            <br></br>
            <br></br>
            Tapahtuma on maksuton, mutta edellyttää sitovaa
            ennakkoilmoittautumista.
          </p>
        </div>
        <div className='flex flex-col m-1 p-1 w-full '>
          <h2 className='text-4xl text-tan mb-5'>Ohjelma ja kenelle?</h2>
          <p>
            Tutustu tapahtuman ohjelmaan.
            <br></br>
            <br></br>
            Tapahtuma on tarkoitettu eri alojen ammateissa toimiville
            ammattilaisille, asiantuntijoille, yrittäjille ja opiskelijoille.
            Luovuus tuo mahdollisuuksia kaikilla aloilla!
            <br></br>
            <br></br>
            Tapahtumaan on rajoitettu määrä paikkoja, ilmoittaudu ajoissa.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
