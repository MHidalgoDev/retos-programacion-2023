class App {
  /*
   * Escribe un programa que reciba un texto y transforme lenguaje natural a
   * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
   *  se caracteriza por sustituir caracteres alfanuméricos.
   * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/)
   *   con el alfabeto y los números en "leet".
   *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
   */
  constructor () {
    this.diccionario = new Map([
      ['1', 'L'],
      ['2', 'R'],
      ['3', 'E'],
      ['4', 'A'],
      ['5', 'S'],
      ['6', 'b'],
      ['7', 'T'],
      ['8', 'B'],
      ['9', 'g'],
      ['0', 'o'],
      ['a', '4'],
      ['e', '3'],
      ['i', '1'],
      ['o', '0'],
      ['u', '(_)'],
      ['A', '4'],
      ['E', '3'],
      ['I', '1'],
      ['O', '0'],
      ['U', '(_)']
    ])

    console.log(this.codificar('Hola me llamo MoureDev'))
  }

  codificar (texto) {
    let output = ""
    for (var character of texto) {
      if (this.diccionario.has(character))
        output = output + this.diccionario.get(character)
      else 
        output = output + character
    }
    return output
  }
}

new App()
