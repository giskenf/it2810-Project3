import * as React from "react";
import {addPlayer, AppState, Player, removePlayer} from "../store/store";

const {useDispatch, useSelector} = require("react-redux")



export const Page = () => {

    const [newPlayer, setNewPlayer] = React.useState("Thomas");
    const updateNewPerson = () => (e: React.ChangeEvent<HTMLInputElement>) =>
        setNewPlayer(e.currentTarget.value);

    const players: Player[] = useSelector(
        (state: AppState) => state.players
    )

    const dispatch = useDispatch();


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addPlayer(newPlayer));
    };
    const dispatchNewPlayer = (id: number) => () => {
        dispatch(removePlayer(id));
    };
    return(
        <div>
            <button onClick={dispatchNewPlayer(players[1].id)}>Remove</button>
        </div>
    )
}