export const canUseDOM = !!(typeof window !== 'undefined' && window?.document?.createElement);

const validColors = ["primary", "secondary", "danger", "info"];
export const getBtnColorClassName = (color) => {
    return validColors.includes(color) ? `btn-${color}` : "btn-primary";
};

const validSizes = ["lg", "sm"];
export const getBtnSizeClassName = (size) => {
    return validSizes.includes(size) ? `btn-${size}` : "";
};

export const getBgColorHighlightClassName = (color) => {
    return validColors.includes(color) ? `bg-${color}-highlight` : "bg-primary-highlight";
};

export const getBgColorClassName = (color) => {
    return validColors.includes(color) ? `bg-${color}` : "bg-primary";
};
