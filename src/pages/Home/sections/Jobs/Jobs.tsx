import { useEffect, useState } from "react";
import Stack from "../../../../components/StackImages/StackImages"

const Jobs = () =>{

    const [cardSize, setCardSize] = useState({ width: 1200, height: 800 });

    useEffect(() => {
      const updateSize = () => {
        if (window.innerWidth < 768) {
          
          setCardSize({ width: 300, height: 200 });
          
        } else if (window.innerWidth < 1424) {
          
          setCardSize({ width: 600, height: 400 });

        } else if (window.innerWidth < 1920) {

          setCardSize({ width: 900, height: 600 });

        } else {
          setCardSize({ width: 1200, height: 1000 });
        }
      };
  
      updateSize(); 
      window.addEventListener("resize", updateSize);
  
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return (
      <>
      <Stack
            randomRotation={false}
            sensitivity={180}
            sendToBackOnClick={false}
            cardDimensions={cardSize}
        />
      </>
    )
  }
  
  export default Jobs
  