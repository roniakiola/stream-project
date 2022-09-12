import '../css/index.css';
import bannerImg from '../misc/kuva.jpg';

const Home = () => {
  return (
    <>
      <div
        className='bg-cover min-h-[25vh] flex items-center justify-center sm:h-[35vh]'
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div>
          <h1 className='text-4xl text-tan bg-gray-500 bg-opacity-70 font-bold font-mono text-center'>
            Luovuus sinun työssäsi? Mitä luovuus työelämässä mahdollistaa?
          </h1>
        </div>
      </div>
      <div>
        <h2>Mikä tapahtuma?</h2>
        <p>
          Miten luovuuden mahdollisuuksia huomioiva näkökulma työelämässä eri
          aloilla ja ammateissa otetaan käyttöön? Miten luovuuden huomiointi
          edistää kestävää, hyvää työelämää ja tulevaisuutta? Moniäänisessä
          tapahtumassa kuullaan sekä huippututkijoiden puheenvuoroja että
          käydään eri alojen ammattilaisten ja opiskelijoiden yhteistä
          keskustelua luovuuden mahdollisuuksista työelämässä.
        </p>
      </div>
    </>
  );
};

export default Home;
