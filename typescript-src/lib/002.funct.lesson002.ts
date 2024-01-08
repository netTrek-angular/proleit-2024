
/**
 * wichtig denkt daran das im HTML das UL exisiterit!
 *
 *
 *     <ul id="myList">
 *     </ul>
 */

export interface User {
  id?: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}

interface Post {
  userId: number;
  id?: number;
  title: string;
  completed: boolean;
}

async function getPosts (id: number = 1 ): Promise<Post[]> {
  const response = await fetch( `https://jsonplaceholder.typicode.com/posts` );
  if (!response.ok) {
    throw new Error('Netzwerk-Antwort war nicht ok');
  }

  return response.json() as Promise<Post[]>;
}


const myList = document.getElementById('myList');

const addListener = (li: HTMLLIElement,
                     eventType: string,
                     callback: (li: HTMLLIElement) => void,
                     autoremove: boolean = true
) => {
  const removeLIHandler = () => {
    const handler = () => {
      callback( li );
      if ( autoremove ) li.removeEventListener(eventType, handler)
    };
    return handler;
  }
  const currentHandler = removeLIHandler()
  li.addEventListener(eventType, currentHandler );
  return currentHandler;
}

const addListenerToLi = (li: HTMLLIElement, post: Post ) => {

  const overHandler = addListener(li, 'mouseover', (li) => {
    li.style.backgroundColor = 'red';
  }, false);

  const outHandler = addListener(li, 'mouseout', (li) => {
    li.style.backgroundColor = 'white';
  }, false);

  addListener(li, 'click', async (li) => {
    const usr = await fetch( `https://jsonplaceholder.typicode.com/users/${post.userId}` )
      .then( (response) => response.json() as Promise<User> );
    console.log( usr );
    li.innerText += ` [${usr.username}]`;
  });

};

const truncateString = (str: string, num: number) => {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}

const greatListItemElem = (post: Post) => {
  const li = document.createElement('li');
  li.innerText = `${ truncateString ( post.title, 30 ) } `;
  addListenerToLi(li, post);
  return li;
}


getPosts().then( (posts) => {
  console.log( posts ); // Hier ist Ihre Antwort-Daten
  posts.forEach( post => {
    const li = greatListItemElem(post);
    myList?.appendChild(li);
  });
}).catch( (err) => console.error( err ));


export default {};
