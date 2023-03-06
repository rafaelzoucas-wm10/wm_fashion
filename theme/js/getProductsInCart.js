// $(document).ready(async function () {
//     var dataSession = $("html").attr("data-session");
//     var cart_data = [];
    
//     try {
//         var response = await $.ajax({
//             method: "GET",
//             url: "/web_api/cart/" + dataSession
//         });
//         cart_data = response;
//         console.log(response);
//     } catch (error) {
//         var response = $.parseJSON(error.responseText);
//         console.log(response);
//     }
    
//     if (cart_data && cart_data.length > 0) {
//         // cria um elemento HTML oculto contendo a estrutura do sideCart_product
//         var template = $('.sideCart_product_template').clone().removeClass('sideCart_product_template').css('display','flex');
    
//         cart_data.map(element => {
//             // clona o template
//             var sideCart_product = template.clone();
//             const cart = element.Cart
//             const price = (parseFloat(cart.price) * parseFloat(cart.quantity)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    
//             // substitui as informações da cópia pelo objeto de dados da iteração do map()
//             sideCart_product.find('.thumb img').attr('src', cart.product_image.thumbs["180"].http);
//             sideCart_product.find('.productName_view').text(cart.product_name);
//             sideCart_product.find('.productAmount_view').text(cart.quantity);
//             sideCart_product.find('.price_view').text(price);
    
//             // exibe a cópia na lista de produtos
//             $('.sideCart_products_list').append(sideCart_product);
//         });
//     }
// });

console.log("getProducts")