import React  from 'react';


class Tiles extends React.Component{

    
state={
    tile:{name:"somany",model:"nit-01",price:200,rating:2,"status":1}
  }
  
    render(){
        return(
            <>
            <div>welcome to tiles component</div>
            <div>
                <h1>{this.state.tile.name}</h1>
            </div>
            </>
        )
    }
}

export default  Tiles;