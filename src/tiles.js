import React  from 'react';


class Tiles extends React.Component{

    
state={
    tiles:[
        {name:"somany",model:"nit-01",price:200,rating:2,image:"tile1.jpg",status:1,Id:1},
        {name:"johnson",model:"nit-02",price:100,rating:4,image:"tile2.jpg",status:0,Id:2},
        {name:"hsil",model:"nit-03",price:150,rating:5,image:"tile3.jpg",status:1,Id:3},
        {name:"clayhaus",model:"nit-04",price:350,rating:3,image:"tile4.jpg",status:1,Id:4},
      ]
  
  }

  mapCallBack(tile,index){
    return <tr key={index}>
    <td>{tile.name}</td>  
    <td>{tile.model}</td>
    <td>{tile.price}</td>
    <td>{tile.rating}</td>
    <td>{tile.status}</td>
    </tr>
  }
  
  render(){
    return(<div>
        {this.state.tiles.map(this.mapCallBack)}
     </div>)
   
  }
 
}

export default  Tiles;