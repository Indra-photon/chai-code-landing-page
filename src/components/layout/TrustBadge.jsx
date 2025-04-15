import React from 'react';
import Badge from '../common/Badge';
import Container from './Container';

const TrustBadge = () => {
    return (
        <div className="w-full bg-black/50 backdrop-blur-sm mt-0 py-2 text-center border-b border-subtle">
            <Container>
            <div className="flex justify-center items-center">
                <Badge text="Trusted by 1.5M Code Learners" className="bg-blue-accent/20 text-blue-accent py-1 px-3 text-sm" />
            </div>
            </Container>
        </div>
    );
};

export default TrustBadge;