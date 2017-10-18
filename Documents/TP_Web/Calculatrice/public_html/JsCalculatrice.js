/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var operande ="";
var resultat="";
var operateur="";
var affich = document.getElementById('affichage_input');



function initVar(param){
    affich = document.getElementById('affichage_input');
   operateur = operateur+param;
   //alert(operateur);
   //alert(affich);
   affich.setAttribute("value", operateur);   
   //operateur= parseFloat(operateur);
}

function calcul(op){
    switch(op){
        case "+":
            //resultat=resultat+parseFloat(operateur);
            affich.setAttribute("value", "");
            resultat=resultat+operateur+"+";
            operateur="";
            //resultat=eval(resultat);
            //affich.setAttribute("value", resultat);
            break;
        case "-":
            //resultat=resultat-parseFloat(operateur);
            //affich.setAttribute("value", resultat);
            affich.setAttribute("value", "");
            resultat=resultat+operateur+"-";
            operateur="";
            break;
        case "x":
            //resultat=resultat*parseFloat(operateur);
            //affich.setAttribute("value", resultat);
            affich.setAttribute("value", "");
            resultat=resultat+operateur+"*";
            operateur="";
            break;
        case "/":
            //resultat=resultat/parseFloat(operateur);
            //affich.setAttribute("value", resultat);
            affich.setAttribute("value", "");
            resultat=resultat+operateur+"/";
            operateur="";
            break;
        case "=":
            resultat = resultat+operateur;
            resultat=eval(resultat);
            affich.setAttribute("value", resultat);
            operateur="";
            break;
        default:
            resultat=0;
            
    }
}
