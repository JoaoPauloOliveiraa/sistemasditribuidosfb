const game_database = {};

let game_id = false;

function newGame() {
    const game_data = {
        Nome: document.getElementById("nome").value,
        Tipo: document.getElementById("tipo").value,
        createdat: firebase.database.ServerValue.TIMESTAMP,
    };

    if (!game_id) {
        game_id = firebase.database().ref().child('games').push().key;
    }

    // let updates = {};
    // updates[game_id] = game_data;

    let game_ref = firebase.database().ref("games/" + game_id);

    let game_status = game_ref.set({
        Nome: document.getElementById("nome").value,
        Tipo: document.getElementById("tipo").value,
        createdat: firebase.database.ServerValue.TIMESTAMP,
    }).then(function () {
        return { sucess: true, message: 'Game Created' };
    })
        .catch(function (error) {
            return { sucess: false, message: `Creation failed: ${error.message}` };
        });
    console.log(game_status);
    game_id = false;
}