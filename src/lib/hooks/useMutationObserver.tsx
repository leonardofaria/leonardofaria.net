import { RefObject, useEffect, useMemo } from 'react';
import { IS_SSR } from 'lib/constants';

/* eslint-disable no-undef, no-unused-vars, consistent-return */

interface Props {
  target?: RefObject<Element> | Element | Node | null;
  options?: MutationObserverInit;
  callback?: MutationCallback;
}

function getRefElement<T>(
  element?: RefObject<Element> | T
): Element | T | undefined | null {
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
      !IS_SSR
        ? new MutationObserver((mutationRecord, mutationObserver) => {
            callback?.(mutationRecord, mutationObserver);
          })
        : null,
    [callback]
  );

  useEffect(() => {
    const element = getRefElement(target);

    if (observer && element) {
      observer.observe(element, options);
      return () => observer.disconnect();
    }
  }, [target, observer, options]);
};
