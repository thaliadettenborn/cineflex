import React,{Component, createContext} from 'react';

const DataContext = createContext();
export default DataContext;

export class DataProvider extends Component{
  render(){
    return(
      <DataContext.Provider>
        {this.props.children}
      </DataContext.Provider>
    )
  }
}
