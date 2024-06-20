//------------------tache 1
async function iterateWithAsyncAwait(array) {
    for (let i of array) {
      await new Promise(res => setTimeout(res, 1000)); 
      console.log(i);
    }
  }
//iterateWithAsyncAwait([5,4,6]);
//------------------tache 2
async function waitCall() {

        setTimeout(async () => {
            try{
                const response = await fetch('https://fakestoreapi.com/products/1');
                const responseData = await response.json();
                console.log(responseData);
                 return responseData
            }catch(error)
            {
                console.error("Erreur lors de la récupération des données de l'API :", error.message);
            }
           
          }, 2000 );
       
  }
  //waitCall()
//--------------------------tache3
  async function chainedAsyncFunctions() {
    try {
      await waitCall();
      await waitCall();
      await waitCall();
      console.log('Toutes les fonctions asynchrones ont été exécutées ');
    } catch (error) {
      console.error('erreur :', error);
    }
  }
 // chainedAsyncFunctions();

 