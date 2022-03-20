import React from "react";
import classes from './FitBitCard.module.css';

export const FitBitCards = (props) => {
    return(   
        <button className={classes.FitBitButtonStyle} 
                onClick = {props.onSelection}>
            <img className={classes.FitBitOptionsStyle} 
            alt={props.styleName} 
            src = {props.imageUrl}>
            </img>      
        </button>     
        
    )
}

const timeFeature = () => {
    return(
        <h1 className={classes.centered}>12:00</h1>
    )
}

const  HeartRateFeature = () => {
    return(
        <h1 className={classes.centered}>78</h1>
    )
}

export const SelectedFitBit = (props) => {
    return(   
        <div className={classes.container}>
            <img alt={props.styleName} src = {props.imageUrl} />
            {props.feature === "Time" ? timeFeature() : HeartRateFeature()}           
        </div>
          
        
    )
}

