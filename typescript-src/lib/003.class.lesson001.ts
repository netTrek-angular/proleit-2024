export interface UserDto {
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


interface PostDto {
  userId: number
  id?: number
  title: string
  body: string
}

interface PostService {

  loadPosts(): void;
  getPostById(id: number): Promise<PostDto | undefined>;
  getPosts(): Promise<PostDto[]>;

}

class PostServiceEvent extends Event {

  static readonly POST_LOADED_EVENT = 'postsLoaded';

  constructor( public posts: PostDto[], type: string = PostServiceEvent.POST_LOADED_EVENT ) {
    super( type );
  }

}
class PostServiceEventDispatcher extends EventTarget {
  protected posts?: PostDto[];

  dispatchPostsLoadedEvent( posts: PostDto[] ) {
    this.posts = posts;
    super.dispatchEvent( new PostServiceEvent( posts ) );
  }

  override dispatchEvent(event: PostServiceEvent): boolean {
    throw new Error('use dispatchPostsLoadedEvent instead');
  }

  override addEventListener(type: string, callback: EventListener, options?: AddEventListenerOptions | boolean) {
    if ( this.posts ) {
      callback.call( this, new PostServiceEvent( this.posts ) );
    } else {
      return super.addEventListener(type, callback, options);
    }
  }
}

class Post extends PostServiceEventDispatcher implements PostService {

  private _postLoaded: boolean = false;
  private _postLoadingStarted: boolean = false;

  loadPosts(): void {
    if ( this._postLoadingStarted ) return;
    this._postLoadingStarted = true;
    fetch( 'https://jsonplaceholder.typicode.com/posts' )
      .then( response => response.json()  )
      .then( posts => {
        this._postLoaded = true;
        this.dispatchPostsLoadedEvent( posts as PostDto[] );
      } );
    console.log( 'loadPosts' );
  }

  async getPostById( id: number ): Promise<PostDto | undefined> {
    if ( !this._postLoaded ) {
      await new Promise( resolve => {
        this.addEventListener( PostServiceEvent.POST_LOADED_EVENT, resolve );
      } );
    }
    return this.posts!.find( post => post.id === id );
  }

  async getPosts(): Promise<PostDto[]> {
    if ( !this._postLoaded ) {
      await new Promise( resolve => {
        this.addEventListener( PostServiceEvent.POST_LOADED_EVENT, resolve );
      } );
    }
    return this.posts!;
  }

}

interface UsersService {
  getUserById(id: number): Promise<UserDto | undefined>;
}

class User implements UsersService {

   private userMap = new Map<number, UserDto>();

    async getUserById(id: number): Promise<UserDto | undefined> {
      if (this.userMap.has(id)) {
        const user = this.userMap.get(id);
        console.log('from cache', user );
        return user;
      }
      return fetch( `https://jsonplaceholder.typicode.com/users/${id}` )
        .then( response => response.json() as Promise<UserDto>  )
        .then( user => {
          this.userMap.set(id, user);
          console.log('from fetch', user );
          return user;
        } );
    }
}


class Helper {
  static truncateString = (str: string, num: number) => {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + '...'
  }
}

abstract class ListItem<T> {
  get li(): HTMLLIElement {
    return this._li;
  }
  private _li!: HTMLLIElement;


  constructor ( public readonly text: string, public payload: T ) {
    this.greateListItem( text );
  }

  protected greateListItem(text: string) {
    this._li = document.createElement('li');
    this._li.innerText = `${ this.text } `;
    this.addListener();
  }

  protected greateListener ( eventType: string,
                           callback: () => void,
                           autoremove: boolean = true
  ) {
    const removeLIHandler = () => {
      const handler = () => {
        callback();
        if ( autoremove ) this.li.removeEventListener(eventType, handler)
      };
      return handler;
    }
    const currentHandler = removeLIHandler()
    this.li.addEventListener(eventType, currentHandler );
    return currentHandler;
  }

  abstract addListener(): void;

}

class PostListItem extends ListItem<PostDto> {

  static readonly USERS = new User()

  constructor( post: PostDto ) {
    super( Helper.truncateString ( post.title, 30 ), post );
  }

  addListener(): void {
    const overHandler = this.greateListener('mouseover', () => {
      this.li.style.backgroundColor = 'red';
    }, false);

    const outHandler = this.greateListener('mouseout', () => {
      this.li.style.backgroundColor = 'white';
    }, false);

    this.greateListener('click', async () => {
      const usr = await PostListItem.USERS.getUserById( this.payload.userId );
      // console.log( usr );
      this.li.innerText += ` [${usr?.username}]`;
    });
  }
}

const postService = new Post();
postService.getPosts().then( posts => {
  const myList = document.getElementById('myList');
  posts.forEach( post => {
    const postItem = new PostListItem( post );
    myList?.appendChild( postItem.li );
  } );
} );

postService.loadPosts();

export default {};
