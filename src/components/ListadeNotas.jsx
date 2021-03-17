import React, { Component } from "react"
import Cards from './card'
export default class ListadeNotas extends Component{
    
    render(){
        return(
              <ul>
                {Array.of('Trabalho','Trabalho','Estudos').map(categoria => {
                  return(
                    <li>
                      <div>
                        {categoria}
                      </div>
                      <Cards/>
                    </li>
                  );
                })}
                  
            </ul>
          );
    }
  }
              
    
  