export const focusOnlyModal = (stateModal) => {
  if (stateModal) {
    document
      .querySelectorAll(
        "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex='0'] button"
      )
      .forEach((e) => {
        e.toggleAttribute("disabled");
      });
    document.querySelector("[role=alertdialog]").querySelectorAll("*").forEach((element) => {
      element.removeAttribute("disabled");
    });
  } else {
    document.querySelectorAll("*").forEach((element) => {
      element.removeAttribute("disabled");
    });
  }
};
