import React, {ChangeEvent, useRef, useState} from 'react';
import { AppContainer, Input, ResultsContainer, ResultsRow } from 'Styles/app';
import useTldList from '../hooks/useTldList';

export default function App() {
  const tldSearch = useTldList();
  const [results, setResults] = useState<string[]>([]);
  const [hasRanOnce, setHasRanOnce] = useState(false);
  const delayTimeout = useRef<number>();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (delayTimeout.current) {
      window.clearTimeout(delayTimeout.current);
    }

    delayTimeout.current = window.setTimeout(() => {
      setResults(() => tldSearch(e.target.value));

      if (!hasRanOnce) {
        setHasRanOnce(true);
      }
    }, 750);
  };

  const onResultClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;

    const p = target.querySelector('p');

    if (!p) {
      return;
    }

    navigator.clipboard.writeText(p.textContent ?? '');

    const temp = p.textContent;
    p.textContent = 'Copied!';

    window.setTimeout(() => {
      if (p) {
        p.textContent = temp;
      }
    }, 2000);
  };

  return (
    <AppContainer>
      <Input placeholder={'Enter your domain'} onChange={(e) => onInputChange(e)} autoCorrect={'false'}
             autoCapitalize={'false'} spellCheck={'false'}/>
      <ResultsContainer>
        {results.length > 0 ? results.map(result => (
          <ResultsRow key={result} onClick={(e) => onResultClick(e)}>
            <p>{result}</p>
          </ResultsRow>
        )) : (
          <ResultsRow style={{cursor: 'auto'}}>
            {
              hasRanOnce ? (
                <p>No matching TLD's found :(</p>
              ) : (
                <p>Enter a domain to get started</p>
              )
            }
          </ResultsRow>
        )}
      </ResultsContainer>
    </AppContainer>
  );
}
