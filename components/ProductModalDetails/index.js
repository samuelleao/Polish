import "./index.css";

export const ProductModalDetails = ({
  productImageUrl,
  produtoTitle,
  productDescription,
}) => {
  setTimeout(() => {
    document
      .querySelector("#button-close-modal")
      .addEventListener("click", () => {
        document.querySelector(".modal-product-details").remove();
      });
  }, 0);
  return /* html */ `
      <div class="modal-wrapper modal-product-details">
        <div class="modal">
          <img src="${productImageUrl}" alt="" class="product-modal-img">
          <div class="modal-header">
            <button class="bt close" id="button-close-modal" aria-label="Fechar detalhes do produto">X</button>
          </div>
          <div class="modal-body">
              <h5 class="font-1-bold color-grey-1">${produtoTitle}</h5>
              <p class="font-3-regular color-grey-2">${productDescription}</p>
          </div>
        </div>
      </div>
    `;
};
