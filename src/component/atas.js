class Atas extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
            this.innerHTML=`
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand text-white" href="#">Front End News</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            
            </nav> 
            `;
    }
}
customElements.define("nav-comp",Atas);
