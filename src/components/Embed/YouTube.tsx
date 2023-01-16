// TODO: increase the width of container like images

export default function YouTube({
  id,
  fullWidth,
}: {
  id: string;
  fullWidth?: boolean;
}) {
  return (
    <div className={fullWidth ? 'full-width' : 'aspect-w-16 aspect-h-9'}>
      <iframe
        className={fullWidth ? 'h-screen w-full' : '!my-0'}
        src={`https://youtube.com/embed/${id}`}
        title="YouTube video"
      />
    </div>
  );
}

YouTube.defaultProps = {
  fullWidth: false,
};
