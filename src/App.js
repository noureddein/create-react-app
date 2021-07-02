import React from 'react';


// !=====================
// !===== Class 1 =======
// !=====================

import Main from './class1-components/main';
import Header from './class1-components/header';
import Footer from './class1-components/footer';

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         <Main />
//         <Footer />
//       </div>
//     )
//   }

// }



// !=====================
// !===== Class 2 =======
// !=====================
import Parent from './class2-components/Parent';

class App extends React.Component {
  render() {
    return (
      <Parent />
    )
  }
}





export default App;