"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["All"],{

/***/ "./src/All.js":
/*!********************!*\
  !*** ./src/All.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createAll)
/* harmony export */ });
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ "./src/cards.js");


function createAll(tasks){
    const right = document.createElement('div');
    right.classList.add('right');

    (0,_cards__WEBPACK_IMPORTED_MODULE_0__["default"])(tasks,right);

    return right;
    
}

/***/ }),

/***/ "./src/cards.js":
/*!**********************!*\
  !*** ./src/cards.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cardCreator)
/* harmony export */ });
/* harmony import */ var _edit_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.jpeg */ "./src/edit.jpeg");

function cardCreator(tasks,right){
    tasks.forEach((element)=>{

        let card = document.createElement('div');
        card.classList.add('card');

        let title_card = document.createElement('p');
        title_card.innerHTML = element.title;

        let date_card = document.createElement('p');
        date_card.innerHTML = element.date;

        let notes_card = document.createElement('p');
        notes_card.innerHTML = element.notes;

        let checklist_card= document.createElement('input');
        checklist_card.setAttribute("type","checkbox");
        
        card.appendChild(title_card);
        card.appendChild(date_card);
        card.appendChild(notes_card);
        
        card.setAttribute("id",element.id);
        let imgEdit = document.createElement('img');
        imgEdit.src = _edit_jpeg__WEBPACK_IMPORTED_MODULE_0__;
        card.appendChild(imgEdit);
        if(element.priority == "High"){
            card.style.backgroundColor = "red";
            card.style.color = "white";
        }
        else if(element.priority == "medium"){
            card.style.backgroundColor = "yellow";
            card.style.color = "brown";
        }
        else{
            card.style.backgroundColor = "green";
            card.style.color = "black";
        }
        if(element.checklist ==true){
            checklist_card.checked =true;
        }
        card.append(checklist_card);
        right.appendChild(card);
        
        
    })
}

/***/ }),

/***/ "./src/edit.jpeg":
/*!***********************!*\
  !*** ./src/edit.jpeg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17adf21299ac5e7a71d8.jpeg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/All.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxsLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFrQzs7QUFFbkI7QUFDZjtBQUNBOztBQUVBLElBQUksa0RBQVc7O0FBRWY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNWOEI7QUFDZjtBQUNmOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVDQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0FsbC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NhcmRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjYXJkQ3JlYXRvciBmcm9tIFwiLi9jYXJkc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBbGwodGFza3Mpe1xuICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmlnaHQuY2xhc3NMaXN0LmFkZCgncmlnaHQnKTtcblxuICAgIGNhcmRDcmVhdG9yKHRhc2tzLHJpZ2h0KTtcblxuICAgIHJldHVybiByaWdodDtcbiAgICBcbn0iLCJpbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQuanBlZydcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhcmRDcmVhdG9yKHRhc2tzLHJpZ2h0KXtcbiAgICB0YXNrcy5mb3JFYWNoKChlbGVtZW50KT0+e1xuXG4gICAgICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuXG4gICAgICAgIGxldCB0aXRsZV9jYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0aXRsZV9jYXJkLmlubmVySFRNTCA9IGVsZW1lbnQudGl0bGU7XG5cbiAgICAgICAgbGV0IGRhdGVfY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZGF0ZV9jYXJkLmlubmVySFRNTCA9IGVsZW1lbnQuZGF0ZTtcblxuICAgICAgICBsZXQgbm90ZXNfY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbm90ZXNfY2FyZC5pbm5lckhUTUwgPSBlbGVtZW50Lm5vdGVzO1xuXG4gICAgICAgIGxldCBjaGVja2xpc3RfY2FyZD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY2hlY2tsaXN0X2NhcmQuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiY2hlY2tib3hcIik7XG4gICAgICAgIFxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHRpdGxlX2NhcmQpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGRhdGVfY2FyZCk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQobm90ZXNfY2FyZCk7XG4gICAgICAgIFxuICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsZWxlbWVudC5pZCk7XG4gICAgICAgIGxldCBpbWdFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltZ0VkaXQuc3JjID0gZWRpdDtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWdFZGl0KTtcbiAgICAgICAgaWYoZWxlbWVudC5wcmlvcml0eSA9PSBcIkhpZ2hcIil7XG4gICAgICAgICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICBjYXJkLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZWxlbWVudC5wcmlvcml0eSA9PSBcIm1lZGl1bVwiKXtcbiAgICAgICAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgICAgIGNhcmQuc3R5bGUuY29sb3IgPSBcImJyb3duXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgICAgY2FyZC5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICAgICAgfVxuICAgICAgICBpZihlbGVtZW50LmNoZWNrbGlzdCA9PXRydWUpe1xuICAgICAgICAgICAgY2hlY2tsaXN0X2NhcmQuY2hlY2tlZCA9dHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjYXJkLmFwcGVuZChjaGVja2xpc3RfY2FyZCk7XG4gICAgICAgIHJpZ2h0LmFwcGVuZENoaWxkKGNhcmQpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfSlcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=