import React from 'react';
import Button from './Button';

import Button from './Button'
import ExampleContainer from "./ExampleContainer"
import "./styles.css"

/********************************************/
/* CLASS 01: SETUP                          */
/********************************************/

// function sum(a, b){
//     return a + b;
// }

// function primeiroJSX(){
//     return (
//         <div>
//             <h1>Matheus Misumoto - Introdução ao ReactJS</h1>
//             <h2>Lista de Comandos:</h2>
//             <ol>
//                 <li>npm init</li>
//                 <li>npm install --save react react-dom react-scripts jsx</li>
//                 <li>npm start</li>
//             </ol>
//             <p className="teste">
//                 Importante: para rodar no npm-start, é necessário que o código <code>"start": "react-scripts start"</code> esteja dentro do objeto <code>scripts</code> do <code>package.json</code>
//                 </p>
//             <h2>Exemplo de função:</h2>
//             <p>Soma: {sum(10,20)}</p>
//         </div>
//     )
// }

// const App = () => {

//     return (
//         <div className="App">
//             {primeiroJSX()}
//         </div>
//     )
// }


/********************************************/
/* CLASS 02.1: RENDERIZATION                */
/********************************************/

// const element = 'Digital Innovation'
// const element2 = <h1>Olá</h1>

// function App(){
//     return (
//         <div>
//             {element}
//             {element2}
//         </div>
//     )
// }

/********************************************/
/* CLASS 02.2: COMPONENTS AND PROPS         */
/********************************************/

// function multiply(a,b) {
//     alert(a * b);
// }

// // ExampleContainer: Components inside Components
// const App = () => {
//     return (
//         <div className="App">
//             <h1>Hello World</h1>
//             <ExampleContainer>
//                 <Button onClick={() => multiply(2,5)} name="Quanto é 2 x 5?" />
//             </ExampleContainer>
//         </div>
//     )
// }

/********************************************/
/* CLASS 03.1: STATE AND LIFECICLE          */
/* ---------------------------------------- */
/* 1. Initialization                        */
/* 2. Mount                                 */ 
/*      - componentDidMount                 */
/* 3. Update                                */
/*      - componentWillReceiveProps         */
/*      - shouldComponentUpdate             */
/*      - componentWillUpdate               */
/*      - componentDidUpdate                */
/* 4. Unmount                               */
/*      - componentWillUnmount              */
/********************************************/

// class App extends Component {
//     constructor(props){
//         super(props);
    
//         this.state = {
//             clock: 0,
//             cup: 'water'
//         }
//     }

//     componentDidMount() {
//         window.setTimeout(() => {
//             this.setState({
//                 cup: 'wine'
//             })
//         }, 3000);
//         window.setInterval(() => {
//             this.setState({
//                 clock: this.state.clock + 1
//             })
//         }, 1000);
//         this.setState({});
//     }

//     changeCup = () => {
//         this.setState({
//             cup: 'Coca-Cola'
//         })
//     }

//     render(){
//         const { clock, cup } = this.state;
//         return <div>
//             <p>Seconds running: {clock}</p>
//             <div className="example-container">
//                 <div>Current beverage: {cup}</div>
//                 <div><button onClick={() => this.changeCup()}>Change</button></div>
//             </div>
            
//         </div>
//     }
// }


/********************************************/
/* CLASS 03.2: ECOSYSTEM                    */
/* ---------------------------------------- */
/* React Router                             */
/* Redux                                    */
/* Material UI                              */
/* Ant-Design                               */
/* Storybook                                */
/* Gatsby                                   */
/* Jest                                     */
/* React i18n Next                          */
/********************************************/

/********************************************/
/* CLASS 04.1: WEBPACK                      */
/* ---------------------------------------- */
/* Module bundler: build the modules in     */
/* one or more files.                       */
/*                                          */
/* Static module bundler for modern         */ 
/* JS applications. When webpack processes  */
/* your application, it internally builds   */
/* a dependency graph from one or more      */
/* entry points and then combines every     */
/* module your project needs into one or    */
/* more bundles, which are static assets    */
/* to serve your content from.              */
/*                                          */
/* https://webpack.js.org/                  */
/********************************************/
/* Concept:                                 */
/*                                          */
/* - Entry: From this reference, Webpack    */
/* looks for all modules and dependencies   */
/*                                          */
/* - Output: Which modules it will export   */
/*                                          */
/* - Loaders: Manage other files, like      */
/* JSON, images, CSS, etc.                  */
/*                                          */
/* - Plugins: minify and optimize packages, */
/* script injection, etc.                   */
/* ---------------------------------------- */
/* Mode: production, development, none      */
/*                                          */
/* - Production: optimize the code          */
/*                                          */
/* - Production: utilizes 3 plugins:        */
/* UglifyJsPlugin, NoEmitOnErrosPlugin and  */
/* ModuleConcatenationPlugin.               */
/* ---------------------------------------- */
/* How to config:                           */
/*                                          */
/* 1) Create the file webpack.config.js     */
/*    with some template model              */
/*                                          */
/* 2) npm i -D webpack webpack-cli          */
/*                                          */
/* 3) insert into "scripts" object          */
/*    on package.json:                      */ 
/*    "build": "webpack --mode-production"  */
/*                                          */
/* 4) npm i @babel/core babel-loader        */
/*    @babel/preset-env                     */
/*    @babel/preset-react --save-dev        */
/*                                          */
/* 5) npm i react react-dom                 */
/*                                          */
/* 6) npm i -D babel-preset-react           */
/*                                          */
/* 7) Create the file .babelrc, with:       */
/*    {                                     */
/*      "presets": [                        */
/*          "@babel/preset-env"             */
/*          "@babel/preset-react"           */
/*      ]                                   */
/*    }                                     */
/*                                          */
/* 7) npm i -D html-webpack-plugin          */
/*    html-loader                           */
/*                                          */
/* 7) On webpack.config.js:                 */
/*    const HtmlWebPackPlugin =             */
/*    require('html-webpack-plugin');       */
/*                                          */
/*    plugins: [                            */
/*      new HtmlWebPackPlugin({             */
/*          template: './src/index.html',   */
/*            filemame: './index.html'      */
/*      })                                  */
/*     ]                                    */
/*                                          */
/* ---------------------------------------- */
/* Create a webserver:                      */
/*                                          */
/* 1) npm i -D webpack-dev-server           */
/*                                          */
/* 3) insert into "scripts" object          */
/*    on package.json:                      */ 
/*    "start:dev": "webpack-dev-server"     */
/********************************************/

/********************************************/
/* CLASS 04.2: ESLINT + SERVICEMAP          */
/* ---------------------------------------- */
/* npm install --save-dev eslint            */
/* babel-eslint eslint-plugin-react         */
/* eslint-watch eslint-config-airbnb        */
/* ---------------------------------------- */
/* 1) Create .eslintrc with some model      */
/*    (like eslint-config-airbnb)           */
/*                                          */
/*  {                                       */
/*    "extends": "airbnb",                  */
/*    "eslint linebreak-style": ["error",   */
/*      "windows"]                          */
/*  }                                       */
/* ---------------------------------------- */
/*  Source Map: map the files to debug and  */
/*  identify errors                         */
/*                                          */
/*  Add on webpack.config / module.exports: */
/*  devtool: 'source-map'                   */
/********************************************/


/********************************************/
/* CLASS 05.1: CONDITIONAL RENDERING        */
/********************************************/

const buttonA = <button>Histórico dos Clientes</button>
const buttonB = <button>Cadastrar Cliente</button>
const customer = 'Matheus Misumoto'
const hasCustomer = true

// const App = () => {

//     return(
//         <div>
//             <h1>Aula React 03</h1>
//             <p>Usando webpack + babel!</p>
//             <Button />
//             {hasCustomer && (
//                 <div>
//                     <p>Clique no botão abaixo para visualizar o histórico dos clientes</p>
//                     {buttonA}
//                 </div>
//             )}
//             {hasCustomer ? (
//                 <div>
//                     <p>Clientes existentes</p>
//                 </div>
//             ) : (
//                 <div>
//                     <p>Clique no botão abaixo para cadastrar clientes</p>
//                     {buttonB}
//                 </div>
//             )}
//         </div>
//     );
// };

// Example 2

// const App = () => {

//     const renderShowHistory = (
//         <div>
//             <p>Clique no botão abaixo para visualizar o histórico dos clientes</p>
//             {buttonA}
//         </div>
//     )

//     const renderAddCustomer = (
//         <div>
//             <p>Clique no botão abaixo para cadastrar clientes</p>
//             {buttonB}
//         </div>
//     )
    
//     const showCustomer = () => {
//         if(!hasCustomer) return null

//         return(
//             <div>
//                 <h2>Nome do Cliente: {customer}</h2>
//             </div>
//         )
//     }

//     return(
//         <div>
//             <h1>Aula React 03</h1>
//             <p>Usando webpack + babel!</p>
//             <Button />
//             {showCustomer()}
//             {hasCustomer ? renderShowHistory() : renderAddCustomer() }
//         </div>
//     );
// };

/********************************************/
/* CLASS 05.2: LISTS AND KEYS               */
/********************************************/

// const listCustomers = [
//     {
//         id: 1,
//         name: 'Matheus Misumoto',
//         skills: ['HTML','CSS','JavaScript','React','MariaDB','PHP']
//     },
//     {
//         id: 2,
//         name: 'John Doe',
//         skills: ['Java','.NET']
//     },
//     {
//         id: 3,
//         name: 'Steve Jobs',
//         skills: ['Swift','C#','Swift UI','Linux']
//     },
//     {
//         id: 4,
//         name: 'Bill Gates',
//         skills: ['Git','Windows','ASP']
//     }
// ]

// const App = () => {

//     const renderCustomers = (customer, index) => {
//         return (
//             <li key={`customer-${customer.id}`}>{customer.name}
//                 <ul>
//                     {customer.skills.map(renderSkills)}
//                 </ul>
//             </li>
//         )
//     }

//     const renderSkills = (skill, index) => <li key={`skill-${index}`}>{skill}</li>


//     return(
//         <div>
//             <h1>Aula React 03</h1>
//             <p>Usando webpack + babel!</p>
//             <ul>
//                 {listCustomers.map(renderCustomers)}
//             </ul>
//         </div>
//     );
// };


/********************************************/
/* CLASS 05.3: EVENT MANIPULATION           */
/********************************************/

// const App = () => {

//     const name = 'Matheus Misumoto'

//     const showEvent = (e) => {
//         console.log('evento clicado!')
//         console.log('e')
//         alert(name)
//     }
    
//     const ButtonC = <button onClick={showEvent}>Mostrar Evento</button>

//     const handleChange = (e) => {
//         const { value } = e.target
//         console.log(value)
//     }

//     return(
//         <div>
//             <h1>Aula React 03</h1>
//             <p>Usando webpack + babel!</p>
//             <input onChange={handleChange} />
//             {ButtonC}
//         </div>
//     );
// };


var listCustomers = [
    {
        id: 1,
        name: 'Matheus Misumoto',
        skills: ['HTML','CSS','JavaScript','React','MariaDB','PHP']
    },
    {
        id: 2,
        name: 'John Doe',
        skills: ['Java','.NET']
    },
    {
        id: 3,
        name: 'Steve Jobs',
        skills: ['Swift','C#','Swift UI','Linux']
    },
    {
        id: 4,
        name: 'Bill Gates',
        skills: ['Git','Windows','ASP']
    }
]

const App = () => {

    const handleClick = (e, id) => {
        console.log('deletar cliente')
        alert(`ID do cliente: ${id}`)
    }

    const renderCustomers = (customer, index) => {
        return (
            <li key={`customer-${customer.id}`}>{customer.name} <button onClick={(e) => handleClick(e, customer.id)}>Deletar Cliente</button>
                <ul>
                    {customer.skills.map(renderSkills)}
                </ul>
            </li>
        )
    }

    const renderSkills = (skill, index) => <li key={`skill-${index}`}>{skill}</li>


    return(
        <div>
            <h1>Aula React 03</h1>
            <p>Usando webpack + babel!</p>
            <ul>
                {listCustomers.map(renderCustomers)}
            </ul>
        </div>
    );
};

export default App;