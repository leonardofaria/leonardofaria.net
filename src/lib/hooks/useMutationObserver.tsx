// https://tobbelindstrom.com/blog/useMutationObserver/
import { RefObject, useEffect, useMemo } from 'react';

 

interface Props {
  target?: RefObject<Element | null> | Element | Node | null;
  options?: MutationObserverInit;
  callback?: MutationCallback;
}

function getRefElement<T>(
  element?: RefObject<Element | null> | T,
): Element | T | undefined | null {
  // @ts-ignore
  if (element && 'current' in element) {
    return element.current;
  }

  return element;
}

export const useMutationObserver = ({
  target,
  options = {},
  callback,
}: Props): void => {
  const observer = useMemo(
    () =>
      new MutationObserver(
        (mutationRecord, mutationObserver) =>
          callback?.(mutationRecord, mutationObserver),
      ),
    [callback],
  );

  useEffect(() => {
    const element = getRefElement(target);

    if (observer && element) {
      observer.observe(element, options);
      return () => observer.disconnect();
    }
  }, [target, observer, options]);
};
