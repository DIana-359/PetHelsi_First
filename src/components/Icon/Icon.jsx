const Icon = ({ sprite, id, width, height, className }) => {
  return (
    <svg width={width} height={height} className={className}>
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};

export default Icon;
