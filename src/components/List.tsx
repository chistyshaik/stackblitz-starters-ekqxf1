import react from 'react';
import chapterData from '../../public/data.json';

interface ListProps {
  heading: Array<string>;
  topics: Array<{ question: string; key: string }>;
}

export default function List({ heading, topics }: ListProps) {
  return (
    <div className="listContainer">
      <h2>{heading}</h2>
      <ul>
        {topics.map((topic, idx) => (
          <li key={idx} className="ListItem">
            {topic.question}
          </li>
        ))}
      </ul>
    </div>
  );
}
