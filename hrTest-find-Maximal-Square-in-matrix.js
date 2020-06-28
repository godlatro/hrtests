const matrix = [
  ['1', '0', '1', '1', '1'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0'],
  ['1', '0', '0', '1', '0']
]

function maximalSquare(m) {
  if(!m || typeof m !== 'object' || !m.length) return 0;
  let maxSq = 0;
  let square = [...m.map(e=>e.map(e=>Number(e)))];

  m.forEach((row,idx) => {
      row.forEach((col,idy) => {
        if(Number(col) === 0) {
          return null;
        } 
        
        if(Number(col) > 0){
          const sqSize = 1 + Math.min(
            (square[idx] && square[idx][idy-1]) || 0,
            (square[idx-1] && square[idx-1][idy-1]) || 0,
            (square[idx-1] && square[idx-1][idy]) || 0
          );
          square[idx][idy] = sqSize;
          
          if(sqSize > maxSq) { maxSq = sqSize }
        }
    });
  });
  
  console.log('max square',maxSq);

  return maxSq;
}

maximalSquare(matrix);