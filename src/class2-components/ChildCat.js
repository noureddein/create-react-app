import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ChildCat extends React.Component {


    constructor(props) {
        super(props);
        // state => Dynamic Data - Changeable 
        // I can not update the state directly 
        this.state = {
            numOfPets: 0,
        }
    }

    incrementNoOfPets = () => {
        this.setState({
            numOfPets: this.state.numOfPets + 1
        })
    }


    render = () => {
        return (
            <div>
                {/* <img onClick={this.incrementNoOfPets} className="frankieImg" src={this.props.imgUrl} alt={this.props.alt} />
                <p>Title: {this.props.title}</p>
                <p>Number of pets: {this.state.numOfPets}</p>
                <button>Go Somewhere</button> */}
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imgUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            Number of pets 🐱: {this.state.numOfPets}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default ChildCat;
