import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Quiz from './components/Quiz/Quiz';
import Home from './components/Home/Home';
import QuizDetails from './components/QuizDetails/QuizDetails';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/quiz',
          loader: async () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          } ,
          element: <Quiz></Quiz>
        },
        {
          path: '/statistics',
          loader: async () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          } ,
          element:<Statistics></Statistics>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
        {
          path: '/quiz/:quizId',
          loader: async ({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <QuizDetails></QuizDetails>
        }
      ]
    }, 
    
    {
      path: '*',
      element: <Error></Error>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
