function getElementWidth(content, padding, border) {
    // Перетворення рядків у числа, відкидання 'px'
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding);
    const borderWidth = parseFloat(border);

    // Розрахунок загальної ширини елемента за умови box-sizing: border-box
    const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;

    // Повернення загальної ширини елемента як числа
    return totalWidth;
}
console.log(getElementWidth("50px", "8px", "4px"));    // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px"));   // 200

