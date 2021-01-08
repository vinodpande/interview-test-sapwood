import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col";

import image_three from "../images/3.png";
import {styles} from '../style';


export function SectionsThree() {
    return (
       
        <section style={styles.section_three}>
        <Row style={styles.row}>
          <Col style={styles.colText}>
            <div>
              <span style={styles.spanText}>Lorem Ipsum</span>
              <p style={styles.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </Col>
          <Col style={styles.colImgEven}>
            <img style={styles.image}  src={image_three} alt="image" />
          </Col>
        </Row>

      </section>
       
    )
}
