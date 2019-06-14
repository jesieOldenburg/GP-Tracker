class Competitor {
    constructor(id, name, cnt, team) {
        this.id = id;
        this.name = name;
        this.cnt = cnt;
        this.team = team;
    }
}
class SeasonResults {
    constructor(points, wins, polePos, podiums, fastLaps, carNum) {
        this.points = points;
        this.wins = wins;
        this.polePos = polePos;
        this.podiums = podiums;
        this.fastLaps = fastLaps;
        this.carNum = carNum;
    }
}

module.exports = Competitor, SeasonResults;