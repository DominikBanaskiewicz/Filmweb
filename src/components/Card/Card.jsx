import css from './Card.module.css';

export const Card = props => {
  const getStyles = (id, id2) => {
    if (id === id2) return `${css.card} ${css.big}`;
    return `${css.card}`;
  };

  return (
    <div id={props.id} className={getStyles(props.isBig, props.id)}>
      <img
        className={css.card__image}
        src={props.imgUrl}
        alt={props.alt || 'Image'}
      />
      <div className={css.card__content}>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};
