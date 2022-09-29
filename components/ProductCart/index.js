export const ProductCart = (productsCart) =>{
    return `
    <div class="cart-product">
        <img src="${productsCart.img}" alt="">
        <h5 class="cart-product-title font-3-medium">${productsCart.title}</h5>
        <strong class="cart-product-price font-4-bold">${Intl.NumberFormat(
        "pt-br",
        {
            style: "currency",
            currency: "BRL",
        }
        ).format(productsCart.price)}</strong>
    </div>
    `
}