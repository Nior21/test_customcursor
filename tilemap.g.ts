// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000060603010101010101010101010303010606030102020101040401050106010103030301010202020104010506030301030303010102010202040103030103010101030102020202010101030101030101010102010101010101010101010101010101020101010107010404040401010101040404040407030404040404040101040401090807030a0101040404010101040101030303030101010101010101010101010101010101020202020301010101010104040101020202020203030101030303010404010202020202010301010501030301040101010202020103010105030601040401010101010201010101010306030101010101010202010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass1,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileDarkGrass2,sprites.swamp.swampTile0,sprites.swamp.swampTile1,sprites.swamp.swampTile2,sprites.swamp.swampTile19], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
