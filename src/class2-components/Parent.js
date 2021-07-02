import React from 'react';
import ChildCat from './ChildCat';
import CatImg from './assets/cat.jpeg'

class Parent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ['Frankie', 'Pope'],
        }
    }

    render() {
        return (
            <div>
                <ChildCat imgUrl={CatImg} title={this.state.name[0]} petsNo={3} />
                <ChildCat imgUrl={CatImg} title={this.state.name[1]} petsNo={3} />

            </div>
        )
    }
}

export default Parent;