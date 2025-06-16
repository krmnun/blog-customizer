import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { ArrowButton } from 'src/ui/arrow-button/ArrowButton';
import { Article } from './components/article/Article';
import ArticleParamsForm from './components/article-params-form'; // Using barrel file
import { defaultArticleState, ArticleStateType } from 'src/constants/articleProps';
import styles from './App.module.scss';

const App = () => {
  const [articleState, setArticleState] = useState<ArticleStateType>(defaultArticleState);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.style.setProperty('--font-family', articleState.fontFamilyOption.value);
    document.documentElement.style.setProperty('--font-size', articleState.fontSizeOption.value);
    document.documentElement.style.setProperty('--font-color', articleState.fontColor.value);
    document.documentElement.style.setProperty('--container-width', articleState.contentWidth.value);
    document.documentElement.style.setProperty('--bg-color', articleState.backgroundColor.value);
  }, [articleState]);

  const handleToggleSidebar = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.querySelector(`.${styles.container}`);
      if (isSidebarOpen && sidebar && !sidebar.contains(event.target as Node)) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isSidebarOpen]);

  const handleApply = (newState: ArticleStateType) => {
    setArticleState(newState);
    setIsSidebarOpen(false);
  };

  const handleReset = () => {
    setArticleState(defaultArticleState);
    setIsSidebarOpen(false);
  };

  return (
    <main className={clsx(styles.main)}>
      <ArrowButton isOpen={isSidebarOpen} onClick={handleToggleSidebar} />
      <ArticleParamsForm
        initialState={articleState}
        isSidebarOpen={isSidebarOpen}
        onApply={handleApply}
        onReset={handleReset}
      />
      <Article />
    </main>
  );
};

export default App;