import react from 'react';
import chapterData from '../../public/data.json';
import List from './List';

export default function Mainview() {
  return (
    <>
      <List heading={chapterData.Chapters[0]} topics={chapterData.htmlTopics} />
      <List heading={chapterData.Chapters[1]} topics={chapterData.cssTopics} />
    </>
  );
}
