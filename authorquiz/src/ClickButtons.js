import React from 'react';

function ClickButtons({ numbers, onSelect }) {
    const makeButton = v => <button key={v} id={v}>{v}</button>

    return <div>
        {_.range(1, numbers + 1).map(makeButton)}
    </div>;
}
export default ClickButtons;