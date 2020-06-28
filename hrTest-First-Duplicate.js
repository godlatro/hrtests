const a = [2, 4, 2,4, 3, 5, 1,1,1, 5, 4,2];

const firstDuplicate = (a) => {
    if (!a || typeof a !== 'object' || !a.length) return 0;

    const allDpc = a.map((elm,idx,arr) => {
        const iamadupl = arr.indexOf(elm,idx+1);
        if(iamadupl > 0) {
            return [elm,iamadupl];
        }

        return -1;
    }).filter(e=>e[1] > 0).sort((a,b)=>{
        if(a[1] > b[1]) return 1;
        return -1;
    });
    
    const fstDpc = (allDpc && allDpc[0] && allDpc[0][0]) || -1;

    console.log(fstDpc);

    return fstDpc;
}

firstDuplicate(a);