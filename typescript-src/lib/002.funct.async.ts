const loadUser = (): Promise<{name: string}> => {
  return new Promise<{name: string}>( (resolve, reject) => {

    const intervalID = setInterval( () => {
      console.log( 'interval' );
      resolve( {name: 'Max'} );
      clearInterval( intervalID );
    }, 2300 );

    // reject ( 'error')
  } );
}
/*

loadUser()
  .then( (user) => console.log( user ) )
  .catch( (err) => console.error( err ));
*/

interface Post {
  userId: number;
  id?: number;
  title: string;
  completed: boolean;
}


function getPost (id: number = 1 ): Promise<Response> {
  return fetch( `https://jsonplaceholder.typicode.com/posts/${id}` );
}

getPost()
  .then( (response) => {
    if (!response.ok) {
      throw new Error('Netzwerk-Antwort war nicht ok');
    }
    return response.json() as Promise<Post>;
  } )
  .then( (post) => {
    console.log( post ); // Hier ist Ihre Antwort-Daten
    console.log( post.title); // Hier ist Ihre Antwort-Daten
  } )
  .catch( (err) => console.error( err ));


async function getBool () {
  return true;
}

getBool().then( (bool) => console.log( bool ) );



async function getPost2 (id: number = 1 ): Promise<Post> {
  const response = await fetch( `https://jsonplaceholder.typicode.com/posts/${id}` );


  if (!response.ok) {
    throw new Error('Netzwerk-Antwort war nicht ok');
  }

  return response.json() as Promise<Post>;
}

getPost2()
  .then( (post) => {
    console.log( post ); // Hier ist Ihre Antwort-Daten
    console.log( post.title); // Hier ist Ihre Antwort-Daten
  } )
  .catch( (err) => console.error( err ));


const getPost3 = async (id: number = 1 ): Promise<void> => {
  try {
    const response = await getPost2( id );
    console.log(response)
  } catch (e) {
    console.error( e );
  }


}

getPost3( 22 );
// getPost3( 4565465465465462 ); // to simulate error

export default {};
