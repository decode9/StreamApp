import React, { memo, FC } from 'react';
import { Ionicons, MaterialCommunityIcons, AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import Props from './interface';

const Icon: FC<Props> = memo(({ type, name, size, color }) => {
  const iconProps = {
    name, size, color
  }

  switch(type) {
    case 'mci':
    return <MaterialCommunityIcons {...iconProps}/>

    case 'ad':
    return <AntDesign {...iconProps}/>

    case 'sli':
    return <SimpleLineIcons {...iconProps}/>

    default:
    return <Ionicons {...iconProps}/>
  }
});

export default Icon;
