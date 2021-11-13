import {TldType} from '../types';
import tldList from '../tld';

const entries = Object.entries(tldList);

export default function useTldList() {
  return (domain: string, type?: TldType) => {
    if (!domain || domain.length <= 2) {
      return [];
    }

    const domains: string[] = [];

    for (const [key, value] of entries) {
      if (domain.endsWith(key) && (value === type || !type)) {
        const regexPattern = `(${key})$`;
        const regex = new RegExp(regexPattern, 'gmi');
        domains.push(domain.replace(regex, '.$1'));
      }
    }

    return domains;
  };
}
