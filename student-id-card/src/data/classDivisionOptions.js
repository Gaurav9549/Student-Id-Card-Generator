// src/data/classDivisionOptions.js
export const classDivisionOptions = Array.from({ length: 10 }, (_, classIndex) => {
    const classNum = classIndex + 1;
    return ['A', 'B', 'C', 'D', 'E'].map(section => ({
        value: `${classNum}-${section}`,
        label: `${classNum}-${section}`,
    }));
}).flat();
