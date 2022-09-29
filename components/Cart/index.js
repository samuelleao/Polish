import "./index.css";
import { ProductCart } from "../ProductCart";
import { productsCart as data } from '../../utils/produtcsData'

export const Cart = (productsCart = data) => {
  setTimeout(() => {
    document
      .querySelector("#button-close-modal")
      .addEventListener("click", () => {
        document.querySelector(".modal-cart").remove();
      });
  }, 0);

  return `
    <div class="modal-wrapper modal-cart">
        <div class="modal">
            <div class="modal-header">
                <h4 class="font-2-medium color-grey-1">Carrinho de compras</h4>
                <button class="bt close" id="button-close-modal" aria-label="Fechar carrinho">X</button>
            </div>
            <div class="modal-body">
                <p class="font-3-regular color-grey-2 mb-4">Aqui nessa seção você pode acessar todos os produtos que selecionou para comprar</p>
            </div>
            <div class="modal-products-cart-area">
            ${
                productsCart.map((element)=>(
                    ProductCart(element)
                )).join('')
            }
        </div>
        </div>
    </div>
    `;
};
