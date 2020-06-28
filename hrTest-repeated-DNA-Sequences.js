const MakeStr = (length = 4920) => {
    let result = '';
    const chars = 'acgt';
  
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  
    return result.toUpperCase();
  }

const s = "GGGTTTGGGTAAAAACCCCCAAAAACCCCCCAAAAAGGGTTTAAGAACCCCCATAGGAACCCCCAAACCDGAACCCCCAT"+MakeStr();

const repeatedDNASequences = (dna) => {
  if(!dna || typeof dna !== 'string') return [];
  const seqs = dna.match(/[A-Z]{10}/gi).sort();
  console.log(seqs);

  return seqs;
}

repeatedDNASequences(s);