import React from 'react'

 class tile extends React.Component {

    render() {
        return (
            <>
            <tr key={this.props.index}>
            <td><img src={require(`./images/${this.props.tile.image}`)} alt="tile"></img></td>
            <td>{this.props.tile.name}</td>
            <td>{this.props.tile.model}</td>
            <td>{this.props.tile.price}</td>
            <td>{this.props.tile.rating}</td>
            <td>{this.props.tile.status}</td>
            </tr>
          </>  
        )
    }
}
export default tile;