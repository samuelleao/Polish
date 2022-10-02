import "./index.css";
import { ProductCart } from "../ProductCart";
import { productsCart } from '../../utils/produtcsData'
import { focusOnlyModal } from '../../utils/focusModal'

export const Cart = (bt = HTMLButtonElement) => {
  setTimeout(() => {
    document
      .querySelector("#button-close-modal")
      .addEventListener("click", () => {
        document.querySelector(".modal-cart").remove();
        bt.setAttribute("aria-expanded", false)
        focusOnlyModal(false)
      });
  }, 0);

  return `
    <div class="modal-wrapper modal-cart">
        <div class="modal" 
        aria-labelledby="cart-title" 
        aria-describedby="cart-description" 
        tabindex="-1"
        role="alertdialog"
        id="cart">
            <div class="modal-header">
                <h4 class="font-2-medium color-grey-1" id="cart-title">Carrinho de compras</h4>
                <button class="bt close" id="button-close-modal" aria-label="Fechar carrinho">X</button>
            </div>
            <div class="modal-body">
                <p class="font-3-regular color-grey-2 mb-4" id="cart-description">Aqui nessa seção você pode acessar todos os produtos que selecionou para comprar</p>
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
