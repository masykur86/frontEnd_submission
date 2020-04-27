class Judul extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `<h1>Front End News</h1>`;
    }
 }
 customElements.define("judul", Judul);

 