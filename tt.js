function primeNumber (nbr) {
    for(let i = 2; i < nbr; i++)
      if(nbr%i === 0) return false;
    return nbr > 1;
  }
   console.log(primeNumber(2))