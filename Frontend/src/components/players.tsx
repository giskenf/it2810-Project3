import React, { Component , useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getPlayers} from '../store/actions/playersAction';

/*export const Players: React.FC = () => {
    useEffect(() => {
        getPlayers();
    });
    const [players, setPlayers] = useState<>();

}
*/
interface PlayersInterface {
    getPlayers(): any;
    players: any;

}
export class Players extends Component<PlayersInterface> {
    componentDidMount(){
        this.props.getPlayers();
    }
    render() {
        const {players} = this.props.players;
        console.log(players);

        return (
            <div>
                {players.map((p:any) => <React.Fragment key={p.id}> <h6>{p.name}</h6> </React.Fragment>)}
            </div>
        )
    }
};

const mapStateToProps  = (state: any) => ({players:state.players})

export default connect(mapStateToProps, {getPlayers})(Players);