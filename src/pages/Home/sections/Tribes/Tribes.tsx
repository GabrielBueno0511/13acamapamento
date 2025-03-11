import InfiniteMenu from "../../../../components/InfinityMenu/InfinityMenu"
import "./tribes.css"

const Tribes = () =>{

  const items = [
    {
      image: 'src/assets/rubem.png',
      title: 'Rubem',
    },
    {
      image: 'src/assets/benjamin.png',
      title: 'Benjamin',
    },
    {
      image: 'src/assets/efraim.png',
      title: 'Efraim',
    },{
      image: 'src/assets/juda.png',
      title: 'Judá',
    },{
      image: 'src/assets/manasses.png',
      title: 'Manassés',
    },
    {
      image: 'src/assets/gad.png',
      title: 'Gad',
    },
    {
      image: 'src/assets/gad.png',
      title: 'Leví',
    },
  ];

    return (
      <>



<div style={{ height: '1000px', position: 'relative' }}>
  <InfiniteMenu items={items}/>
</div>
      </>
    )
  }
  
  export default Tribes
  