var prdAmt=0;
var dtlPr="";


function CheckOut(){
    var userName="";
    let finalorderReciept= "";
        if(prdAmt<=0){
            alert("Atleast one product should be selected to continue with checkout");
            return;
        }else
        {
            document.getElementById("checkbutton").style.display="none";

            do{
                userName= prompt("what name should be on the order:");
            }while(userName==""&& userName.length<=0);
            finalorderReciept=
            `<h3><strong>Customer Name:${userName}</strong></h3><table  style="text-align:left";>
                <thead><tr> <th>Items</th> <th>items</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<th>price</th>&nbsp;&nbsp;&nbsp;&nbsp;
                <th>Sub Price</th>
                </tr>               
                </thead>
                <tbody>
                ${dtlPr}
                </tbody>

                <tfoot>
                <tr>
                <td><strong>Total</strong></td>
                <td></td><td></td><td>
                <strong>${prdAmt}</strong>
                </td>
                </tr>
                
                <tr>
                <td><strong> GST/HST 13% : </td><td></td><td></td><td>
                <strong>${(prdAmt*0.13).toFixed(2)}</strong></strong>
                </td>
                </tr>
                <tr>
                <td><strong>Total Amount : </td><td></td><td></td> 
                <td>
                <strong>${(prdAmt +(prdAmt*0.13)).toFixed(2)}</strong></strong>
                </td>
                </tr>
                </tfoot>
                </table>`;
           
            document.getElementById("items").innerHTML= finalorderReciept;          
        }

     }

function addToCart(e){
        let totalPrice=0;
        let price=0;
        let items;
        let isFirst=true;
        do{
            if(isFirst){
            items=prompt("Please let us know required items for you: ") ;
            if(items==null)
            return;
            isFirst=false;
            }
        else{
            items=prompt("items should in number : ","");
            if(items==null)
            return;
        }
        }while(isNaN(items) || (items <= 0) || (items%1));
        
         let productId= e.id;
        switch(productId){
            case "Pizza":    price=12.99;    break;
            case "Pasta":    price=11.99;    break;
            case "Salad":    price=9.99;     break;
            case "Drinks":   price=3.99;     break;
            case "Desserts": price=4.99;     break;
            case "Combo":    price=19.99;    break;
           }       

           totalPrice+=price*items;  
           prdAmt+=totalPrice;
           dtlPr+=`<tr><td>${productId}</td><td>${items}</td><td>$${price}</td><td>${totalPrice}</td></tr>`;     
     
     }


