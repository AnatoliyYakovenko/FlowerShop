!function(){var o,e,l;o=document.querySelector("[data-menu-button]"),e=document.querySelector("[data-menu]"),l=document.querySelector(".mobile__list"),o.addEventListener("click",(function(){var l="true"===o.getAttribute("aria-expanded")||!1;o.classList.toggle("is-open"),o.setAttribute("aria-expanded",!l),e.classList.toggle("is-open")})),l.addEventListener("click",(function(){var l="true"===o.getAttribute("aria-expanded")||!1;o.classList.toggle("is-open"),o.setAttribute("aria-expanded",!l),e.classList.toggle("is-open")})),function(){var o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),openModalThanksBtn:document.querySelector("[data-modal-thanks-open]"),closeModalThanksBtn:document.querySelector("[data-modal-thanks-close]"),modalThanks:document.querySelector("[data-modal-thanks]"),bodyFixed:document.querySelector("[data-body-fixed]")};function e(){o.modal.classList.toggle("is-hidden")}function l(){setTimeout(o.modalThanks.classList.toggle("is-hidden"),1e4)}function t(){o.bodyFixed.classList.toggle("is-fixed")}o.openModalBtn.addEventListener("click",e),o.closeModalBtn.addEventListener("click",e),o.closeModalThanksBtn.addEventListener("click",e),o.openModalThanksBtn.addEventListener("click",l),o.closeModalThanksBtn.addEventListener("click",l),o.openModalBtn.addEventListener("click",t),o.closeModalBtn.addEventListener("click",t),o.closeModalThanksBtn.addEventListener("click",t)}(),function(){var o={openModalFollowBtn:document.querySelector("[data-modal-follow-open]"),closeModalFollowBtn:document.querySelector("[data-modal-follow-close]"),modalFollow:document.querySelector("[data-modal-follow]")};function e(){o.modalFollow.classList.toggle("is-hidden")}o.openModalFollowBtn.addEventListener("click",e),o.closeModalFollowBtn.addEventListener("click",e)}(),function(){var o={openModalFollowTwoBtn:document.querySelector("[data-modal-follow-two-open]"),closeModalFollowTwoBtn:document.querySelector("[data-modal-follow-two-close]"),modalFollowTwo:document.querySelector("[data-modal-follow-two]")};function e(){o.modalFollowTwo.classList.toggle("is-hidden")}o.openModalFollowTwoBtn.addEventListener("click",e),o.closeModalFollowTwoBtn.addEventListener("click",e)}(),function(){var o={openModalFollowBtn:document.querySelector("[data-modal-follow-open]"),closeModalFollowBtn:document.querySelector("[data-modal-follow-close]"),bodyFixed:document.querySelector("[data-body-fixed]"),openModalFollowTwoBtn:document.querySelector("[data-modal-follow-two-open]"),closeModalFollowTwoBtn:document.querySelector("[data-modal-follow-two-close]"),modalFollowTwo:document.querySelector("[data-modal-follow-two]")};function e(){o.bodyFixed.classList.toggle("is-fixed")}o.openModalFollowBtn.addEventListener("click",e),o.closeModalFollowBtn.addEventListener("click",e),o.openModalFollowTwoBtn.addEventListener("click",e),o.closeModalFollowTwoBtn.addEventListener("click",e)}()}();
//# sourceMappingURL=index.a3cfa086.js.map
