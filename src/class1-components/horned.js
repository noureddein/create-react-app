import React from 'react';

class HornedBeasts extends React.Component {
  render() {
    return (
      <div className='container'>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <img src={this.props.img_url} alt={this.props.alt} />
      </div>
    )
  }
}

export default HornedBeasts;