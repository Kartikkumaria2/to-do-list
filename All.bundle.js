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
        card.appendChild(checklist_card);

        let imgEdit = document.createElement('img');
        imgEdit.src = _edit_jpeg__WEBPACK_IMPORTED_MODULE_0__;
        card.appendChild(imgEdit);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxsLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFrQzs7QUFFbkI7QUFDZjtBQUNBOztBQUVBLElBQUksa0RBQVc7O0FBRWY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNWOEI7QUFDZjtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQix1Q0FBSTtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0FsbC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NhcmRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjYXJkQ3JlYXRvciBmcm9tIFwiLi9jYXJkc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBbGwodGFza3Mpe1xuICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmlnaHQuY2xhc3NMaXN0LmFkZCgncmlnaHQnKTtcblxuICAgIGNhcmRDcmVhdG9yKHRhc2tzLHJpZ2h0KTtcblxuICAgIHJldHVybiByaWdodDtcbiAgICBcbn0iLCJpbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQuanBlZydcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhcmRDcmVhdG9yKHRhc2tzLHJpZ2h0KXtcbiAgICB0YXNrcy5mb3JFYWNoKChlbGVtZW50KT0+e1xuICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcblxuICAgICAgICBsZXQgdGl0bGVfY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGl0bGVfY2FyZC5pbm5lckhUTUwgPSBlbGVtZW50LnRpdGxlO1xuXG4gICAgICAgIGxldCBkYXRlX2NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRhdGVfY2FyZC5pbm5lckhUTUwgPSBlbGVtZW50LmRhdGU7XG5cbiAgICAgICAgbGV0IG5vdGVzX2NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG5vdGVzX2NhcmQuaW5uZXJIVE1MID0gZWxlbWVudC5ub3RlcztcblxuICAgICAgICBsZXQgY2hlY2tsaXN0X2NhcmQ9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoZWNrbGlzdF9jYXJkLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImNoZWNrYm94XCIpO1xuICAgICAgICBcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCh0aXRsZV9jYXJkKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChkYXRlX2NhcmQpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKG5vdGVzX2NhcmQpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNoZWNrbGlzdF9jYXJkKTtcblxuICAgICAgICBsZXQgaW1nRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWdFZGl0LnNyYyA9IGVkaXQ7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nRWRpdCk7XG5cbiAgICAgICAgcmlnaHQuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICBcbiAgICAgICAgXG4gICAgfSlcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=