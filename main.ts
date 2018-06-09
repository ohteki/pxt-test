//% weight=70 icon="\u30A1" color=#EC7505 block="カタカナ"
namespace test {

    //% blockId=show_strings block="文字列を表示 %v"
    export function putStr(text: string): void {
      basic.showLeds(`
          . . . . .
          . # . # .
          . . . . .
          # . . . #
          . # # # .
          `);
    }
}
