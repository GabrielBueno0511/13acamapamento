import { useState } from "react"
import PixelCard from "../../../../components/PixelCard/PixelCard"
import SpotifyPlayer from "../../../../components/Spotify/Spotify"
import TrueFocus from "../../../../components/TrueFocus/TrueFocus"
import Tribes from "../Tribes/Tribes"
import "./hero.css"
import Jobs from "../Jobs/Jobs"
import Footer from "../Footer/Footer"

const Hero = () =>{


  const [showCards, setShowCards] = useState(true);

  const [showJobs, setShowJobs] = useState(true);



    return (
      <>
      <div>
            <TrueFocus
        sentence="Se eu te olhar, Eu vou"
        manualMode={false}
        blurAmount={5}
        borderColor="yellow"
        animationDuration={2}
        pauseBetweenAnimations={1}
        />
      </div>
      <div className="logo-image">
          <img src="/assets/logo.png" alt="logo" />
      </div>
      {showCards && showJobs && (
        <div className="cards">
        <div  onClick={() => setShowCards(false)} >
        <PixelCard variant="yellow" text="Tribos">
        </PixelCard>
        </div>
        <div onClick={() => setShowJobs(false)}>
        <PixelCard variant="yellow" text="Equipe de trabalho">
        </PixelCard>
        </div>
      </div>
      )} 

      {!showCards &&(
      <div className="tribos-sections">
        <div className="buttons">
          <span className="bottom-back" onClick={ () => setShowCards(true)}> Voltar </span>
        </div>
        <div>
        <Tribes></Tribes>
        </div> 
      </div>
      )}
      {!showJobs && (
        <div className="trabalho-sections">
          <div className="buttons">
            <span className="bottom-back" onClick={ () => setShowJobs(true)}> Voltar </span>
          </div>
          <div className="jobs">
            <Jobs></Jobs>
          teste
          </div> 
      </div>
      )

      }
      <div className="spotify">
        <div className="text-music">
            <h1>Musicas</h1>
        </div>
        <div>
            <SpotifyPlayer></SpotifyPlayer>
        </div>
        <div className="text-music">
            <h1>Para mais musicas do acampamento</h1>
        </div>
        <div className="text-music">
          <img src="/assets/musicas.png" alt="musicas" />
        </div>
      </div>
      <Footer></Footer>
      </>
    )
  }
  
  export default Hero
  