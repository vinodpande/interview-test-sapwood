
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {styles} from './style';

import Container from 'react-bootstrap/Container';

import { Header } from "./components/header";
import { SectionsOne } from "./components/sections_one";
import { SectionsTwo } from "./components/sections_two";
import { SectionsThree } from "./components/sections_three";
import { NutritionTable } from "./components/nutrition_table";
import { SectionsFour } from "./components/sections_four";


function App() {
  return (

    <Container>
     <Header/>
      <SectionsOne/>
      <SectionsTwo/>
      <SectionsThree/>
      <NutritionTable/>
      <ul style={styles.ulHead}><li>Delivering with love and care for you to relish</li></ul>
      <SectionsFour/>
    </Container>

  );
}

export default App;
