// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100003030303030303030303030303030303030303030303030303030404040303030303040302020404040404030404030303030403020303030303030303040303030304040403030103040404040403030303030404040301030404040304030303030304030403010303040303030303030303040304030103030403030303030303030403040301030304040404030303030404040403010303040303030303030304040304030303030403030403030303040302040203030304030404030303030403020402020202040304030303030304040404040404040404040303030303040303030303030303030303030303030303030303030303030303030303`, img`
. . . . . . . . . . 2 2 2 . . . 
. 2 2 2 2 2 2 2 2 2 . . . 2 2 . 
. 2 . 2 . . . . . . . 2 . . 2 . 
. 2 . 2 . 2 2 2 2 2 2 2 2 . 2 . 
. 2 . . . 2 2 . . . . . . . 2 . 
. 2 2 . . . 2 . 2 . . . 2 . 2 . 
. 2 2 . 2 . 2 . 2 2 . 2 2 2 2 . 
. 2 2 . 2 . 2 . 2 2 . 2 2 2 2 . 
. 2 2 . 2 . 2 . 2 2 . . . . 2 . 
. 2 . . . . . . 2 2 . 2 2 2 2 . 
. 2 . . 2 . 2 2 2 2 . 2 2 . 2 . 
. 2 . 2 . . . 2 2 2 . 2 . . 2 . 
. 2 . 2 . . . . . . . 2 . 2 2 . 
. 2 . . . . . . . . . . . 2 2 . 
. 2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.brick,sprites.dungeon.hazardLava1,sprites.dungeon.floorLight2,sprites.builtin.forestTiles10], TileScale.Sixteen);
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
