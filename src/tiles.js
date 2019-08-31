import React  from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tile from './tile';


class Tiles extends React.Component{

    
state={
    tiles:[
        {name:"somany",model:"nit-01",price:200,rating:2,image:"tile1.jpg",status:1,Id:1},
        {name:"johnson",model:"nit-02",price:100,rating:4,image:"tile2.jpg",status:0,Id:2},
        {name:"hsil",model:"nit-03",price:150,rating:5,image:"tile3.jpg",status:1,Id:3},
        {name:"clayhaus",model:"nit-04",price:350,rating:3,image:"tile4.jpg",status:1,Id:4},
      ],
      search:''
  
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

  updateSearch(event){
    console.log(event.target.value);
    //this.state.search = event.target.value;
    this.setState({search:event.target.value});
  }

  
  
  render(){

    let filteredTiles = this.state.tiles.filter((tile)=>{
      return tile.name.toLowerCase().indexOf(this.state.search.toLowerCase())!==-1;

    })

   
    return(<div>

    <div className='filter'>       
    <input type="text" id="uName" 
        value={this.state.search}
        onChange={this.updateSearch.bind(this)}/>
    </div>

        <table className="table">
         <thead>
           <tr>
             <th>image</th>
             <th>name</th>
             <th>model</th>
             <th>price</th>
             <th>rating</th>
             <th>status</th>
           </tr>
         </thead>
         <tbody>
           {filteredTiles.map((tile, index) => {
             return (
             <Tile tile={tile} index="index"/>
             );
           })}
         </tbody>
       </table>
     </div>)
   
  }
 
}

export default  Tiles;