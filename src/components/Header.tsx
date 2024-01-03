import react from 'react';
import chapterData from '../../public/data.json';

export default function Header() {
  return (
    <div className="introPage">
      <div className="modulePage">
        <div>
          <h3>Module {chapterData.Module}</h3>
        </div>
        <div className="pageNumber">Page {chapterData.Page}</div>
      </div>
      <h1>HTML, CSS AND JAVASCRIPT </h1>
      <p>
        Learn fundamental concepts of HTML, CSS and Javascript that you need to
        know before start learning Angular{' '}
      </p>
    </div>
  );
}
