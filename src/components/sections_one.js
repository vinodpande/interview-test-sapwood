import React ,{style}from 'react'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col";

import image_one from "../images/1.png"
import {styles} from '../style'


export function SectionsOne() {
    return (
       
        <section style={styles.section_one}>
        <Row style={styles.row}>
          <Col style={styles.colText}>
            <div>
              <span style={styles.spanText}>Lorem Ipsum</span>
              <p style={styles.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </Col>
          <Col style={styles.colImgEven}>
            <img style={styles.image}  src={image_one} alt="image" />
          </Col>
        </Row>

      </section>
       
    )
}
