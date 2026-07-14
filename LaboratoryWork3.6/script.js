document.addEventListener('DOMContentLoaded', () => {
    const chessboard = document.getElementById('chessboard');

    // С помощью таблицы 9х9 расчертите экран как черно-белую шахматную доску.
    let nRow = 9;
    do {
        const tableRow = document.createElement('tr');
        let nCol = 9;
        do {
            const tableItem = document.createElement('td');
            tableItem.classList.add(nRow + nCol & 1 ? 'white' : 'black');
            tableRow.appendChild(tableItem);
        } while(--nCol);
        chessboard.appendChild(tableRow);
    } while(--nRow);

    // Используя функцию eval, меняйте каждые полсекунды цвет ячеек друг с другом.
    setInterval(() => {
        const cells = document.querySelectorAll('#chessboard td');
        cells.forEach(cell => {
            for (color of ['black', 'white']){
                eval(`cell.classList.toggle('${color}');`);
            }
        });
    }, 500);
});
