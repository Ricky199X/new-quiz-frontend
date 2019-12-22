// we want to set up a chain of events that will enable us to run this program

document.addEventListener('DOMContentLoaded', () => {
   const container = document.querySelector('#app-container')

   // instantiate an app with that 
   new App(container)
})