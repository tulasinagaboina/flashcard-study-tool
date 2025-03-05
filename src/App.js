import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FlashcardBody from './components/FlashcardBody';
import './App.css';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Profile from './components/Profile';
import ReviewCards from './components/ReviewCards';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<FlashcardBody/>} />
      <Route path="/about" element={<About /> } />
      <Route path="/contact" element={<Contact />}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/review-cards" element={<ReviewCards />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}






// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <FlashcardBody/>
//       <Footer/>
//     </div>
//   );
// }

//     <div className="App">
//       <header className="App-header">
//         <p>Hello,I'm Tulsi.learning React Course!</p>
//         <h2>My Journey with React</h2>
//       </header>
//     </div>
//   );
// }

export default App;


