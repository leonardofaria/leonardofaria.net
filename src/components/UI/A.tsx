import { AiOutlineGithub } from 'react-icons/ai';
import { CONTENT_STYLES } from 'src/lib/rehypePrettyCode';

function getIcon(href: string) {
  if (href.includes('github.com')) {
    return <AiOutlineGithub className="mx-1 mt-[-2px] inline-block" />;
  }

  return null;
}

export function A({
  children,
  className,
  href,
  ...rest
}: {
  children: string;
  className?: string;
  href: string;
}) {
  const classes = `inline-block ${CONTENT_STYLES.a} ${className ?? ''}`;

  return (
    <a className={classes} href={href} {...rest}>
      {getIcon(href)}
      <span>{children}</span>
    </a>
  );
}
