import { Component } from "react";
import './card-list.styles.css';
import Card from "../Card/card.component";

class CardList extends Component{
    render(){
        const{monsters}=this.props;
        return(
            <div className="card-list" key={monsters.id}>
                {monsters.map(monsters=>{
                    return (
                        <Card key={monsters.id} monsters={monsters}/>
                    );
                })}
            </div>
        );
    }
}

export default CardList;