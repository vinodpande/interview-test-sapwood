import React, { Component } from 'react';
import {styles} from '../style';

export function NutritionTable() {

    return (
        <div style={styles.card}>

            <div style={styles.tableSmallHead}>Nutrition fact</div>            
            <div style={styles.tableMediumHead}>Serving size</div>

            <div style={styles.tableText}>Amount per serving</div>
            <div style={styles.tableLargeHead}>Calories</div>

          <div><span style={styles.tableTextBold}>Total fact</span> 0.3g</div>
            <hr />
            <div style={styles.tableText}>Saturated fat 0.1g</div>
            <hr />
            <div style={styles.tableText}><span style={styles.tableTextBold}>Sodium</span> 1mg</div>
            <hr/>
            <div><span style={styles.tableTextBold}>Total carbohydrate </span>23g</div>
            <hr />
            <div  style={styles.tableText}>Dietary fiber 2.6g</div>
            <hr/>
            <div  style={styles.tableText}>Sugar 12g</div>
            <hr />
            <div  style={styles.tableMediumHead}>Protein 1.1g</div>
            <hr />
            <div  style={styles.tableText}>Vitamin D 0.00mcg</div>
            <hr/>
            <div  style={styles.tableText}>Calcium 5.0mg</div>
            <hr/>
            <div  style={styles.tableText}>Iron 0.26mg</div>
            <hr />
            <div  style={styles.tableMediumHead}>Potassium 358mg</div>
            <div  style={styles.tableText}>last line not displayed </div>


        </div>
    )

}

export default NutritionTable

