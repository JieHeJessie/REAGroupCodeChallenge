import React from 'react';
import {Container, Button} from 'reactstrap';

class ResultList extends React.Component{

    constructor(props){
        super(props);

    }


    render(){

        return(

            <div className="result-list"> 
                <div className="logo" style={{backgroundColor:this.props.data.agency.brandingColors.primary}}>
                    <img src={this.props.data.agency.logo}/>
                </div>
                <div className="image">
                    <img src={this.props.data.mainImage}/>
                </div>
                <div className="price">
                    <span>Price: {this.props.data.price}</span>
                </div>
            </div>               


        )
    }
}

export default ResultList


    