window.onload = () => {
    const elements = document.querySelectorAll(".panel");

    function toggleOpen() {
      console.log(this);
      this.classList.toggle('open');
    }

    function openActive(e) {
      if(e.propertyName === "font-size"){
        this.classList.toggle('open-active');
      }
    }

    elements.forEach(element => element.addEventListener('click', toggleOpen));
    elements.forEach(element => element.addEventListener('transitionend', openActive));
}
   