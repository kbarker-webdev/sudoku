let puzzle1 = [[ 8,9,5,7,4,2,1,3,6 ],
[ 8,7,1,9,6,3,4,8,5 ],
[ 4,6,3,5,8,1,7,9,2 ],
[ 9,3,4,6,1,7,2,5,8 ],
[ 5,1,7,2,3,8,9,6,4 ],
[ 6,8,2,4,5,9,3,7,1 ],
[ 1,5,9,8,7,4,6,2,3 ],
[ 7,4,6,3,2,5,8,1,9 ],
[ 3,2,8,1,9,6,5,4,7 ]];

let puzzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 2,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

let puzzleCopy = [[ 8,9,5,7,4,2,1,3,6 ],
                  [ 2,7,1,9,6,3,4,8,5 ],
                  [ 4,6,3,5,8,1,7,9,2 ],
                  [ 9,3,4,6,1,7,2,5,8 ],
                  [ 5,1,7,2,3,8,9,6,4 ],
                  [ 6,8,2,4,5,9,3,7,1 ],
                  [ 1,5,9,8,7,4,6,2,3 ],
                  [ 7,4,6,3,2,5,8,1,9 ],
                  [ 3,2,8,1,9,6,5,4,7 ]];

let p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 8,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];



function getRow(sudokuGrid, rowIndex) {
    return sudokuGrid[rowIndex];
}

function getColumn(sudokuGrid, columnIndex) {
    let column = [];
    for (let i = 0; i < sudokuGrid.length; i++){
        column.push(sudokuGrid[i][columnIndex]);
    }
    return column;
}

function getSection(sudokuGrid, x, y) {
    let xArray = [];
    let yArray = [];
    let resultArray = [];

    switch (y) {
        case 0:
            xArray = [0, 1, 2];
            break;
        case 1:
            xArray = [3, 4, 5];
            break;
        case 2:
            xArray = [6, 7, 8];
            break;
    }
    switch (x) {
        case 0:
            yArray = [0, 1, 2];
            break;
        case 1:
            yArray = [3, 4, 5];
            break;
        case 2:
            yArray = [6, 7, 8];
            break;
    }

    for (j = 0; j < 3; j++) {
        let x = xArray[j];
        for (i = 0; i < 3; i++) {
            resultArray.push(sudokuGrid[x][yArray[i]]);
        }
    }
    
    return resultArray;
}

function includes1to9(section) {
    for (num = 1; num < 10; num++) {
        let count = 0;
        for (i = 0; i < section.length; i++) {
            if (num === section[i]) {
                count += 1;
            }
        }
        if (count != 1) {
            return false;
        }
    }
    return true;
} 

function sudokuChecker(sudokuGrid) {
    let idx = 0;
    while (idx <= 8) {
        if (includes1to9(getRow(sudokuGrid, idx)) !== true) {
            return false;
        }
        if (includes1to9(getColumn(sudokuGrid, idx)) !== true) {
            return false;
        }
        idx++;
    }
    for (x = 0; x < 3; x++) {
        for (y = 0; y < 3; y++) {
            if (includes1to9(getSection(sudokuGrid, x, y)) != true) {
                return false;
            }
        }
    }
    return true;
}

function isSame(sudokuGrid1, sudokuGrid2) {
    let idx = 0;
    while (idx <= 8) {
        let arr1 = getRow(sudokuGrid1, idx);
        let arr2 = getRow(sudokuGrid2, idx);

        if (arr1.length !== arr2.length) {
            return false;
        }
        for (i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        idx++;
    }
    return true;
}

console.log(sudokuChecker(puzzle1));
console.log(sudokuChecker(puzzle));
console.log(sudokuChecker(puzzleCopy));
console.log(sudokuChecker(p8zzle));
console.log(isSame(puzzle, p8zzle));
console.log(isSame(puzzle, puzzleCopy));