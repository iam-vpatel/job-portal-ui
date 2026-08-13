// Mobile-first: anchor to the trigger's left edge so a wide bubble can't overflow the
// viewport (the footer clips overflow). Center it only once there is room, at sm and up.
const POSITION_CLASSES = {
  top: 'bottom-full left-0 sm:left-1/2 sm:-translate-x-1/2 mb-3',
  bottom: 'top-full left-0 sm:left-1/2 sm:-translate-x-1/2 mt-3',
  left: 'right-full top-1/2 -translate-y-1/2 mr-3',
  right: 'left-full top-1/2 -translate-y-1/2 ml-3',
};

const CARET_CLASSES = {
  top: 'top-full left-6 sm:left-1/2 sm:-translate-x-1/2 -mt-1 border-r border-b',
  bottom: 'bottom-full left-6 sm:left-1/2 sm:-translate-x-1/2 -mb-1 border-l border-t',
  left: 'left-full top-1/2 -translate-y-1/2 -ml-1 border-t border-r',
  right: 'right-full top-1/2 -translate-y-1/2 -mr-1 border-b border-l',
};

export const Tooltip = ({ content, position = 'top', className = '', children }) => {
  return (
    <span className={`group/tooltip relative inline-block ${className}`}>
      {children}
      <span
        role="tooltip"
        className={`
          absolute z-20 w-64 max-w-[calc(100vw-2rem)] px-3 py-2 rounded-lg
          bg-gray-800 border border-gray-700/50 shadow-lg
          text-xs leading-relaxed text-gray-200 text-left font-normal normal-case
          opacity-0 invisible pointer-events-none
          group-hover/tooltip:opacity-100 group-hover/tooltip:visible
          group-focus-within/tooltip:opacity-100 group-focus-within/tooltip:visible
          transition-opacity duration-300
          ${POSITION_CLASSES[position]}
        `}
      >
        {content}
        <span
          aria-hidden="true"
          className={`absolute w-2 h-2 rotate-45 bg-gray-800 border-gray-700/50 ${CARET_CLASSES[position]}`}
        />
      </span>
    </span>
  );
};

export default Tooltip;
