var time = 0;

class Piece {
    constructor(scene, type, centerX, centerZ, objectID) {
        this.scene = scene;
        this.type = type;
        this.centerX = centerX;
        this.centerZ = centerZ;
        this.objectID = objectID;

        if (this.type == pieceType.RED) {
            this.nodeID = "P1piece";
        } else {
            this.nodeID = "P2piece";
        }

        //pointer to holding tile if any
        this.holdingTile = null;
        this.wasMoved = false;

        this.selectable = true;
        this.picked = false;


    }

    loadTextures() {
        this.XMLnode = this.scene.graph.nodes[this.nodeID];
    }

    getType() {
        return this.type;
    }

    getTile() {
        return this.holdingTile;
    }

    setTile(tile) {
        this.holdingTile = tile;
        let coords = tile.getCenterCoords();
        this.centerX = coords[0];
        this.centerZ = coords[1];
        this.holdingTile = tile;
        this.selectable = false;
        this.wasMoved = true;
    }

    removeTile() {
        this.holdingTile = null;
    }

    display() {
        if (this.selectable) {
            this.scene.registerForPick(this.objectID, this);
        }
        this.scene.pushMatrix();
        if (this.picked)
            this.pickedAnimation();
        this.scene.translate(this.centerX, 0.25, this.centerZ);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.XMLnode.display();
        this.scene.popMatrix();

        if (this.selectable) {
            this.scene.clearPickRegistration();
        }
    }

    getCenterCoords() {
        return [this.centerX, this.centerZ];
    }

    pickedAnimation() {
        time += 20;
        let y = ParametricBlend(time)
        console.log(y);
        this.scene.translate(0, y * 0.2, 0);
    }

    setPicked(isPicked) {
        time = 0;
        this.picked = isPicked;
    }
}

function ParametricBlend(t) {
    let fullTime = 500.0;
    t = t % fullTime;
    t = t / 1000.0;
    t = t / fullTime * 2000.0
    if (t <= 1.0) {
        let sqt = t * t;
        return sqt / (2.0 * (sqt - t) + 1.0);
    } else if (t <= 2.0) {
        t = t - 1.0;
        let sqt = t * t;
        return -sqt / (2.0 * (sqt - t) + 1.0) + 1.0;
    }
    /*else if (t <= 3.0) {
           t = t - 2.0;
           let sqt = t * t;
           return -sqt / (2.0 * (sqt - t) + 1.0);
       } else {
           t = t - 3.0;
           let sqt = t * t;
           return sqt / (2.0 * (sqt - t) + 1.0) - 1.0;
       }*/
}