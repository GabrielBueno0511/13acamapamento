import InfiniteMenu from "../../../../components/InfinityMenu/InfinityMenu"
import "./tribes.css"

const Tribes = () =>{

  const items = [
    {
      image: '/assets/rubem.png',
      title: 'Rubem',
    },
    {
      image: '/assets/benjamin.png',
      title: 'Benjamin',
    },
    {
      image: '/assets/efraim.png',
      title: 'Efraim',
    },{
      image: '/assets/juda.png',
      title: 'Judá',
    },{
      image: '/assets/manasses.png',
      title: 'Manassés',
    },
    {
      image: '/assets/gad.png',
      title: 'Gad',
    },
    {
      image: '/assets/gad.png',
      title: 'Leví',
    },
  ];

    return (
      <>



<div style={{ height: '980px', position: 'relative' }}>
  <InfiniteMenu items={items}/>
</div>
      </>
    )
  }
  
  export default Tribes
  