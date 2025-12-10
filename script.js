function selecionarDeck(c1, c2, c3, c4, c5, c6, c7, c8) {
  let deck = ((c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8) / 8).toFixed(1);

  if (deck <= 3.0) {
    return `O custo médio do seu deck é ${deck}. Ele é um deck leve!`;
  } else if (deck <= 4.0) {
    return `O custo médio do seu deck é ${deck}. Ele é um deck moderado!`;
  } else {
    return `O custo médio do seu deck é ${deck}. Ele é um deck pesado!`;
  }
}
