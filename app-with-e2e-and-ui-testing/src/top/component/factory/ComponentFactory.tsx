import React from 'react';
import { StyledH2 } from '../products/StyledH2';
import { StyledDiv } from '../products/StyledDiv';
import { StyledA } from '../products/StyledA';

interface ComponentFactoryProps {
    componentId: ComponentType;
}

export const ComponentFactory: React.FC<ComponentFactoryProps> = ({ componentId }) => {
    switch (componentId) {
        case 'StyledH2':
            return <StyledH2 />;
        case 'StyledA':
            return <StyledA />;
        case 'StyledDiv':
            return <StyledDiv />;
        default:
            return null;
    }
};
