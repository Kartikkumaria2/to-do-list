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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZUJhci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NpZGUtYmFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2lkZShwcm9qZWN0cyl7XG4gICAgY29uc3Qgc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGUuY2xhc3NMaXN0LmFkZCgnc2lkZScpO1xuICAgIGNvbnNvbGUubG9nKHNpZGUpO1xuICAgIGNvbnN0IGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBhbC5jbGFzc0xpc3QuYWRkKCdzaWRlLXRleHQnKTtcbiAgICBhbC5pbm5lckhUTUwgPSBcIkFsbFwiXG5cbiAgICBzaWRlLmFwcGVuZENoaWxkKGFsKTtcbiAgICBcbiAgICBzaWRlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJykpO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaCgoZWxlbWVudCk9PntcbiAgICAgICAgbGV0IGNvbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBjb21wLmNsYXNzTGlzdC5hZGQoJ3NpZGUtdGV4dCcpO1xuICAgICAgICBcbiAgICAgICAgY29tcC5pbm5lckhUTUwgPSBlbGVtZW50O1xuICAgICAgICBzaWRlLmFwcGVuZENoaWxkKGNvbXApO1xuXG4gICAgICAgIFxuXG4gICAgfSlcblxuICAgIHJldHVybiBzaWRlO1xuXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9