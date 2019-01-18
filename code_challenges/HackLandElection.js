function electionWinner(votes) {
    const voteObj = {};
    for (let v of votes) {
        voteObj[v] = (voteObj[v] || 0) + 1;
    }

    let winners = [];
    let maxVotes = 0;

    if (winners.length === 1) {
        return winners[0];
    }

    for (let name in voteObj) {
        if (voteObj[name] > maxVotes) {
            maxVotes = voteObj[name];
            winners = [name];
        }
        else if (voteObj[name] === maxVotes) {
            winners.push(name);
        }
    }

// --> input
// 10
// Victor
// Veronica
// Ryan
// Dave
// Maria
// Maria
// Farah
// Farah
// Ryan
// Veronica

// -->output
// Veronica

