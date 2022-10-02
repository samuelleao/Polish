import "./index.css";
import { Cart } from "../Cart";
import { focusOnlyModal } from '../../utils/focusModal'

export const Navbar = () => {
  setTimeout(() => {
    let bt = document.querySelector(".bt-cart")
    bt.addEventListener("click", () => {
      bt.setAttribute("aria-expanded", true)
      document.body.insertAdjacentHTML("beforeend", Cart(bt));
      focusOnlyModal(true)
    });
  }, 0);
  return `
    <nav class="navbar">
        <div class="container">
            <div class="navbar-wrapper">
                <h1 class="font-1-bold color-grey-1">Polish</h1>
                <ul class="navbar-links">
                <li>
                    <a href="#estofados" class="bt">Estofados</a>
                </li>
                <li>
                    <a href="#estantes" class="bt">Estantes</a>
                </li>
                <li>
                    <a href="#decoracoes" class="bt">Decoração</a>
                </li>
                <li>
                    <button href="" class="bt bt-cart" 
                    aria-label="Abrir carrinho" 
                    aria-haspopup="dialog" 
                    aria-expanded="false" 
                    aria-controls="cart">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span class="cart-number">0</span>
                    </button>
                </li>
                </ul>
            </div>
        </div>
    </nav>
    
    `;
};
