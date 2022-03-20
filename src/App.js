import logo from './Amazon.png';
import './App.css';
import ProductData from './ProductData';
import {FitBitCards,SelectedFitBit} from './FitBitCards';
import { Component } from 'react';

class App extends Component {

    state = {
      selectedColor: ProductData.colorOptions[0],
      feature: "Time"
    }   

  fitbitOptions = ProductData.colorOptions.map((item, pos) => {
      return(
      <FitBitCards styleName ={item.styleName} 
                    imageUrl = {item.imageUrl}
                    key = {pos} 
                    onSelection = {() => this.onFitBitSelection(pos)}/>
      );
  })

  onFitBitSelection = (pos)  => {
    this.setState(
    {selectedColor: ProductData.colorOptions[pos]}
    )  
  }
  
  selectedFeature = (featureItem) => {
    this.setState(
      {  feature: featureItem}
     )    
  }

  render(){      

      return (
        <div className="App">
          <div className="App-header">
            <img className='image-style' src={logo} alt="logo" />    
          </div>    
          <div className='page-content'>
             {/* Display the selected watch */}
            <div className='product-display-style'>              
              <SelectedFitBit styleName ={this.state.selectedColor.styleName} 
                    imageUrl = {this.state.selectedColor.imageUrl}
                    feature= {this.state.feature}
                    />        
            </div>
            
            {/* Display the content */}
            <div className='content-display'>
              <div className='heading'> {ProductData.title}</div>
              <div className='description'>{ProductData.description}</div>
              <br></br>
              <div className='color-heading'>Select Color</div>    
              <div className='displayWatch'>
              {this.fitbitOptions}
              </div>   
              <div className='color-heading'>Features</div>    
              <div className='featureList-styling'>
                <button className="time-styling"
                        onClick={() => this.selectedFeature(ProductData.featureList[0])}>
                {ProductData.featureList[0]}
                </button>
                <button className="heartrate-styling" 
                onClick={() => this.selectedFeature(ProductData.featureList[1])}>
                  {ProductData.featureList[1]}
                </button>
              </div>
            </div>
    
          </div>
    
        </div>
      );
    }
  
}

export default App;
