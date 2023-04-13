import React from 'react';

type ComponentType = 'StyledH2' | 'StyledA' | 'StyledDiv';

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

const StyledH2: React.FC = () => {
    return <h2 style={{ color: 'red' }}>This is StyledH2</h2>;
};

const StyledA: React.FC = () => {
    return <a style={{ color: 'green' }}>This is StyledA</a>;
};

const StyledDiv: React.FC = () => {
    return <div style={{ color: 'blue' }}>This is StyledDiv</div>;
};

