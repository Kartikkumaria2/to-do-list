"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["sideBar"],{

/***/ "./src/side-bar.js":
/*!*************************!*\
  !*** ./src/side-bar.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSide)
/* harmony export */ });

function createSide(projects){
    
    const side = document.createElement('div');
    side.classList.add('side');
    console.log(side);
    const al = document.createElement('h3');
    al.classList.add('side-text');
    al.innerHTML = "All"

    side.appendChild(al);
    
    side.appendChild(document.createElement('hr'));

    projects.forEach((element)=>{
        let comp = document.createElement('h3');
        comp.classList.add('side-text');
        
        comp.innerHTML = element;
        side.appendChild(comp);

        

    })

    return side;

}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/side-bar.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZUJhci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2lkZS1iYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTaWRlKHByb2plY3RzKXtcbiAgICBcbiAgICBjb25zdCBzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZS5jbGFzc0xpc3QuYWRkKCdzaWRlJyk7XG4gICAgY29uc29sZS5sb2coc2lkZSk7XG4gICAgY29uc3QgYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGFsLmNsYXNzTGlzdC5hZGQoJ3NpZGUtdGV4dCcpO1xuICAgIGFsLmlubmVySFRNTCA9IFwiQWxsXCJcblxuICAgIHNpZGUuYXBwZW5kQ2hpbGQoYWwpO1xuICAgIFxuICAgIHNpZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSk7XG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKChlbGVtZW50KT0+e1xuICAgICAgICBsZXQgY29tcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGNvbXAuY2xhc3NMaXN0LmFkZCgnc2lkZS10ZXh0Jyk7XG4gICAgICAgIFxuICAgICAgICBjb21wLmlubmVySFRNTCA9IGVsZW1lbnQ7XG4gICAgICAgIHNpZGUuYXBwZW5kQ2hpbGQoY29tcCk7XG5cbiAgICAgICAgXG5cbiAgICB9KVxuXG4gICAgcmV0dXJuIHNpZGU7XG5cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=