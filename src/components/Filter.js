function Filter({ title, rating, onTitleChange, onRatingChange }) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filtrer par titre..."
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <select value={rating} onChange={(e) => onRatingChange(Number(e.target.value))}>
        <option value={0}>Toutes les notes</option>
        {[1, 2, 3, 4, 5].map((n) => (
          <option key={n} value={n}>
            {n}★ et plus
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
