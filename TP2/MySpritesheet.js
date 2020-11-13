class MySpritesheet{
    constructor(scene, texture, sizeM, sizeN){
        this.scene=scene;
        this.texture=texture;
        this.sizeM=sizeM;
        this.sizeN=sizeN;

        this.cellWidth = 1/sizeM;
        this.cellHeight = 1/sizeN;

        
        this.spriteShader = new CGFshader(this.scene.gl,"shaders/spritesheet.vert","shaders/spritesheet.frag");

        this.spriteShader.setUniformsValues({width: this.cellWidth, height: this.cellHeight});

        
    }

    activateCellMN(m,n){

        let startX = this.cellWidth*m;
        let startY = this.cellHeight*n;
        this.spriteShader.setUniformsValues({x: startX, y: startY});
    }
    activateCellP(p){
        let startX = (p%sizeM) * this.cellWidth;
        let startY = Math.floor(p/sizeM) * this.cellHeight;
        this.spriteShader.setUniformsValues({x: startX, y: startY});
    }
}