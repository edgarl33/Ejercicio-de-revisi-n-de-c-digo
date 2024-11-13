package com.Problema;
import java.util.Scanner;

//	Se importa el scanner
public class Problema4 {

		//Se agrego el public static void main, ya que sin el no hubiera sido posible imprimir nada o arrojar algo a consola. 
		public static void main (String  []args) {
		
	    Scanner s = new Scanner(System.in);
	    
	    System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
	    String j1 = s.nextLine();
	    //En el caso de j1 y j2 no contenian en su scanner el system.in imposibilitando el input desde consola. 
	    System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");
	    Scanner s2 = new Scanner(System.in);
	    String j2 = s2.nextLine();
	    
	    
	    //En java el operador lógico == no funciona para String, por lo que se sustituyo por .equals quien si puede comparar dos elementos Strings 
	    if (j1.equals(j2)) {
	      System.out.println("Empate");
	    } else {
	      int g = 2;
	      switch(j1) {
	        case "piedra":
	          if (j2.equals("tijeras")) {
	            g = 1;
	          }

	        case "papel":
	          if (j2.equals("piedra") ) {
	            g = 1;}
	          
	        case "tijera":
	          if (j2.equals("papel")) {
	            g = 1;
	          }
	          break;
	        default:
	      }
	      System.out.println("Gana el jugador " + g);
	    
	      }
	    }
	    

}

		
		
		
	 
