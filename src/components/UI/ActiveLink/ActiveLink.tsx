import React, { AnchorHTMLAttributes, forwardRef } from 'react';

import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

type TActiveLinkProps = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { activeClassName?: string };

const ActiveLink = forwardRef<HTMLAnchorElement, TActiveLinkProps>(
  ({ className, activeClassName, href, ...props }, ref) => {
    const router = useRouter();

    // const active = router.asPath === href || router.pathname === href;
    const active = router.pathname.startsWith(href as string);

    return (
      <>
        <Link
          ref={ref}
          href={href}
          className={`${className || ''} ${active ? activeClassName : ''}`}
          {...props}
        >
          {props.children}
        </Link>
      </>
    );
  },
);

ActiveLink.displayName = 'ActiveLink';

export default ActiveLink;
