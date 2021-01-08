import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col";

import image_two from "../images/2.png"
import { styles } from '../style';


export function SectionsTwo() {
    return (
       
        <section style={styles.section_two}>
        <Row style={styles.row}>
        
          <Col style={styles.colImgOdd}>
            <img style={styles.image} src={image_two} alt="image" />
          </Col>

          <Col style={styles.colText}>
            <div>
              <span style={styles.spanText}>Lorem Ipsum</span>
              <p style={styles.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </Col>
        </Row>

      </section>
       
    )
}
