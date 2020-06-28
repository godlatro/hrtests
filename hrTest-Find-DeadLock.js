const connections = [[1], [2], [3, 4], [4], [0]];
const connections2 = [[1, 2, 3], [2, 3], [3], []];
const connections3 = [[1, 2, 3], [2, 3], [], [3], [2]];

const findDeadlock = (a) => {
  if (!a || typeof a !== 'object' || !a.length) return false;

  let lock = false;
  let lockInMiddle = true;

  a.forEach((chain, idx) => {
    if(!chain || !chain.length) {
      lock = false;
      lockInMiddle = false;

      return null;
    }

    chain.forEach((el,idy)=>{
      if(!el && el !== 0) {
        lock = false;
        lockInMiddle = false;
        
        return null;
      }

      if(chain.length - 1 === idy && el < idx) {
        lock = true;

        return null;
      } else {
        lock = false;

        return null;
      }
    });
  });

  console.log(lock && lockInMiddle);

  return (lock && lockInMiddle);
}

findDeadlock(connections);
findDeadlock(connections2);
findDeadlock(connections3);