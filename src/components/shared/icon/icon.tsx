import React, { FC } from 'react';
import IcomoonReact from 'icomoon-react';

import icomoonJson from '../../../assets/selection.json';

type IconPropsTypes = {
    icon: string,
    size?: number,
    className?: string,
    color?: string,
};

export const Icon: FC<IconPropsTypes> = ({ ...props }) => (
  <IcomoonReact iconSet={icomoonJson} {...props} />
);
