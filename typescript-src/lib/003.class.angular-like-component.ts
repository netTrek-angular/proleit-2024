
class NetTrek {

  counter: number = 0;

  constructor(
    private element: Element
  ) {
    this.render();
    this.element.addEventListener('click', this.saban.bind(this));

    setInterval(() => {
      this.render();
    }, 100);
  }

  render(): void {
    if ( this.isDirty ) {
      this.element.innerHTML = this.template;
      console.log('render');
    }
  }

  private get isDirty(): boolean {
    return this.element.innerHTML !== this.template;
  }

  private get template(): string {
    return `
        <div>
            netTrek Inhalt ${this.counter}
        </div>
    `;
  }
  private saban() {
    console.log( ++ this.counter );
    this.render();
    if ( this.counter === 2 ) {
      fetch('https://www.random.org/integers/?num=1&min=1&max=1000&col=1&base=10&format=plain&rnd=new')
        .then(response => {
          if (!response.ok) {
            throw new Error('Netzwerk-Antwort war nicht ok');
          }
          return response.text();
        })
        .then(data => {
          const randomNumber = parseInt(data, 10);
          console.log(randomNumber); // Hier ist Ihre zufällige Zahl
          this.counter = randomNumber;
          // this.render();
        })
        .catch(error => {
          console.error('Es gab ein Problem mit dem fetch-Operation:', error);
        });
    }
  }
}



document.addEventListener('DOMContentLoaded', () => {
  const netTrekElements = document.querySelectorAll('nettrek');
  netTrekElements.forEach(element => {
    const netTrekInstance = new NetTrek(element);
  });
});




const observerCallback: MutationCallback = (mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      mutation.addedNodes.forEach(node => {
        if (node.nodeName.toLowerCase() === 'nettrek' ) {
          const netTrekElements = node as Element;
          if ( netTrekElements.id === '' ) {
            const netTrekInstance = new NetTrek (node as Element);
          }
        }
      });
    }
  }
};

const observerOptions = {
  childList: true,
  subtree: true
};

const observer = new MutationObserver(observerCallback);
observer.observe(document.body, observerOptions);


export default {};
