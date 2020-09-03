
    names = []
    quantity = []
    price = []

        function AddItem(){
            
        names.push(document.getElementById('pname').textContent)
        quantity.push(parseInt(document.getElementById('quantity').textContent))
        price.push(parseInt(document.getElementById('price').textContent))
        
        displayCart();
            
        }
        
        function displayCart(){
            
            productsInCart = '<table> <tr> <th> Name </th> <th> Quantity </th> <th> price </th> <th> Total </th>';
            
            total=0;
            
            for(i=0; i<names.length; i++){
                
                total+=quantity[i]*price[i]
                 productsInCart += "<tr> <td>" + names[i]+ "</td> <td>"+ quantity[i]+
                                    "</td> <td>"+price[i]+"</td> <td>" +quantity[i]*price[i]+
                                    "</td> <td> <button class='btn btn-danger' onClick='deleteProduct("+i+")'> X </button></td></tr>"
            }
            
            productsInCart += '<tr> <td></td> <td></td> <td></td> <td>'+ total + '</td> </tr> </table>'
            
            $('.show-modal').html(productsInCart);
            //document.getElementById.innerHTML = productsInCart;
            //alert(productsInCart);
        }
        
        function deleteProduct(x){
            names.splice(x,1);
            quantity.splice(x,1);
            price.splice(x,1);
            displayCart();
            
            
        }