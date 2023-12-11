// Проходим все тайлы и заменяем их на значения у которых есть название
let rowOfTiles: Image[] = []
tiles.setCurrentTilemap(tilemap`level1`)
let allTiles: Image[][] = []
for (let y = 0; y <= 15; y++) {
    rowOfTiles = []
    for (let x = 0; x <= 15; x++) {
        rowOfTiles[x] = tiles.tileImageAtLocation(tiles.getTileLocation(x, y))
        //console.log(rowOfTiles[x]);
    }
    allTiles[y] = rowOfTiles
}

let stastic: Sprite = new Sprite(allTiles[0][0]); // устанавливает исходную картинку как самый левый верхний тайл

/** Класс для прямоугольного поля информации внизу экрана */
class InfoSprite {
    sprite: Sprite;
    constructor () {
        this.sprite = new Sprite( assets.image`info`);
        this.sprite.setPosition(0, 104)
    }
}

class Cursor extends Sprite {
    current_aim: object;
    sensitivity: number;
    infoSprite: InfoSprite;
    constructor(image: Image, sensitivity: number) {
        super(image);
        this.sensitivity = sensitivity;
        this.infoSprite = new InfoSprite();
        this.infoSprite.sprite.setPosition(80, 112)
    }

    controller_handler(direction: string) {
        switch (direction) {
            case 'left':
                if (this.x > 8) {
                    this.x += this.sensitivity * -1
                }
                break;
            case 'right':
                if (this.x <= 15 * 16) {
                    this.x += this.sensitivity * 1
                }
                break;
            case 'up':
                if (this.y > 8) {
                    this.y += this.sensitivity * -1
                }
                break;
            case 'down':
                if (this.y <= 15 * 16) {
                    this.y += this.sensitivity * 1
                }
                break;
        }
        //console.log(`x: ${cursor.tilemapLocation().column}, y: ${cursor.tilemapLocation().row}`);

        let tile = tiles.getTileLocation(
            cursor.tilemapLocation().column, cursor.tilemapLocation().row
        )
        //console.log(tiles.tileAtLocationEquals(cursor.tilemapLocation(), allTiles[1][1]));
        //console.log(tile.x);
        //console.log(tile.y);
        
        const ppx = tile.x + 16 + 8;
        const ppy = tile.y + 16 + 8;
        //console.log(cursor.tilemapLocation().column)
        //console.log(cursor.tilemapLocation().row)
        //console.log(allTiles[cursor.tilemapLocation().column][cursor.tilemapLocation().row])
        let oldImage = allTiles[cursor.tilemapLocation().row][cursor.tilemapLocation().column]
        let newImage = oldImage.clone();
        
        stastic.setImage(newImage);
        newImage.drawRect(0, 0, 16, 16, 1);
        
        stastic.setPosition(ppx, ppy);

        let x = scene.cameraProperty(CameraProperty.X)
        let y = scene.cameraProperty(CameraProperty.Y)
        this.infoSprite.sprite.setPosition(x, y - 60 + 112)
    }
}



// Экземпляр класса
let cursor = new Cursor(assets.image`cursor`, 16);
cursor.setPosition(8, 8);
scene.cameraFollowSprite(cursor);


controller.left.onEvent(ControllerButtonEvent.Pressed, () => { cursor.controller_handler('left') })
controller.left.onEvent(ControllerButtonEvent.Repeated, () => { cursor.controller_handler('left') })
controller.right.onEvent(ControllerButtonEvent.Pressed, () => { cursor.controller_handler('right') })
controller.right.onEvent(ControllerButtonEvent.Repeated, () => { cursor.controller_handler('right') })
controller.up.onEvent(ControllerButtonEvent.Pressed, () => { cursor.controller_handler('up') })
controller.up.onEvent(ControllerButtonEvent.Repeated, () => { cursor.controller_handler('up') })
controller.down.onEvent(ControllerButtonEvent.Pressed, () => { cursor.controller_handler('down') })
controller.down.onEvent(ControllerButtonEvent.Repeated, () => { cursor.controller_handler('down') })


let width = screen.width;
let height = screen.height;