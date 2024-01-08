// import './lib/001.var.implicity-explicity';
// import './lib/001.var.lists';
// import './lib/001.var.typeing';
// import './lib/001.var.primitiv';
// import './lib/002.funct.syntax'
// import './lib/002.funct.parms'
// import './lib/002.funct.syntax-arrow';



import {getUsr, User} from "./lib/000.helper";

const users = getUsr();
const usesList = document.getElementById('usesList');

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

const addListenerToLi = (li: HTMLLIElement, user: User) => {

  const overHandler = addListener(li, 'mouseover', (li) => {
  li.style.backgroundColor = 'red';
  }, false);

  const outHandler = addListener(li, 'mouseout', (li) => {
    li.style.backgroundColor = 'white';
  }, false);

  addListener(li, 'click', (li) => {
    li.remove();
    users.splice( users.indexOf(user), 1 );
    li.removeEventListener('mouseover', overHandler);
    li.removeEventListener('mouseout', outHandler);
  });

};

const greatListItemElem = (user: User) => {
  const li = document.createElement('li');
  li.innerText = `${user.firstname} ${user.lastname}`;
  addListenerToLi(li, user);
  return li;
}

users.forEach(user => {
  const li = greatListItemElem(user);
  usesList?.appendChild(li);
});


