import "./index.css";
import {
  products,
  productsCart,
  productsCategory,
} from "../../utils/produtcsData";
import { ProductModalDetails } from "../ProductModalDetails";

export const Product = ({ title, description, img, price, category, id }) => {
  window.onload = () => {
    Array.from(document.querySelectorAll(".button-more-detail")).map(
      (buttonOpenModal) => {
        buttonOpenModal.addEventListener("click", () => {
          const details = {
            produtoTitle: buttonOpenModal.getAttribute("data-product-title"),
            productDescription: buttonOpenModal.getAttribute(
              "data-product-description"
            ),
            productImageUrl: buttonOpenModal.getAttribute("data-product-img"),
          };
          document.body.insertAdjacentHTML("beforeend", ProductModalDetails(details));
        });
      }
    );

    Array.from(document.querySelectorAll("[data-product-button-add]")).forEach(
      (element) => {
        element.addEventListener("click", () => {
          const newProductInCart = products.find((product) => {
            return (
              product.id ==
              Number(element.getAttribute("data-product-button-add"))
            );
          });
          productsCart.push(newProductInCart)
          document.querySelector(".cart-number").textContent = productsCart.length
        });
      }
    );
  };
  return `
    <div class="product-card">
      <div class="product-card-header">
        <img src="${img}" alt="${title}" title="${title}" width="278px" height="164px" />
        <button class="bt like" aria-label="Favoritar Produto">
            <i class="fa-solid fa-heart"></i>
          </svg>
        </button>
      </div>
      <div class="product-card-body">
        <span class="font-4-400 color-grey-2">${
          productsCategory[category]
        }</span>
        <h3 class="font-3-medium">
          ${title}
        </h3>
        <strong class="font-3-bold">${Intl.NumberFormat("pt-br", {
          style: "currency",
          currency: "BRL",
        }).format(price)}</strong>
      </div>
      <div class="product-card-footer">
        <button class="bt button-more-detail" 
        data-product-img="${img}" 
        data-control-product="true" 
        data-product-title="${title}" 
        data-product-description="${description}">
          Ver mais detalhes
        </button>
        <button 
          class="bt" 
          aria-label="Adicionar ao carrinho" 
          title="Adicionar ao carrinho" 
          data-product-button-add="${id}"
        >
          <i class="fa-solid fa-cart-plus"></i>
        </button>
      </div>
    </div>
    `;
};