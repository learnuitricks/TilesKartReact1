import React  from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tile from './tile';
import axios from 'axios';


class Tiles extends React.Component{

    
state={
    tiles:[],
      search:''
  
  }

  tilesAPI = "http://demo5911200.mockable.io/tiles";

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

componentDidMount(){
  axios.get(this.tilesAPI).then((res)=>{
    const tiles = res.data;
    this.setState({tiles:tiles});
  }

  )
}

// componentDidMount(){
//   fetch(this.tilesAPI).then(
//     function(response){
//       return response.json();
//     }
//   )
//   .then((data)=>{
//     const tiles = data;
//     this.setState({tiles:tiles})
//   })
//   .catch(function(error){
//     console.log(error);
//   })
// }
  
  
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