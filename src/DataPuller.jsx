import React from 'react';
import axios from 'axios';
import MichiLister from './MichiLister';
import MichiDisplayer from './MichiDisplayer';


class DataPuller extends React.Component{
    constructor(){
        super();
        this.state= {michis:[], michiToDisplay:null}
        console.log(this.state)

        this.setMichi = (michi) =>{
            this.setState({...this.state, michiToDisplay:michi});
        }
    }

    componentDidMount() {        
        axios.get('http://localhost:3000/michis')
          .then(res => {
            const michis = res.data;
            this.setState({...this.state, michis});
            console.log(michis)
          })
    }

    render(){
        return (
        <React.Fragment>
            <div className="col-3">
                {this.state.michis.map((michi)=>{
                    return <MichiLister michi={michi} setMichi={this.setMichi}/>;
                })}
            </div>
            <MichiDisplayer michi={this.state.michiToDisplay}/>
        </React.Fragment>
        );
    }

}

export default DataPuller;