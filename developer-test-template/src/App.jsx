import { Route, Routes } from 'react-router-dom';
import './App.css';
import TestPage from './pages/TestPage';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';
import HomePage from './pages/HomePage';
import RootLayout from './components/layout/RootLayout';

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/test" element={<TestPage />}></Route>
        <Route path="/question" element={<QuestionPage />}></Route>
        <Route path="/result" element={<ResultPage />}></Route>
        <Route path="*" element={<div>404 잘못된 페이지 요청입니다</div>} />
      </Route>
    </Routes>
  );
}

export default App;
