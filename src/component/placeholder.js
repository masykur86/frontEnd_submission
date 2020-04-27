class PlaceHolder extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
            this.innerHTML=`
            <div class="ph-item">
            <div class="ph-col-12">
              <div class="ph-row">
                <div class="ph-col-12"></div>
                <div class="ph-col-12"></div>
                <div class="ph-col-12"></div>
                <div class="ph-col-12"></div>
                <div class="ph-col-12"></div>              
              </div>
            </div>      
          </div>
            `;
    }
}
customElements.define("placeholder-comp",PlaceHolder);
